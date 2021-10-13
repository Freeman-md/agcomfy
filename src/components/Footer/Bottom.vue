<template>
  <div class="h-auto py-6 bg-black">
    <div class="flex flex-col items-start justify-start space-y-2 text-sm divide-y divide-dark responsive-container text-dark">
      
      <div class="flex space-x-3">
        <a :href="social.link" v-for="(social, index) in socials" :key="index">
          <span :class="social.icon"></span>
        </a>
      </div>
      
      <div class="pt-1.5 tracking-wider">
        Copyright 2021 © <span class="font-bold">Agcomfy Limited</span>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Bottom',
  computed: {
    ...mapGetters('landing', {
      socials: 'getSocials'
    })
  }
}
</script>