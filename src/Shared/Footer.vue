<template>
  <div>
    
    <!-- Brief Conclusion -->
    <Top />

    <!-- Copyright and Social Media Accounts -->
    <Bottom />
    
  </div>
</template>

<script>
import Top from '@/components/Footer/Top.vue'
import Bottom from '@/components/Footer/Bottom.vue'
export default {
  name: 'Footer',
  components: {Top, Bottom},
}
</script>