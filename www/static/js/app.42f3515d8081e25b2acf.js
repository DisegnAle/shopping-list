webpackJsonp([1],{"1KFw":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(t){n("gsu9")},null,null).exports,c=n("/ocq"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("el-row",{staticClass:"el-mt5 el-mb5",attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:6}},[n("div",{staticClass:"grid-content"},[n("h5",[t._v(t._s(t._f("capitalize")(t.product.descrizione)))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("span",{on:{click:function(e){return t.editQuantity("add")}}},[n("i",{staticClass:"el-icon-circle-plus"})]),t._v(" "),n("span",[t._v(" "+t._s(t.product.quantita))]),t._v(" "),n("span",{on:{click:function(e){return t.editQuantity("remove")}}},[n("i",{staticClass:"el-icon-circle-plus"})])])])],1)],1)},staticRenderFns:[]};var u={name:"products-category",data:function(){return{}},components:{product:n("VU/8")({name:"product",data:function(){return{}},props:["product"],methods:{editQuantity:function(t){var e={productId:this.product.id,editQuantityType:t};this.$store.dispatch("editProductQuantity",e)}},computed:{}},i,!1,function(t){n("ggw3")},"data-v-6ee56e83",null).exports},props:["categoryType","categoryContent"],methods:{},computed:{}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v(t._s(t._f("capitalize")(t.categoryType)))]),t._v(" "),n("el-divider"),t._v(" "),t._l(t.categoryContent,function(t){return n("div",{key:t.id},[n("product",{attrs:{product:t}})],1)})],2)},staticRenderFns:[]};var d={name:"products",data:function(){return{}},mounted:function(){this.$store.dispatch("getProducts")},methods:{copyToClipBoard:function(){this.$store.dispatch("copyData")}},components:{productsCategory:n("VU/8")(u,s,!1,function(t){n("1KFw")},"data-v-0c96a46e",null).exports},computed:{products:function(){return this.$store.state.products}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._l(t.products,function(t,e){return n("el-row",{key:e},[n("products-category",{attrs:{"category-type":e,"category-content":t}})],1)}),t._v(" "),n("el-row",[n("el-button",{on:{click:function(e){return t.copyToClipBoard()}}},[t._v("COPIA NEGLI APPUNTI")])],1)],2)},staticRenderFns:[]};var l={name:"home",data:function(){return{}},directives:{},computed:{},components:{products:n("VU/8")(d,p,!1,function(t){n("en+q")},"data-v-bc984eae",null).exports},methods:{}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("products")],1)},staticRenderFns:[]};var v=n("VU/8")(l,f,!1,function(t){n("TAPH")},null,null).exports;r.default.use(c.a);var m=new c.a({routes:[{path:"/",name:"home",component:v}]}),h=n("hnaQ"),y=n("yviF"),g=n.n(y),_=n("gRE1"),C=n.n(_),w=n("woOf"),P=n.n(w),b=n("pFYg"),E=n.n(b),F=n("NYxO");r.default.use(F.a);var q,T=(q="categoria",function(t){return t.reduce(function(t,e){var n=e[q];return t[n]=(t[n]||[]).concat(e),t},{})});var Q=new F.a.Store({state:{products:[],dataForClipboard:{}},getters:{},mutations:{mapProducts:function(t,e){var n=[];e.forEach(function(t){var e=P()({id:t.id},t.data());n.push(e)}),t.products=T(n)},addRemoveQuantityProducts:function(t,e){C()(t.products).forEach(function(t){t.forEach(function(t){t.id===e.productId&&("add"===e.editQuantityType?t.quantita+=1:(t.quantita-=1,t.quantita<0&&(t.quantita=0)))})})},formatDataForClipboard:function(t){var e=[];C()(t.products).forEach(function(t){t.forEach(function(t){e.push(t)})});var n=function(t){for(var e=t,n="object"!=(void 0===e?"undefined":E()(e))?JSON.parse(e):e,r="",o=0;o<n.length;o++){var a="";if(n[o].quantita>0){for(var c in n[o])"descrizione"===c&&(a+=n[o][c]),"quantita"===c&&n[o][c]>0&&(a+=" x"+n[o][c]);a.slice(0,a.length-1),r+=a+"\r\n"}}return r}(e);navigator.clipboard.writeText(n)}},actions:{getProducts:function(t){var e=t.commit;U.collection("prodotti").get().then(function(t){e("mapProducts",t)})},editProductQuantity:function(t,e){(0,t.commit)("addRemoveQuantityProducts",e)},copyData:function(t){(0,t.commit)("formatDataForClipboard")}},modules:{}}),A=(n("881v"),n("DOD7")),R=n.n(A),$=n("zL8q"),x=n.n($);n.d(e,"db",function(){return U}),r.default.use(x.a),r.default.use(R.a),r.default.use(h.a),g.a.initializeApp({projectId:"lista-spesa-86111",databaseURL:"https://lista-spesa-86111.firebaseio.com"});var U=g.a.firestore();r.default.filter("capitalize",function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}),r.default.config.productionTip=!1,new r.default({el:"#app",router:m,store:Q,components:{App:a},template:"<App/>"})},TAPH:function(t,e){},"en+q":function(t,e){},ggw3:function(t,e){},gsu9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.42f3515d8081e25b2acf.js.map