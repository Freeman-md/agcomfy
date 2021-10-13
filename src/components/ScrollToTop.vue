<template>
  <transition>
    <div @click.prevent="scrollToTop" class="fixed flex items-center justify-center w-10 h-10 text-base transition duration-500 transform border-2 rounded-full cursor-pointer hover:-translate-y-1 text-dark border-dark bottom-10 right-10" v-show="visible">
      <span class="fas fa-chevron-up"></span>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    visible: false
  }),
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.visible = window.scrollY > 50
    },
    scrollToTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    }
  }
}
</script>

<style scoped>
.enter {
  opacity: 0;
}

.enter-active {
  transition: 500ms all ease-in-out;
}
</style>