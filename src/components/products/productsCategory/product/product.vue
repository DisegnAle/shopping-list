<template>
   <section>
       <div class="el-col-12">
         <h5>{{product.descrizione}}</h5>
       </div>

       <div class="el-col-12">
         <span @click="editQuantity('add')">
           <!-- <i class="el-icon-circle-plus"></i> -->
           +
         </span>
          <span>
            {{product.quantita}}
          </span>
          <span @click="editQuantity('remove')">
            <!-- <i class="el-icon-circle-plus"></i> -->
            -
          </span>
       </div>
   </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'product',
  data () {
    return {
    }
  },
  props: [
      'product'
  ],
  methods: {
    editQuantity(editQuantityType){
      let data = {
        productId: this.product.id,
        editQuantityType: editQuantityType
      };
      this.$store.dispatch('editProductQuantity', data);
    }
  },
  computed: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
