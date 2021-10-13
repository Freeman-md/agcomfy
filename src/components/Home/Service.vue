<template>
  <div class="relative h-48 overflow-hidden">

    <img :src="imagePath" :alt="service.title" class="object-contain transition duration-1000 ease-in-out transform hover:scale-110" />
    <div class="absolute z-20 py-3 text-lg font-semibold text-center capitalize bg-gray-100 -bottom-4 inset-x-6 text-success">
      {{ service.title }}
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Service',
  props: ['service'],
  computed: {
    imagePath() {
      return `/images/services/${this.service.imageName}`
    }
  }
}
</script>