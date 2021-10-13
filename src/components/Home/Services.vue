<template>
  <div class="py-20 bg-gray-100">
    <div class="flex flex-col space-y-16 responsive-container">

      <!-- Text -->
      <h6 class="text-xl font-semibold tracking-normal capitalize text-success">We Provide Service for Agribusiness Value Chain.</h6>

      <!-- Services -->
      <div class="grid grid-cols-4 gap-x-8 gap-y-10">
        
        <!-- Service -->
        <Service 
          v-for="(service, index) in services" :service="service"
          :key="index"
        />

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Service from '@/components/Home/Service.vue'
export default {
  name: 'Services',
  components: { Service },
  computed: {
    ...mapGetters('landing', {
      services: 'getServices'
    })
  }
}
</script>