<template>
   <section>
       {{categoryType}}
       <div v-for="product in categoryContent" v-bind:key="product.id">
           <product :product="product"></product>
           </div>
   </section>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import product from '@/components/products/productsCategory/product/product.vue'
export default {
  name: 'products-category',
  data () {
    return {
    }
  },
  components: {
      product
  },
  props: [
      'categoryType',
      'categoryContent'
  ],
  methods: {
    
  },
  computed: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
