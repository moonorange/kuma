import{d as f,y as b,a2 as y,P as g,o as r,c as l,F as h,J as k,b as i,w as p,G as x,f as L,t as d,p as w,q as T,ak as B,_ as z}from"./index-e8a21a80.js";function C(o){return Object.entries(o??{}).map(([s,a])=>({label:s,value:a}))}const R={class:"tag-list"},j=f({__name:"TagList",props:{tags:{type:Object,required:!0}},setup(o){const s=b(),a=y(),n=o,_=g(()=>(Array.isArray(n.tags)?n.tags:C(n.tags)).map(u=>{const{label:t,value:c}=u,v=m(u);return{label:t,value:c,route:v}}));function m(e){if(e.value!=="*")try{switch(e.label){case"kuma.io/zone":return a.resolve({name:"zone-cp-detail-view",params:{zone:e.value}});case"kuma.io/service":return"mesh"in s.params?a.resolve({name:"service-detail-view",params:{mesh:s.params.mesh,service:e.value}}):void 0;default:return}}catch{return}}return(e,u)=>(r(),l("span",R,[(r(!0),l(h,null,k(_.value,(t,c)=>(r(),i(T(B),{key:c,class:"tag-badge"},{default:p(()=>[(r(),i(x(t.route?"router-link":"span"),{to:t.route},{default:p(()=>[L(d(t.label)+":",1),w("b",null,d(t.value),1)]),_:2},1032,["to"]))]),_:2},1024))),128))]))}});const A=z(j,[["__scopeId","data-v-94e5d380"]]);export{A as T};