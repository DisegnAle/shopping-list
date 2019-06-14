<template>
   <section>
       <h3>{{categoryType | capitalize}}</h3>
       <el-divider></el-divider>
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
  h3{
    margin: 0;
  }

  .el-divider-horizontal{
        margin: 5px 0 5px 0;
  }
</style>
