<template>
   <section>
       <div v-for="(categoryContent, categoryType) in products" v-bind:key="categoryType">
        <products-category :category-type="categoryType" :category-content="categoryContent"></products-category>
       </div>

       <div>
         <button @click="copyToClipBoard()">COPIA NEGLI APPUNTI</button>
       </div>
   </section>
</template>

<script>
/* eslint-disable */
import productsCategory from '@/components/products/productsCategory/productsCategory.vue'
export default {
  name: 'products',
  data () {
    return {
      
    }
  },
  mounted () {
      this.$store.dispatch('getProducts');
  },
  methods: {
    copyToClipBoard(){
      this.$store.dispatch('copyData');
    }
  },
  components: {
      productsCategory
  },
  computed: {
      products(){
          return this.$store.state.products;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
