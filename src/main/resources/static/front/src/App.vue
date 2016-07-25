<template>
    <div>
    <my-header></my-header>

    <router-view></router-view>

    <my-footer></my-footer>
    </div>
</template>

<script>
//import Header from './components/header.vue'
//import Footer from './components/footer.vue'
var header = require('./components/common/header.vue');
var footer = require('./components/common/footer.vue');

export default {
    components: {
        'my-header': header,
        'my-footer': footer
    }
}
</script>

<style>
</style>
