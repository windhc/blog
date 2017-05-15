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
                ArticleService.listCategory($scope.params).then(function (response) {
                    $scope.categories = response.data.data.list;
                    $scope.totalItems = response.data.data.total;
                });
            }
            getPageData();
            $scope.pageChanged = function() {
                getPageData();
            };
            $scope.delete = function (id) {
                CommonService.confirm("确定删除？", function () {
                    ArticleService.deleteCategory(id).then(function (response) {
                        CommonService.show(response.data);
                        getPageData();
                    })
                })
            };

            $scope.save = function () {
                ArticleService.saveCategory($scope.category).then(function (response) {
                    CommonService.show(response.data);
                    $('#addModal').modal('toggle');
                    getPageData();
                })
            };

            // 打开修改模态框
            $scope.openEdit = function (id) {
                ArticleService.getCategory(id).then(function (response) {
                    $('#editModal').modal('show');
                    $scope.category = response.data.data;
                })
            };

            // 修改分类
            $scope.update = function (id) {
                ArticleService.updateCategory($scope.category).then(function (response) {
                    CommonService.show(response.data);
                    $('#editModal').modal('toggle');
                    getPageData();
                })
            }
        }
    ]);