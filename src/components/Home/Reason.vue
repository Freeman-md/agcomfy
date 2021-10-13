<template>
  <div>
    <div class="flex flex-col space-y-5">

      <!-- Title -->
      <h6 class="text-base font-semibold tracking-normal capitalize text-success">{{ title }}</h6>
      
      <p class="text-sm font-light leading-6 tracking-normal">
        {{ reason.content }}
      </p>

    </div>
  </div>  
</template>

<script>
export default {
  name: 'Reason',
  props: ['reason'],
  computed: {
    title() {
      return `${this.reason.title}:`
    }
  }
}
</script>