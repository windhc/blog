/**
 * vue app
 * Created by HC on 2016/7/19.
 */

var header = Vue.extend({
    template: '#header'
});
// 全局注册组件
Vue.component('my-header', header);

var footer = Vue.extend({
    template: '#footer'
});
// 全局注册组件
Vue.component('my-footer', footer);

var index = Vue.extend({
    template: '#index'
});



var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: index
    },
    '/bar': {
        component: footer
    }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');