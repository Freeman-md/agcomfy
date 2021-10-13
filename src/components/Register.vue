<template>
   <div class="flex flex-col w-full pl-6 space-y-2 text-black">
    <h1 class="text-xl font-semibold uppercase text-title">Register</h1>

    <!-- Form -->
    <form novalidate class="flex flex-col items-start w-full space-y-6">

      <div class="flex flex-col w-full space-y-2">
        <label for="user" class="text-sm font-semibold">Email address *</label>
        <input type="text" id="user" :class="classes" />
      </div>  

      <div class="flex flex-col w-full space-y-2">
        <label for="password" class="text-sm font-semibold">Password *</label>
        <input type="password" id="password" :class="classes" />
      </div> 

      <!-- Additional Information for Vendor -->
      <transition name="vendor">
        <div class="flex flex-col items-start w-full space-y-6" v-show="isVendor">
          
          <div class="flex flex-col w-full space-y-2">
            <label for="firstname" class="text-sm font-semibold">First Name *</label>
            <input type="text" id="firstname" :class="classes" />
          </div> 

          <div class="flex flex-col w-full space-y-2">
            <label for="lastname" class="text-sm font-semibold">Last Name *</label>
            <input type="text" id="lastname" :class="classes" />
          </div> 

          <div class="flex flex-col w-full space-y-2">
            <label for="shop.name" class="text-sm font-semibold">Shop Name *</label>
            <input type="text" id="shop.name" :class="classes" />
          </div> 

          <div class="flex flex-col w-full space-y-2">
            <label for="shop.url" class="text-sm font-semibold">Shop URL *</label>
            <input type="text" id="shop.url" :class="classes" />
          </div> 

          <div class="flex flex-col w-full space-y-2">
            <label for="phone" class="text-sm font-semibold">Phone Number *</label>
            <input type="text" id="phone" :class="classes" />
          </div> 

        </div>
      </transition> 

      <div class="flex flex-col items-start space-y-4">

        <div class="flex items-center space-x-1 transition duration-200 cursor-pointer hover:opacity-90">
          <input type="radio" id="customer" name="identity" value="customer" v-model="identity" class="cursor-pointer" />
          <label for="customer" class="text-sm font-semibold cursor-pointer">I am a customer</label>
        </div>

        <div class="flex items-center space-x-1 transition duration-200 cursor-pointer hover:opacity-90">
          <input type="radio" id="vendor" name="identity" value="vendor" v-model="identity" class="cursor-pointer"/>
          <label for="vendor" class="text-sm font-semibold cursor-pointer">I am a vendor</label>
        </div>

      </div>

      <span class="text-sm">By creating an account on Agcomfy, it means you understand and agree to our <router-link :to="{name: 'Privacy Policy'}" class="text-warning">privacy policy.</router-link></span>

      <Button text="Register" />
      
    </form>

  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Button from '@/components/Button.vue'
export default {
  name: 'Register',
  components: { Button },
  setup() {
    const classes = ref('w-full p-2 text-black transition duration-200 focus:shadow-xl border focus:outline-none border-muted')

    const identity = ref('customer')

    const isVendor = computed(() => identity.value.toLowerCase() === 'vendor')

    return { classes, identity, isVendor }
  }
}
</script>

<style scoped>
.vendor-enter-active{
  transition: linear 1000ms;
}   
.vendor-enter-from, .vendor-leave-to {
  height: 0;
}
.vendor-enter-to, .vendor-leave-from {
  height: fit-content;
}

.vendor-leave-active{
  transition: linear 1000ms;
}
</style>