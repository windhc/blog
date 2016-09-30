<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta id="viewport" name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <title>HC-${category.categoryName}</title>
    <meta name="keywords" content="HC的个人博客，分享技术，分享经验，后端，前端，Java，Spring，经济生活"/>
    <meta name="description" content="HC的个人博客，分享技术经验，欢迎大家共同讨论"/>
    <#--<link rel="alternate" type="application/rss+xml" title="Hacker » Feed" href="http://demo.20theme.com/hacker/feed">-->
    <#--<link rel="alternate" type="application/rss+xml" title="Hacker » 评论Feed" href="http://demo.20theme.com/hacker/comments/feed">-->

    <link rel="stylesheet" id="hacker-style-css" href="/front/css/style.css" type="text/css" media="all">
</head>

<body class="home blog">

<div id="page" class="site">
    <div id="primary" class="content-area">

    <#include "common/header.html">

        <div id="content" class="site-content">
            <main id="main" class="site-main posts-loop" role="main">
                <article
                        class="Article post-62 post type-post status-publish format-image has-post-thumbnail hentry category-26 tag-28 post_format-post-format-image">

                    <ul style="margin-left:10%">
                        <#list articles as article>
                        <li>
                            <a href="/front/article/${article.articleId}">${article.title}</a>
                            [<span>${article.category.categoryName}</span>]
                            &nbsp;&nbsp;&nbsp;
                            <span class="time-text">${article.createTime?number_to_datetime?string('yyyy-MM-dd')}</span>
                        </li>
                        </#list>
                    </ul>

                </article>
            </main>
        </div>

    <#include "common/footer.html">

    </div>
    <!-- END #primary -->
</div>

<!--<script type="text/javascript" src="/front/js/marked.min.js"></script>-->
<!--<script type="text/javascript" src="/front/js/jquery-3.1.0/jquery.min.js"></script>-->
<#--<script src="//cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>-->
<#--<script type="text/javascript" src="/front/js/basicShare.0.2.min.js"></script>-->

</body>

</html>
