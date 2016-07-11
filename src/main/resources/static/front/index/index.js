var vue = new Vue({
    el: '#content',
    data: {
        articles:{}
    },
    filters: {
        marked: marked
    }
});

$.get( "article/front", {pageNum: 1, pageSize: 10 }, function(data) {
    vue.articles = data.data.list;
});

Vue.filter('date', function (value) {
    var date = new Date(value);
    return date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日";
});
