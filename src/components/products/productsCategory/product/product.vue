<template>
   <section>
      <el-row :gutter="20" class="el-mt5 el-mb5">
        <el-col :span="6" :offset="6">
          <div class="grid-content">
            <h5>{{product.descrizione | capitalize}}</h5>
          </div>
          </el-col>
          <el-col :span="6">
          <div class="grid-content">
             <span @click="editQuantity('add')">
               <i class="el-icon-circle-plus"></i>
               </span>
             <span> {{product.quantita}}</span>
            <span @click="editQuantity('remove')">
              <i class="el-icon-circle-plus"></i>
              </span>
          </div>
          </el-col>
      </el-row>
   </section>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line
/*eslint no-trailing-spaces: "error"*/
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
  h5{
    margin: 0
  }

  .el-mt5{
    margin-top: 0.5em;
  }
  .el-mb5{
    margin-bottom: 0.5em;
  }
</style>
