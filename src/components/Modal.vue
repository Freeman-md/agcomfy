<template>
  <transition name="background">
    <div class="fixed inset-0 z-50 flex flex-col items-center p-4 bg-black justify-evenly bg-opacity-90">
      <transition name="header">
        <slot name="header"></slot>
      </transition>
      <transition name="modal">
        <slot name="modal" v-if="show"></slot>
      </transition>
    </div>
  </transition>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup(props) {
    const show = computed(() => props.show)

    return {
      show
    }
  }
}
</script>

<style scoped>
.background-enter-active{
  transition: ease-out 200ms;
}   
.background-enter-from, .background-leave-to {
  opacity: 0;
}
.background-enter-to, .background-leave-from {
  opacity: 100;
}

.background-leave-active{
  transition: ease-in 75ms;
  transition-delay: 75ms;
}

.modal-enter-active{
  transition: ease-out 200ms;
  transition-delay: 200ms;
}   
.modal-enter-from, .modal-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.modal-enter-to, .modal-leave-from {
  transform: scale(1);
  opacity: 100;
}

.modal-leave-active{
  transition: ease-in 75ms;
}

.header-enter-active{
  transition: ease-out 500ms;
}   
.header-enter-from, .header-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
.header-enter-to, .header-leave-from {
  transform: translateY(0);
  opacity: 100;
}

.header-leave-active{
  transition: ease-in 300ms;
}
</style>