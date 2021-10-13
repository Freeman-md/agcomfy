<template>
  <div>
    <Header />
    <router-view class="mt-20"/>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script>
import Header from '@/Shared/Header.vue'
import Footer from '@/Shared/Footer.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
export default {
  components: {Header, Footer, ScrollToTop}
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
