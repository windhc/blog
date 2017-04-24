<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta id="viewport" name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <title>HC-${article.title}</title>
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
            <main id="main" class="site-main" role="main">
                <article id="post-62"
                         class="Article post-62 post type-post status-publish format-image has-post-thumbnail hentry category-26 tag-28 post_format-post-format-image">
                    <h1 class="Article__title">${article.title}</h1>
                    <div class="Article__topMeta">
                        <span class="posted-on"><a href="#" rel="bookmark">
                            <time class="entry-date published">
                                ${article.createTime?number_to_datetime?string('yyyy-MM-dd')}
                            </time>
                        </a></span></div>
                    <div class="Article__featured">
                        <!--<img width="750" height="384" src="/front/images/dasheng.jpg"-->
                        <!--class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="dasheng">-->
                    </div>
                    <!-- END .featured-media -->

                    <div class="Article__content Content">
                        <!--<template>-->
                        <p id="article-content">${article.content}</p>

                        <!--<p v-html="article.content | marked"></p>-->
                        <!--</template>-->
                    </div>
                    <!-- END .Article__content -->

                    <footer class="Article__footer">
                        <div class="Article__meta pull-left">
                            <span class="post-tags"><i class="icon-tags"></i>
                                <a href="/front/category/${article.category.id}" rel="tag">${article.category.categoryName}</a>
                            </span>
                        </div>
                        <!-- END .pull-left -->
                        <div class="Article__meta pull-right">
                            <!--<button class='basicShareBtn'>分享</button>-->
                            <a class='basicShareBtn' href="javascript:void(0)">分享</a>
                            &nbsp;
                            <span><i class="icon-comments"></i><span><a
                                    href="#">0 条评论</a></span></span>
                        </div>
                        <!-- END .pull-right -->
                    </footer>
                    <!-- END .Article__footer -->
                </article>
                <!-- END .Article -->

                <div id="discussion" class="Discussion">
                    <header class="Discussion__header">
                        <h3 class="Discussion__heading">0 条评论</h3>
                    </header>
                    <!-- END .Comments-area__header -->
                    <!--<ul class="CommentList">-->

                    <!--&lt;!&ndash; #comment-## &ndash;&gt;-->
                    <!--&lt;!&ndash; commment &ndash;&gt;-->
                    <!--<li id="comment-11" class="comment even thread-even depth-1 Comment">-->
                    <!--<div class="Comment__media">-->
                    <!--<img alt="" src="/front/images/dasheng.jpg"-->
                    <!--class="avatar avatar-48 photo" height="48" width="48"></div>-->
                    <!--<div class="Comment__body">-->
                    <!--<div class="Comment__heading">-->
                    <!--<div class="Comment__meta">-->
                    <!--<div class="Comment__username">mr</div>-->
                    <!--<div class="Comment__date">2016年1月21日</div>-->
                    <!--</div>-->
                    <!--<div class="Comment__actions">-->
                    <!--<span class="Comment__reply"><a rel="nofollow" class="comment-reply-link"-->
                    <!--href="http://demo.20theme.com/hacker/archives/62?replytocom=11#respond"-->
                    <!--onclick="return addComment.moveForm( &quot;comment-11&quot;, &quot;11&quot;, &quot;respond&quot;, &quot;62&quot; )"-->
                    <!--aria-label="回复给mr">回复</a></span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<p>主题不错，回归本源，正是我想要的</p>-->
                    <!--</div>-->
                    <!--</li>-->
                    <!--&lt;!&ndash; End .Comment &ndash;&gt;-->
                    <!--&lt;!&ndash; #comment-## &ndash;&gt;-->

                    <!--</ul>-->


                    <!--<div id="respond" class="comment-respond">-->
                    <!--<h3 id="reply-title" class="comment-reply-title">发表评论-->
                    <!--<small><a rel="nofollow" id="cancel-comment-reply-link"-->
                    <!--href="http://demo.20theme.com/hacker/archives/62#respond" style="display:none;">取消回复</a>-->
                    <!--</small>-->
                    <!--</h3>-->
                    <!--<form action="#" method="post"-->
                    <!--id="commentform" class="comment-form" novalidate="">-->
                    <!--<p class="comment-notes"><span id="email-notes">电子邮件地址不会被公开。</span> 必填项已用<span-->
                    <!--class="required">*</span>标注</p>-->
                    <!--<div class="comment-form__comment">-->
                    <!--<textarea placeholder="输入你的评论." required="" name="comment" id="comment"-->
                    <!--rows="3"></textarea>-->
                    <!--</div>-->
                    <!--<div class="comment-form__author"><input id="author" name="author" type="text"-->
                    <!--class="form-control" value="" size="30"-->
                    <!--placeholder="姓名*" aria-required="true"-->
                    <!--required="required"></div>-->
                    <!--<div class="comment-form__email"><input id="email" name="email" type="email"-->
                    <!--class="form-control" value="" size="30"-->
                    <!--placeholder="Email*" aria-describedby="email-notes"-->
                    <!--aria-required="true" required="required"></div>-->
                    <!--<div class="comment-form__url"><input id="url" name="url" type="url" class="form-control"-->
                    <!--value="" size="30" placeholder="网站"></div>-->
                    <!--<div class="comment-form__submit">-->
                    <!--<button type="submit" name="submit" id="submit" class="btn btn-primary">发表评论</button>-->
                    <!--<input type="hidden" name="comment_post_ID" value="62" id="comment_post_ID">-->
                    <!--<input type="hidden" name="comment_parent" id="comment_parent" value="0">-->
                    <!--</div>-->
                    <!--</form>-->
                    <!--</div>-->
                    <!-- #respond -->
                </div>
                <!-- END #comments -->
            </main>
            <!-- END #main -->
        </div>

    <#include "common/footer.html">

    </div>
    <!-- END #primary -->
</div>

<!--<script type="text/javascript" src="/front/js/jquery-3.1.0/jquery.min.js"></script>-->
<script src="//cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript" src="/front/js/marked.min.js"></script>
<script type="text/javascript" src="/front/js/basicShare.0.2.min.js"></script>

<script type="text/javascript" src="/front/js/front.js"></script>
<script>
    document.getElementById('article-content').innerHTML =
            marked($('#article-content').text());
</script>
</body>

</html>
