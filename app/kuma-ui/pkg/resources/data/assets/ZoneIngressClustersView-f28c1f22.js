import{_ as l}from"./EnvoyData.vue_vue_type_script_setup_true_lang-f1bff053.js";import{d as m,a as t,o as d,b as u,w as s,e as n,m as _,f as g}from"./index-9325d193.js";import"./index-fce48c05.js";import"./CodeBlock-af11b932.js";import"./uniqueId-90cc9b93.js";import"./ErrorBlock-d3cf25f7.js";import"./TextWithCopyButton-ea0e7729.js";import"./CopyButton-62822857.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-49aa7999.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-b1719a3b.js";const B=m({__name:"ZoneIngressClustersView",setup(f){return(h,C)=>{const a=t("RouteTitle"),r=t("KCard"),i=t("AppView"),p=t("RouteView");return d(),u(p,{name:"zone-ingress-clusters-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:s(({route:e,t:c})=>[n(i,null,{title:s(()=>[_("h2",null,[n(a,{title:c("zone-ingresses.routes.item.navigation.zone-ingress-clusters-view")},null,8,["title"])])]),default:s(()=>[g(),n(r,null,{default:s(()=>[n(l,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};