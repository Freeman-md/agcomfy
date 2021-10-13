<template>
  <div class="py-20">
    <div class="flex flex-col items-center justify-center responsive-container">
      <h1 class="text-4xl font-bold text-black">404</h1>
      <h2 class="text-xl font-semibold text-gray-900">Page Not Found</h2>
      <router-link :to="{name: 'Home'}"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>