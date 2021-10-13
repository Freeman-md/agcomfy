<template>
  <div>{{ post }}</div>
</template>

<script>
export default {
  name: 'BlogPost',
  computed: {
    post() {
      return this.$route.params.slug
    }
  }
}
</script>