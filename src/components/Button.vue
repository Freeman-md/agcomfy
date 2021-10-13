<template>
  <button class="py-2 font-semibold text-center uppercase transition duration-200 cursor-pointer hover:shadow-4xl" :class="[classes, transition]">
    <slot name="content">
      {{ text }}
    </slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    classes: {
      type: String,
      default: 'px-4 text-white bg-success'
    }, 
    text: {
      type: String, 
    },
    transition: {
      type: String, 
      default: 'transform hover:-translate-y-1'
    }
  }
}
</script>
