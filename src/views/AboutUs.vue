<template>
  <div>

    <Description />

    <Values />

  </div>
</template>

<script>
import Description from '@/components/AboutUs/Description'
import Values from '@/components/AboutUs/Values'
export default {
  name: 'AboutUs',
  components: {
    Description,
    Values
  }
}
</script>