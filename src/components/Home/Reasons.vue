<template>
  <div class="py-20">
    <div class="flex flex-col responsive-container space-y-14">

      <!-- Title -->
      <h6 class="text-2xl font-semibold tracking-normal uppercase text-success">Why Choose Us?</h6>

      <!-- Reasons -->
      <div class="grid grid-cols-3 gap-x-5 gap-y-8">
        <Reason 
          v-for="(reason, index) in reasons"
          :reason="reason"
          :key="index"
        />
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Reason from '@/components/Home/Reason.vue'
export default {
  name: 'Reasons',
  components: { Reason, },
  computed: {
    ...mapGetters('landing', {
      reasons: 'getReasons'
    })
  }
}
</script>