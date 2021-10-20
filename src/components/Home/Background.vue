<template>
  <div class="h-auto py-32 bg-black bg-center bg-no-repeat bg-cover bg-agcomfy bg-blend-dark-light">
    <div class="responsive-container">
      <div class="flex flex-col items-start justify-center w-1/2 space-y-3 text-white">
      <h2 class="text-3xl">
        Powering a Comfy, Fairer Trade to Enrich Farmers
        </h2>
      <h3>
        Agcomfy is a B2B Digital Marketplace where you can get a comfy access to a fairer agricultural trade in an easy, fast, transparent and wider market opportunities improving returns on investment, enriching farmer's bottom-line and also ultimately, transforming their lives.
      </h3>
      <Button text="Sign Up Here" />
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