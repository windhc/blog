/**
 * Created by HC on 2016/6/27.
 */
'use strict';

BlogApp
    .controller('ArticleCtrl', ['$scope', 'ArticleService', 'CommonService',
        function($scope, ArticleService, CommonService) {

            $scope.totalItems = 0;
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.pageSize = 10 ;   //每页大小
            function getPageData() {
                $scope.params = "pageSize="+$scope.pageSize+"&pageNum="+($scope.currentPage);
                ArticleService.listArticle($scope.params).then(function (response) {
                    $scope.articles = response.data.data.list;
                    $scope.totalItems = response.data.data.total;
                });
            }
            getPageData();
            $scope.pageChanged = function() {
                getPageData();
            };
            $scope.delete = function (id) {
                CommonService.confirm("确定删除？", function () {
                    ArticleService.delete(id).then(function (response) {
                        CommonService.show(response.data);
                        getPageData();
                    })
                })
            };
        }
    ])
    .controller('ArticleAddCtrl', ['$scope', '$location', 'ArticleService', 'CommonService',
        function($scope, $location, ArticleService, CommonService) {
            ArticleService.allCategory().then(function (response) {
                $scope.categories = response.data.data;
            });

            $scope.article = {};
            $scope.add = function () {
                ArticleService.save($scope.article).then(function (response) {
                    CommonService.show(response.data);
                    $location.path('/article');
                })
            }
        }
    ])
    .controller('ArticleEditCtrl', ['$scope', '$location', '$routeParams', 'ArticleService', 'CommonService',
        function($scope, $location, $routeParams, ArticleService, CommonService) {
            ArticleService.allCategory().then(function (response) {
                $scope.categories = response.data.data;
            });
            ArticleService.getOne($routeParams.id).then(function (response) {
                $scope.article = response.data.data;
            });

            $scope.save = function () {
                ArticleService.update($scope.article).then(function (response) {
                    CommonService.show(response.data);
                    $location.path('/article');
                })
            }
        }
    ])
    .controller('ArticleDetailCtrl', ['$scope', '$routeParams', 'ArticleService',
        function($scope, $routeParams, ArticleService) {
            ArticleService.getOne($routeParams.id).then(function (response) {
                $scope.article = response.data.data;
            });
        }
    ]);