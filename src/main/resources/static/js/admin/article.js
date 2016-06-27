/**
 * Created by HC on 2016/6/27.
 */
'use strict';

var BlogApp = require('./app.js');

BlogApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/article', {
            templateUrl: '/views/admin/article/index.html',
            controller: 'ArticleCtrl'
        }).when('/article/:id/edit', {
            templateUrl: '/views/admin/article/edit.html',
            controller: 'ArticleEditCtrl'
        }).when('/article/:id/detail', {
            templateUrl: '/views/admin/article/detail.html',
            controller: 'ArticleDetailCtrl'
        }).otherwise({redirectTo: '/article'});
}]);

BlogApp.service('ArticleService', ['$http',
    function ($http) {
        return {
            save: function (article) {
                return $http.post("/article", article);
            },
            update: function (article) {
                return $http.put("/article", article);
            },
            delete: function (id) {
                return $http.delete("/article/" + id);
            },
            getOne: function (id) {
                return $http.get("/article/" + id);
            }
        };
    }
]);