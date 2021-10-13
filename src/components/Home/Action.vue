<template>
  <div class="py-12 bg-success">
    <div class="flex items-center justify-center space-x-4 responsive-container">
      <Button text="Become A Partner" classes="px-16 text-white border-2 border-white"/>
      
      <Button text="Become A Vendor" classes="px-16 text-white border-2 border-white"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Action',
  components: { Button, }
}
</script>