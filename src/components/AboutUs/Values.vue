<template>
  <div class="py-20 mb-16 bg-success ">
    <div class="flex flex-col space-y-8 responsive-container">
      <h6 class="text-2xl font-semibold tracking-wide text-white uppercase">Core Values</h6>

      <div class="grid grid-cols-2 gap-x-6 gap-y-16">
        <Value 
          v-for="(value, index) in values"
          :value="value"
          :index="++index"
          :key="index"      
        />
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Value from '@/components/AboutUs/Value.vue'
export default {
  name: 'Values',
  components: { Value },
  computed: {
    ...mapGetters('landing', {
      values: 'getValues'
    })
  }
}
</script>