<template>
  <header id="masthead" class="site-header" role="banner">
    <div class="site-branding">
      <h1 class="site-title"><a href="/" rel="home">HC</a></h1>
      <p class="site-description">I SAW, I READ, I WRITE</p></div>
    <nav id="site-navigation" class="main-navigation" role="navigation">
      <div class="menu-primary-menu-container">
        <ul id="primary-menu" class="menu">
          <li id="menu-item-10"
              class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10">
            <a v-link="{ path: '/' }">最新</a></li>
          <li id="menu-item-27"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><a
            href="/front/category">分类</a></li>
          <li id="menu-item-28"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"><a
            href="/front/archives">归档</a></li>
          <li id="menu-item-29"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"><a
            v-link="{ path: '/about' }">关于</a></li>
        </ul>
      </div>
    </nav>
    <!-- END #site-navigation -->
  </header>
</template>

<script></script>

<style></style>
