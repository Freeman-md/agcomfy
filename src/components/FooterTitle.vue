<template>
  <div class="flex flex-col items-start space-y-2">
    <span class="font-semibold text-white uppercase">{{title}}</span>
    <div class="w-8 p-0.5 bg-dark"></div>
  </div>
</template>

<script>
export default {
  name: 'FooterTitle',
  props: ['title']
}
</script>