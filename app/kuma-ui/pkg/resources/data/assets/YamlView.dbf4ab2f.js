import{j as y}from"./index.58caa11d.js";import{d as E,L as V,M as w,h as _,b as n,w as v,N as o,O as j,o as a,e as k,J as x,_ as C}from"./index.f2463021.js";import{C as h}from"./CodeBlock.f31221ad.js";import{_ as q}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.79e60fc9.js";import{E as O}from"./ErrorBlock.6b7b6a0a.js";import{_ as Y}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.92dd8129.js";const L={class:"yaml-view"},N={key:3,class:"yaml-view-content"},K=E({__name:"YamlView",props:{content:{type:Object,required:!1,default:null},isLoading:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1}},setup(s){const e=s,b=j(),c=[{hash:"#universal",title:"Universal"},{hash:"#kubernetes",title:"Kubernetes"}],l=V(c[0].hash),r=b.getters["config/getEnvironment"];typeof r=="string"&&(l.value="#"+r);const m=w(()=>{var f;const t={};if(t.apiVersion="kuma.io/v1alpha1",t.kind=e.content.type,e.content.mesh!==void 0&&(t.mesh=e.content.mesh),(f=e.content.name)!=null&&f.includes(".")){const p=e.content.name.split("."),g=p.pop(),B=p.join(".");t.metadata={name:B,namespace:g}}else t.metadata={name:e.content.name};const{type:i,name:u,mesh:T,...d}=e.content;return Object.keys(d).length>0&&(t.spec=d),{universal:y(e.content),kubernetes:y(t)}});return(t,i)=>(a(),_("div",L,[s.isLoading?(a(),n(Y,{key:0})):s.hasError?(a(),n(O,{key:1})):s.isEmpty?(a(),n(q,{key:2})):(a(),_("div",N,[(a(),n(o(x),{key:o(r),modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=u=>l.value=u),tabs:c},{universal:v(()=>[k(h,{language:"yaml",code:o(m).universal},null,8,["code"])]),kubernetes:v(()=>[k(h,{language:"yaml",code:o(m).kubernetes},null,8,["code"])]),_:1},8,["modelValue"]))]))]))}});const z=C(K,[["__scopeId","data-v-2fe58f6d"]]);export{z as Y};
