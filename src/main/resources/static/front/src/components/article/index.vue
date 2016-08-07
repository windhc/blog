<template>
  <div id="content" class="site-content">
    <main id="main" class="site-main posts-loop" role="main">

      <article id="post-62" v-for="article in articles"
               class="Article post-62 post type-post status-publish format-image has-post-thumbnail sticky hentry category-26 tag-28 post_format-post-format-image">
        <h2 class="Article__title">
          <a v-link="{path: '/article/' + article.articleId + '/detail'}" rel="bookmark">
            <span v-text="article.title"></span>
          </a>
          <span class="sticky-mark" v-if="$index==0"></span>
        </h2>
        <div class="Article__topMeta">
                        <span class="posted-on"><a rel="bookmark">
                            <time class="entry-date published" v-text="article.createTime | date">
                            </time>
                        </a></span>
        </div>
        <div class="Article__featured">
          <!--<img width="750" height="384" src="/front/images/dasheng.jpg"-->
          <!--class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="dasheng">-->
        </div>
        <!-- END .featured-media -->

        <div class="Article__excerpt" v-if="article.summary">
          <p v-html="article.summary | marked"></p>

          <a v-link="{path: '/article/' + article.articleId + '/detail'}" class="more-link">继续阅读
            <span class="screen-reader-text"></span>
          </a>
        </div>
        <!-- END .Article__excerpt -->
        <footer class="Article__footer">
          <div class="Article__meta pull-left">
                            <span class="post-tags"><i class="icon-tags"></i>
                                <a v-link="{path: '/category/' + article.category.categoryId}" rel="tag">{{article.category.categoryName}}</a>
                            </span></div>
          <!-- END .pull-left -->
          <div class="Article__meta pull-right">
                            <span><i class="icon-comments"></i>
                                <span><a href="#">0 条评论</a></span>
                            </span>
          </div>
          <!-- END .pull-right -->
        </footer>
        <!-- END .Article__footer -->
      </article>
      <!-- END .Article -->

    </main>
    <!-- END #main -->

    <nav class="navigation posts-navigation" role="navigation">
      <h2 class="screen-reader-text">文章导航</h2>
      <div class="nav-links">
        <div class="nav-previous"><a v-link="{ path: '/archives' }">先前文章</a></div>
      </div>
    </nav>
  </div>
</template>

<style></style>

<script>
    var marked = require('marked');
    export default{
        data() {
            return {
                articles: {}
            }
        },
        ready: function(){
            this.$http.get('/article/front?pageNum='+1+"&pageSize="+8).then(function(response) {
                this.articles = response.json().data.list;
            });
        },
        filters: {
            marked: marked
        },
        components:{
        }
    }
</script>
