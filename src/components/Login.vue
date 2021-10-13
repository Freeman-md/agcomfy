<template>
  <div class="flex flex-col w-full space-y-2 text-black ">
    <h1 class="text-xl font-semibold uppercase text-title">Login</h1>

    <!-- Form -->
    <form novalidate class="flex flex-col items-start w-full space-y-6">

      <div class="flex flex-col w-full space-y-2">
        <label for="user" class="text-sm font-semibold">Username or email address *</label>
        <input type="text" id="user" :class="classes" />
      </div>  

      <div class="flex flex-col w-full space-y-2">
        <label for="password" class="text-sm font-semibold">Password *</label>
        <input type="password" id="password" :class="classes" />
      </div>  

      <div class="flex items-center space-x-2">
        <input type="checkbox" id="remember"/>
        <label for="remember" class="text-sm font-semibold">Remember Me</label>
      </div>

      <Button text="Log In" />
      
    </form>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import Button from '@/components/Button.vue'
export default {
  name: 'Login',
  components: { Button },
  setup() {
    const classes = ref('w-full p-2 text-black transition duration-200 focus:shadow-xl border focus:outline-none border-muted')

    return { classes }
  }
}
</script>