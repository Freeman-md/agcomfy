<template>
  <div class="py-8">
    <div class="flex flex-col space-y-8 responsive-container">
      <div class="flex flex-col space-y-2">
        <div class="text-lg">
          <router-link :to="{name: 'Home'}" class="transition duration-200 hover:text-black">Home</router-link>
          / 
          <span class="font-semibold text-black">Shop</span>
        </div>
        <div class="flex items-start space-x-2 font-semibold transition duration-200 hover:text-black">
          <i class="fas fa-sliders-h mt-0.5"></i>
          <span class="uppercase">Filters</span>
        </div>
      </div>
      <p>No products were found matching your selection</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>