/**
 * detail页面JS
 * Created by HC on 2016/7/12.
 */
var detailVue = new Vue({
    el: '#content',
    data: {
        article:{}
    },
    filters: {
        marked: marked
    }
});

$.get( "/article/front/6", function(data) {
    detailVue.article = data.data;
});

Vue.filter('date', function (value) {
    var date = new Date(value);
    return date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日";
});