import{x as r}from"./kongponents.es-8abed680.js";import{P as f}from"./production-0f1ffdb6.js";import{u as g}from"./store-0511bcbf.js";import{c as v,d as b}from"./index-46eb6882.js";import{O as y,a as h,b as x}from"./OnboardingPage-8b536a7f.js";import{d as V,r as z,c as M,k as S,a as i,w as e,o as p,e as n,f as t,g as d,t as D,u as s,y as G}from"./runtime-dom.esm-bundler-a6f4ece5.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-28f79c9b.js";import"./DoughnutChart-ffc86670.js";import"./vue-router-cf3250ac.js";const N={class:"graph-list mb-6"},O={class:"radio-button-group"},T=V({__name:"DeploymentTypes",setup(w){const u=v(),m={standalone:b(),"multi-zone":u},c=g(),o=z("standalone"),_=M(()=>m[o.value]);return S(function(){o.value=c.getters["config/getMulticlusterStatus"]?"multi-zone":"standalone"}),(k,a)=>(p(),i(y,{"with-image":""},{header:e(()=>[n(h,null,{title:e(()=>[t(`
          Learn about deployments
        `)]),description:e(()=>[d("p",null,D(s(f))+" can be deployed in standalone or multi-zone mode.",1)]),_:1})]),content:e(()=>[d("div",N,[(p(),i(G(s(_))))]),t(),d("div",O,[n(s(r),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[t(`
          Standalone deployment
        `)]),_:1},8,["modelValue"]),t(),n(s(r),{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[t(`
          Multi-zone deployment
        `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[n(x,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:1}))}});const F=C(T,[["__scopeId","data-v-c10fc7b5"]]);export{F as default};