<template>
  <div>
    <div class="flex flex-col space-y-4">
      <h5 class="font-semibold text-success">{{ title }}</h5>
      <p class="text-base font-light leading-7 tracking-normal">{{ product.content }}</p>
    </div>    
  </div>  
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  computed: {
    title() {
      return `${this.product.title}:`
    }
  }
}
</script>