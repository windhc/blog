/**
 * Created by HC on 2016/6/27.
 */
'use strict';

var BlogApp = require('./app.js');

BlogApp
    .controller('ArticleCtrl', ['$scope', function($scope) {

        console.log("test ArticleCtrl");

    }]).controller('ArticleEditCtrl', ['$scope', function($scope) {

        console.log("test ArticleEditCtrl");

    }]).controller('ArticleDetailCtrl', ['$scope', function($scope) {

        console.log("test ArticleDetailCtrl");

    }]);