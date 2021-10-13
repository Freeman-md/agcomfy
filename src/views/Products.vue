<template>
  <div class="py-20">
    <div class="grid grid-cols-2 gap-x-4 gap-y-12 responsive-container">
      <Product 
        v-for="(product, index) in products"
        :product="product"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from '@/components/Product.vue'
export default {
  name: 'Products',
  components: { Product },
  computed: {
    ...mapGetters('landing', {
      products: 'getProducts'
    })
  }
}
</script>