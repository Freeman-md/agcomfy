<template>
  <div class="h-auto py-6 text-white bg-success">
    <div class="grid grid-cols-3 gap-6 responsive-container">
          
      <!-- Brief About Us -->
      <div class="flex flex-col space-y-4">
            
        <FooterTitle title="Agcomfy" />

        <div class="w-5/6">
          Agcomfy is leading to accelerate the development of Africa’s agricultural potential and its value chain system by ensuring access to quality farm tech services on key needed farming needs with the focus of maximising agribusiness prosperity.
        </div>


      </div>

      <!-- Corporate Links -->
      <div class="flex flex-col space-y-4">
            
        <FooterTitle title="Corporate" />

        <div class="flex flex-col items-start space-y-2">
          <router-link :to="link.url" class="tracking-wider transition duration-200 cursor-pointer hover:opacity-90" v-for="(link, index) in links" :key="index">{{ link.name }}</router-link>
        </div>


      </div>

      <!-- Help & Support -->
      <div class="flex flex-col space-y-4">
            
        <FooterTitle title="Help & Support" />

        <div class="flex flex-col items-start space-y-2">
          <router-link :to="link.url" class="tracking-wider transition duration-200 cursor-pointer hover:opacity-90" v-for="(link, index) in helpLinks" :key="index">{{ link.name }}</router-link>
        </div>


      </div>
          
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FooterTitle from '@/components/FooterTitle'
export default {
  name: 'Top',
  components: { FooterTitle },
  computed: {
    ...mapGetters('landing', {
      links: 'getLinks',
      helpLinks: 'getHelpLinks'
    })
  }
}
</script>