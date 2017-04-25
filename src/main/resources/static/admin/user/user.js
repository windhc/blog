/**
 * Created by HC on 2016/6/27.
 */
'use strict';

BlogApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/pwd', {
            templateUrl: '/admin/user/change-pwd.html',
            controller: 'PwdCtrl'
        });
}]);

BlogApp.service('UserService', ['$http',
    function ($http) {
        return {
            savePwd: function (newPwd) {
                return $http.post("/user/pwd", newPwd);
            }
        };
    }
]);