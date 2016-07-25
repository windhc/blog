/**
 * Created by HC on 2016/7/25.
 */
var articleIndex = require('./components/article/index.vue');
var articleDetail = require('./components/article/detail.vue');

module.exports = function(router) {
    router.map({
        '/': {
            name: 'index',
            component: articleIndex
        },
        '/article/:id/detail': {
            name: 'detail',
            component: articleDetail
        }
    });
};