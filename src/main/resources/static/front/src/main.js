var Vue = require('vue');

Vue.config.debug = true;

var App = require('./app.vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
var registerRouters = require('./routers');

// 注册两个插件
Vue.use(VueResource);
Vue.use(VueRouter);

// 过滤器
Vue.filter('date', function (value) {
    var date = new Date(value);
    return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日";
});

// 路由
var router = new VueRouter({
});

registerRouters(router);

router.start(App, '#app');

//
//import Vue from 'vue'
//import App from './App'
//
//import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
//
//import ArticleIndex from './components/article/index.vue'
//import Hello from './components/Hello.vue'
//
//
///* eslint-disable no-new */
////new Vue({
////  el: 'body',
////  components: { App }
////});
//
//// 注册两个插件
//Vue.use(VueResource);
//Vue.use(VueRouter);
//
//const router = new VueRouter();
//
//// 路由map
//router.map({
//  '/': {
//    component: ArticleIndex
//  },
//  '/hello': {
//    component: Hello
//  }
//});
//
//router.start(App, '#app');
