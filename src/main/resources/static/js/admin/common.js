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
                show: function(message) {

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
