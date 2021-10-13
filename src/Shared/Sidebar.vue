<template>
  <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
    <!-- Mobile menu button-->
    <button type="button" class="inline-flex items-center justify-center p-2 transition duration-200 text-primary hover:text-warning focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <!-- Closed -->
        <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- Open -->
        <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>

    <!-- Sidebar Navigation -->
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>