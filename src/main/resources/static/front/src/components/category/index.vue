<template>
    <div id="content" class="site-content">
        <main id="main" class="site-main posts-loop" role="main">
            <article
                    class="Article post-62 post type-post status-publish format-image has-post-thumbnail hentry category-26 tag-28 post_format-post-format-image">

                <ul style="margin-left:10%">
                    <li v-for="category in categorys">
                        <a>{{category.categoryName}}</a>
                    </li>
                </ul>
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
                categorys:{}
            }
        },
        ready: function(){
            this.$http.get('/category/front/all').then(function(response) {
                this.categorys = response.json().data;
            });
        },
        components:{
        }
    }
</script>
