blog = {
    getUrlId: function () {
        var url = location.href;
        return url.substring(url.lastIndexOf("/"));
    }
};