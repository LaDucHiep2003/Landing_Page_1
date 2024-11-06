

<template>
    <Header />
    <slot />
    <Footer />
</template>

<script>
    import Header from '../partials/Header.vue';
    import Footer from "../partials/Footer.vue";

    export default{
        components:{
          Header,
          Footer
        }
    }
</script>