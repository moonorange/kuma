import{E as l}from"./EnvoyData-147eaf44.js";import{d as m,a as o,o as c,b as _,w as t,e as n,m as u,f as g}from"./index-cf10d15e.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4bf3aea6.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-dae16a2a.js";import"./ErrorBlock-ce60392d.js";import"./TextWithCopyButton-b8bd594c.js";import"./CopyButton-0aa5d830.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-990b7d32.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-df4338bd.js";const D=m({__name:"DataPlaneXdsConfigView",setup(f){return(h,x)=>{const p=o("RouteTitle"),r=o("KCard"),s=o("AppView"),i=o("RouteView");return c(),_(i,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:d})=>[n(s,null,{title:t(()=>[u("h2",null,[n(p,{title:d("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"])])]),default:t(()=>[g(),n(r,null,{default:t(()=>[n(l,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/xds`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{D as default};