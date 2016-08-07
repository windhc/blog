<template>
    <div id="content" class="site-content">
        <main id="main" class="site-main posts-loop" role="main">
            <article
                    class="Article post-62 post type-post status-publish format-image has-post-thumbnail hentry category-26 tag-28 post_format-post-format-image">

                <ul style="margin-left:10%">
                    <li v-for="article in articles">
                        <a v-link="{path: '/article/' + article.articleId + '/detail'}">{{article.title}}</a>
                        [<span v-text="article.category.categoryName"></span>]
                        &nbsp;&nbsp;&nbsp;
                        <span class="time-text" v-text="article.createTime | date"></span>
                    </li>
                </ul>

                <div style="margin-left:10%">
                    <a href="javascript:void(0)" @click="perv()" id="perv">上一页</a>
                    <a href="javascript:void(0)" @click="next()" id="next" style="margin-left:50%">下一页</a>
                </div>

            </article>
        </main>
    </div>
</template>

<style>
</style>

<script>
    export default{
        data(){
            return{
                articles:{},
                pageNum: 1,
                pageSize: 10,
                totalPage: 0
            }
        },
        ready: function(){
            this.$http.get('/article/front?pageNum='+this.pageNum+"&pageSize="+this.pageSize).then(function(response) {
                this.articles = response.json().data.list;
                this.totalPage = response.json().data.pages;
                if(this.pageNum == this.totalPage) {
                    $('#next').hide();
                }
                $('#perv').hide();
            });
        },
        methods: {
            next: function () {
                if(this.pageNum < this.totalPage) {
                    this.pageNum ++;
                } else {
                    return;
                }
                this.$http.get('/article/front?pageNum='+this.pageNum+"&pageSize="+this.pageSize).then(function(response) {
                    this.articles = response.json().data.list;
                    if(this.pageNum == this.totalPage) {
                        $('#next').hide();
                    }
                    if(this.pageNum > 1) {
                        $('#perv').show();
                    }
                });
            },
            perv: function () {
                if(this.pageNum > 1) {
                    this.pageNum --;
                } else {
                    return;
                }
                this.$http.get('/article/front?pageNum='+this.pageNum+"&pageSize="+this.pageSize).then(function(response) {
                    this.articles = response.json().data.list;
                    if(this.pageNum < this.totalPage) {
                        $('#next').show();
                    }
                    if(this.pageNum == 1) {
                        $('#perv').hide();
                    }
                });
            }
        },
        components:{
        }
    }
</script>
