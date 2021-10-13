<template>
  <div class="h-auto py-32 bg-black bg-center bg-no-repeat bg-cover bg-agcomfy bg-blend-dark-light">
    <div class="responsive-container">
      <div class="flex flex-col items-start justify-center w-1/2 space-y-3 text-white">
      <h2 class="text-3xl">
        Agribusiness made Simple and Comfy
        </h2>
      <h3>
        Agcomfy is leading to accelerate the development of Africa’s agricultural potential and its value chain system by ensuring access to quality farm tech services on key needed farming needs with the focus of maximising agribusiness prosperity.
      </h3>
      <Button text="Find Out More" />
    </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Background',
  components: { Button, }
}
</script>