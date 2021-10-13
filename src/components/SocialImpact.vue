<template>
  <div>
    <div class="flex flex-col space-y-4">
      <h5 class="text-xl font-semibold text-success-light">{{ title }}</h5>
      <p class="text-base font-light leading-7 tracking-normal">{{ socialImpact.content }}</p>
    </div>    
  </div>  
</template>

<script>
export default {
  name: 'SocialImpact',
  props: ['socialImpact', 'index'],
  computed: {
    title() {
      return `${this.index}. ${this.socialImpact.title.toUpperCase()}`
    }
  }
}
</script>