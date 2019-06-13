/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/main'
Vue.use(Vuex)



const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const groupByCategory = groupBy('categoria');

function fetchProducts(){
    let products = []
    return db.collection('prodotti').get();
}

export default new Vuex.Store({
  state: {
      products: [],
      dataForClipboard: {}
  },
  getters: {
  },
  mutations: {
    mapProducts(state, data){
        let rawProducts = [];

        data.forEach((product)=>{
            let p = Object.assign({id: product.id}, product.data());
            rawProducts.push(p);
        });

        state.products = groupByCategory(rawProducts);
      },
      addRemoveQuantityProducts(state, data){

        Object.values(state.products).forEach((categoria)=>{
          categoria.forEach((product)=>{
            if(product.id === data.productId){
  
              if(data.editQuantityType === 'add'){
                product.quantita+= 1;
              }else{
                product.quantita-= 1;
                if(product.quantita < 0){
                  product.quantita = 0;
                }
              }
            }
          });
        }); 
      },
      formatDataForClipboard(state){
        
        let productList = [];
        Object.values(state.products).forEach((categoria)=>{ 
          categoria.forEach((product)=>{
            productList.push(product);
          });
        });

        navigator.clipboard.writeText(productList);

      }
  },
  actions: {
    getProducts: ({commit}) => {
        let products = [];
        fetchProducts()
        .then((data)=>{
            commit('mapProducts', data);
        });
    },
    editProductQuantity: ({commit}, data) => {
      commit('addRemoveQuantityProducts', data); 
    },
    copyData: ({commit}) => {
      commit('formatDataForClipboard'); 
    }
  },
  modules: {
  }
})
