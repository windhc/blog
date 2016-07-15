/**
 * Created by Administrator on 2015/8/8.
 */
'use strict';

var BlogApp = require('./app.js');

BlogApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/chart/index', {
            templateUrl: '/chart/src/html/chart.html',
            controller: 'ChartCtrl'
        }).when('/atlas/:id/edit', {
            templateUrl: '/views/atlas/edit.html',
            controller: 'AtlasEditController'
        }).otherwise({redirectTo: '/chart/index'});
}]);

BlogApp.service('UserService', ['$http',
    function ($http) {
        return {
            getPage: function () {
                return $http.post("/picture/picturePage");
            },
            delete: function (id) {
                return $http.get("/user/delete/" + id);
            },
            save: function (user) {
                return $http.post("/user/save", user);
            }
        };
    }
]);