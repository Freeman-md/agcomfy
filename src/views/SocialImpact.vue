<template>
  <div class="py-20">
    <div class="flex flex-col space-y-24 responsive-container">
      <h4 class="text-xl font-semibold text-success-light">At Agcomfy, our passion to transform Agriculture in Africa is built and focused on four UN Sustainable Development Goals through the following:</h4>
      <div class="grid grid-cols-2 gap-x-4 gap-y-12">
        <Impact 
          v-for="(socialImpact, index) in socialImpacts"
          :socialImpact="socialImpact"
          :index="++index"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Impact from '@/components/SocialImpact.vue'
export default {
  name: 'SocialImpact',
  components: { Impact },
  computed: {
    ...mapGetters('landing', {
      socialImpacts: 'getSocialImpacts'
    })
  }
}
</script>