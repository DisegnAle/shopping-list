/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/main'
Vue.use(Vuex)



function convertJSONtoCVS(JSONData) {

  var JSONtoCopy = JSONData
  
  //If JSONtoCopy is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof JSONtoCopy != 'object' ? JSON.parse(JSONtoCopy) : JSONtoCopy;

  var CSV = '';
  //Set Report title in first row or line


  //1st loop is to extract each row
  for (var i = 0; i < arrData.length; i++) {
    var r = "";

    if(arrData[i]['quantita'] > 0){

      //2nd loop will extract each column and convert it in string comma-separated
    for (var idx in arrData[i]) {

      if(idx === 'descrizione'){
        r += arrData[i][idx];
      } 

      if(idx === 'quantita' && arrData[i][idx] > 0){
        r += ' x' + arrData[i][idx];
      }
      
    }

      r.slice(0, r.length - 1);

      //add a line break after each row
      CSV += r + '\r\n';
    }

  }

  return CSV;
}



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


        let newFormattedList = convertJSONtoCVS(productList);
        navigator.clipboard.writeText(newFormattedList);

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
