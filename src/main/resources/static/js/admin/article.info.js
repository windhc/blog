/**
 * Created by HC on 2016/6/27.
 */
'use strict';

var BlogApp = require('./app.js');

BlogApp
    .controller('ArticleCtrl', ['$scope', 'ArticleService',
        function($scope, ArticleService) {
            ArticleService.getOne(1).success(function (data) {
                $scope.article = data.data;
            });

            $scope.totalItems = 0;
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.pageSize = 10 ;   //每页大小
            function getPageData() {
                $scope.params = "size="+$scope.pageSize+"&page="+($scope.currentPage-1);
                ArticleService.listArticle($scope.params).success(function (data) {
                    $scope.articles = data.data.content;
                    $scope.totalItems = data.data.totalElements;
                });
            }
            getPageData();
            $scope.pageChanged = function() {
                getPageData();
                console.log('Page changed to: ' + $scope.currentPage);
            };
        }
    ])
    .controller('ArticleEditCtrl', ['$scope', function($scope) {

        console.log("test ArticleEditCtrl");

    }])
    .controller('ArticleDetailCtrl', ['$scope', function($scope) {

        console.log("test ArticleDetailCtrl");

    }]);