<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta id="viewport" name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <title>HC</title>
    <meta name="keywords" content="HC的个人博客，分享技术，分享经验，后端，前端，Java，Spring，经济生活"/>
    <meta name="description" content="HC的个人博客，分享技术经验，欢迎大家共同讨论"/>
    <#--<link rel="alternate" type="application/rss+xml" title="Hacker » Feed" href="http://demo.20theme.com/hacker/feed">-->
    <#--<link rel="alternate" type="application/rss+xml" title="Hacker » 评论Feed" href="http://demo.20theme.com/hacker/comments/feed">-->

    <style type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style>
    <link rel="stylesheet" id="hacker-style-css" href="/front/css/style.css" type="text/css" media="all">
</head>

<body class="home blog">

<div id="page" class="site">
    <div id="primary" class="content-area">

<#include "common/header.html">

        <div id="content" class="site-content">
            <main id="main" class="site-main posts-loop" role="main">

<#list articles as article>
                <article id="post-62"
                         class="Article post-62 post type-post status-publish format-image has-post-thumbnail sticky hentry category-26 tag-28 post_format-post-format-image">
                    <h2 class="Article__title">
                        <a href="/front/article/${article.id}" rel="bookmark">
                            <span>${article.title}</span>
                        </a>
                        <#if article_index==0>
                            <span class="sticky-mark"></span>
                        </#if>
                    </h2>
                    <div class="Article__topMeta">
                        <span class="posted-on"><a rel="bookmark">
                            <time class="entry-date published">
                                ${article.createTime?number_to_datetime?string('yyyy-MM-dd')}
                            </time>
                        </a></span>
                    </div>
                    <div class="Article__featured">
                        <!--<img width="750" height="384" src="/front/images/dasheng.jpg"-->
                        <!--class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="dasheng">-->
                    </div>
                    <!-- END .featured-media -->

                    <div class="Article__excerpt">
                        <p class="article-summary">${article.summary}</p>

                        <a href="/front/article/${article.id}" class="more-link">继续阅读
                            <span class="screen-reader-text"></span>
                        </a>
                    </div>
                    <!-- END .Article__excerpt -->
                    <footer class="Article__footer">
                        <div class="Article__meta pull-left">
                            <span class="post-tags"><i class="icon-tags"></i>
                                <a href="/front/category/${article.category.id}" rel="tag">${article.category.categoryName}</a>
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
</#list>
            </main>
            <!-- END #main -->

            <nav class="navigation posts-navigation" role="navigation">
                <h2 class="screen-reader-text">文章导航</h2>
                <div class="nav-links">
                    <div class="nav-previous"><a href="/archives">先前文章</a></div>
                </div>
            </nav>
        </div>

<#include "common/footer.html">

    </div>
    <!-- END #primary -->
</div>

<!--<script type="text/javascript" src="/front/js/jquery-3.1.0/jquery.min.js"></script>-->
<script src="//cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript" src="/front/js/basicShare.0.2.min.js"></script>
<script type="text/javascript" src="/front/js/marked.min.js"></script>

<script type="text/javascript" src="/front/js/front.js"></script>
<script>
//    document.getElementById('article-content').innerHTML =
//            marked($('#article-content').text());

    var nodeList = document.getElementsByClassName("article-summary");
    for (var i=0;i<nodeList.length;i++) {
        nodeList[i].innerHTML = marked(nodeList[i].textContent);
    }
</script>
</body>

</html>
