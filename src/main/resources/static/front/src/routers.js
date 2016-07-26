/**
 * Created by HC on 2016/7/25.
 */
module.exports = function(router) {
    router.map({
        '/': {
            name: 'index',
            component: require('./components/article/index.vue')
        },
        '/article/:id/detail': {
            name: 'detail',
            component: require('./components/article/detail.vue')
        },
        '/category': {
            component: require('./components/category/index.vue')
        },
        '/archives': {
            component: require('./components/article/archives.vue')
        },
        '/about': {
            component: require('./components/common/about.vue')
        }
    });
};