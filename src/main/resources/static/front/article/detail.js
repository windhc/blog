/**
 * detail页面JS
 * Created by HC on 2016/7/12.
 */
Vue.filter('date', function (value) {
    var date = new Date(value);
    return date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日";
});

var detailVue = new Vue({
    el: 'html',
    data: {
        article:{
            category: {}
        }
    },
    filters: {
        marked: marked
    }
});

$.get( "/article/front/"+blog.getUrlId(), function(data) {
    detailVue.article = data.data;
});
