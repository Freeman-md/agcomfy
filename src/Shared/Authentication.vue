<template>
  <div class="w-full bg-white md:w-5/6 lg:w-2/3">
  
    <!-- Header -->
    <div class="w-full py-6 bg-gray-100 border-b border-gray-300">
      <div class="flex items-center justify-center w-full space-x-4 responsive-container">
        <Button 
          v-for="(social, index) in socials"
          :key="index"
          :classes="social.mods.classes"
        >
          <template v-slot:content>
            <div class="flex items-center px-1 space-x-4">
              <span :class="social.icon"></span>
              <span>Login With {{ social.name }}</span>
            </div>
          </template>
        </Button>
      </div>
    </div>
    
    <!-- Body -->
    <div class="py-2 responsive-container">
      <div class="flex justify-around py-6 divide-x divide-gray-200 gap-x-6">

        <Login />
        <Register />

      </div>
    </div>
    
  </div>
</template>

<script>
import { reactive } from 'vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Button from '@/components/Button.vue'
export default {
  name: 'Authentication',  
  components: { Button, Login, Register },
  setup() {
    const socials = reactive([
      {
        name: 'Facebook',
        mods: {
          classes: 'bg-facebook text-white px-4',
          transition: ''
        },
        icon: 'fab fa-facebook-f'
      },
      {
        name: 'Google',
        mods: {
          classes: 'bg-google text-white px-4',
          trannsition: ''
        },
        icon: 'fab fa-google-plus-g'
      }
    ])

    return {
      socials
    }
  }
}
</script>