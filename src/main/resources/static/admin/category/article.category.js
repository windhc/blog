/**
 * Created by HC on 2016/6/27.
 */
'use strict';

var BlogApp = require('../../js/admin/app.js');

BlogApp
    .controller('CategoryCtrl', ['$scope', 'ArticleService', 'CommonService',
        function($scope, ArticleService, CommonService) {

            $scope.totalItems = 0;
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.pageSize = 10 ;   //每页大小
            function getPageData() {
                $scope.params = "pageSize="+$scope.pageSize+"&pageNum="+($scope.currentPage);
                ArticleService.listCategory($scope.params).success(function (data) {
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
                    ArticleService.deleteCategory(id).success(function (data) {
                        CommonService.show(data);
                        getPageData();

                    })
                })
            };

            $scope.save = function () {
                ArticleService.saveCategory($scope.category).success(function (data) {
                    CommonService.show(data);
                    $('#addModal').modal('toggle');
                    getPageData();
                })
            }
        }
    ]);