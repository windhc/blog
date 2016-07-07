/**
 * Created by HC on 2016/6/14.
 */
//angular = require('angular');

var BlogApp = angular.module('BlogApp', [
    require('angular-route'),
    require('angular-ui-bootstrap/src/pagination'),
    require('angular-marked')
]);

module.exports = BlogApp;