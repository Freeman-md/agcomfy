<template>
  <div class="py-24 bg-success">
    <div class="grid grid-cols-3 gap-6 responsive-container">
      
      <!-- Contact Information -->
      <div class="flex flex-col space-y-4">
        <span class="font-semibold uppercase text-warning-light">Email</span>
        <p class="text-white">All official correspondence and enquiries should be forwarded to <a class="transition duration-200 hover:opacity-90" href="mailto:hello@agcomfy.com">hello@agcomfy.com</a></p>
      </div>

      <div class="flex flex-col space-y-4">
        <span class="font-semibold uppercase text-warning-light">Helplines</span>
        <p class="text-white">Our phone lines are available from 9am to 4pm, Mondays to Fridays</p>
      </div>

      <div class="flex flex-col space-y-4">
        <span class="font-semibold uppercase text-warning-light">Connect With Us</span>
        <div class="flex space-x-3 text-white">
          <a :href="social.link" v-for="(social, index) in socials" :key="index" class="transition duration-200 hover:opacity-90">
            <span :class="social.icon"></span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ContactInformation',
  computed: {
    ...mapGetters('landing', {
      socials: 'getSocials'
    })
  }
}
</script>