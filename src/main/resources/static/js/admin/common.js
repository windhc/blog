'use strict';

var BlogApp = require('./app.js');

BlogApp
    .factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) {
        return {
            'responseError' : function(response) {
                if(response.status == 401) {
                    window.location.href = '/login';
                }
                return $q.reject(response);
            },
            'response' : function(response) {
                return response;
            },
            'request' : function(config) {
                return config;
            },
            'requestError' : function(config){
                return $q.reject(config);
            }
        };
    }])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
        // Initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        // 禁止 IE ajax request caching
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }])
    .service('CommonService', ['$timeout', '$location',
        function($timeout, $location) {
            return {
                show: function (data) {
                    switch (data.code) {
                        case 1:
                            toastr.options = {
                                closeButton: true,
                                progressBar: true,
                                showMethod: 'fadeIn',
                                timeOut: 2500
                            };
                            toastr.error(data.message);
                            break;
                        case 0:
                            toastr.options = {
                                closeButton: true,
                                progressBar: true,
                                showMethod: 'fadeIn',
                                timeOut: 2500
                            };
                            toastr.success("提交成功!");
                            break;
                        default:
                    }
                },
                showSuccess: function (message) {
                    toastr.options = {
                        closeButton: true,
                        progressBar: true,
                        showMethod: 'fadeIn',
                        timeOut: 2500
                    };
                    toastr.success(message);
                },
                showError: function (message) {
                    toastr.options = {
                        closeButton: true,
                        progressBar: true,
                        showMethod: 'fadeIn',
                        timeOut: 2500
                    };
                    toastr.error(message);
                },
                alert: function (message) {
                    swal(message);
                },
                alertWithType: function (title, message, type) {
                    swal(title, message, type);
                },
                confirm: function(title, func) {
                    swal({
                            title: title,
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            closeOnConfirm: false
                        },
                        function(){
                            func();
                            swal.close()
                        });
                }
            };
        }
    ])
    .controller('HeadCtrl', ["$scope", "$http",
        function ($scope, $http) {
            $http.get("/user/info").success(function (data) {
                $scope.info = data;
            })
        }
    ]);
