<template>
  <div>
    <div class="flex flex-col space-y-4 text-white">
      <h5 class="font-semibold">{{ title }}</h5>
      <p>{{ value.content }}</p>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Value',
  props: ['value', 'index'],
  computed: {
    title() {
      return `${this.index}. ${this.value.title}:`
    }
  }
}
</script>