import{_ as l}from"./EnvoyData.vue_vue_type_script_setup_true_lang-wbSjS066.js";import{d as c,a as o,o as m,b as _,w as t,e as n,m as u,f}from"./index-sL-Jj2ZJ.js";import"./index-FZCiQto1.js";import"./CodeBlock-S8wvO8Wf.js";import"./ErrorBlock-R0Eo7cBR.js";import"./TextWithCopyButton-lp9UdEeo.js";import"./CopyButton-6B7rfdOI.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-dTI6iS5j.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-mf8mU9ta.js";const M=c({__name:"DataPlaneXdsConfigView",setup(g){return(h,x)=>{const s=o("RouteTitle"),p=o("KCard"),r=o("AppView"),d=o("RouteView");return m(),_(d,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:i})=>[n(r,null,{title:t(()=>[u("h2",null,[n(s,{title:i("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"])])]),default:t(()=>[f(),n(p,null,{default:t(()=>[n(l,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/xds`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{M as default};