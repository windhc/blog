/**
 * Created by HC on 2016/7/28.
 */
'use strict';

BlogApp
    .controller('PwdCtrl', ['$scope', '$location', 'UserService', 'CommonService',
        function($scope, $location, UserService, CommonService) {

            $scope.cp = {};
            $scope.updatePwd = function () {
                if($scope.cp.newPwd != $scope.cp.confirmPwd) {
                    CommonService.showError("两次密码输入的不一致");
                    return;
                }
                UserService.savePwd($scope.cp).then(function (data) {
                    CommonService.show(data);
                    $location.path('/article');
                })
            };
        }
    ]);