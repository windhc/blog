/**
 * Created by HC on 2016/6/27.
 */
'use strict';

BlogApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/article', {
            templateUrl: '/admin/article/index.html',
            controller: 'ArticleCtrl'
        }).when('/article/add', {
            templateUrl: '/admin/article/add.html',
            controller: 'ArticleAddCtrl'
        }).when('/article/:id/edit', {
            templateUrl: '/admin/article/edit.html',
            controller: 'ArticleEditCtrl'
        }).when('/article/:id/detail', {
            templateUrl: '/admin/article/detail.html',
            controller: 'ArticleDetailCtrl'
        }).when('/category', {
            templateUrl: '/admin/category/index.html',
            controller: 'CategoryCtrl'
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
            },
            listArticle: function (params) {
                return $http.get("/article?" + params);
            },
            getCategory: function (id) {
                return $http.get("/category/" + id);
            },
            listCategory: function (params) {
                return $http.get("/category?" + params);
            },
            saveCategory: function (category) {
                return $http.post("/category", category);
            },
            deleteCategory: function (id) {
                return $http.delete("/category/" + id);
            },
            updateCategory: function (category) {
                return $http.put("/category", category);
            },
            allCategory: function () {
                return $http.get("/category/all");
            }
        };
    }
]);