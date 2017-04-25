/**
 * Created by HC on 2016/6/27.
 */
'use strict';

BlogApp
    .controller('CategoryCtrl', ['$scope', 'ArticleService', 'CommonService',
        function($scope, ArticleService, CommonService) {

            $scope.totalItems = 0;
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.pageSize = 10 ;   //每页大小
            function getPageData() {
                $scope.params = "pageSize="+$scope.pageSize+"&pageNum="+($scope.currentPage);
                ArticleService.listCategory($scope.params).then(function (data) {
                    $scope.categories = data.data.list;
                    $scope.totalItems = data.data.total;
                });
            }
            getPageData();
            $scope.pageChanged = function() {
                getPageData();
            };
            $scope.delete = function (id) {
                CommonService.confirm("确定删除？", function () {
                    ArticleService.deleteCategory(id).then(function (data) {
                        CommonService.show(data);
                        getPageData();
                    })
                })
            };

            $scope.save = function () {
                ArticleService.saveCategory($scope.category).then(function (data) {
                    CommonService.show(data);
                    $('#addModal').modal('toggle');
                    getPageData();
                })
            };

            // 打开修改模态框
            $scope.openEdit = function (id) {
                ArticleService.getCategory(id).then(function (data) {
                    $('#editModal').modal('show');
                    $scope.category = data.data;
                })
            };

            // 修改分类
            $scope.update = function (id) {
                ArticleService.updateCategory($scope.category).then(function (data) {
                    CommonService.show(data);
                    $('#editModal').modal('toggle');
                    getPageData();
                })
            }
        }
    ]);