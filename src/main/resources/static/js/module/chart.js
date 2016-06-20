/**
 * Created by Administrator on 2015/8/8.
 */

ChartApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/chart/index', {
            templateUrl: '/chart/src/html/chart.html',
            controller: 'ChartCtrl'
        }).when('/atlas/:id/edit', {
            templateUrl: '/view/atlas/edit.html',
            controller: 'AtlasEditController'
        }).otherwise({redirectTo: '/chart/index'});
}]);

ChartApp.service('UserService', ['$http',
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