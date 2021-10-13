<template>
  <div class="flex flex-col space-y-1">
    <h6 class="text-xl font-semibold text-gray-700 uppercase">{{ title }}</h6>
    <div class="flex">
      <div class="w-1/2 bg-muted h-0.5"></div>
      <div class="w-1/2 bg-gray-100 h-0.5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactTitle',
  props: ['title']
}
</script>
