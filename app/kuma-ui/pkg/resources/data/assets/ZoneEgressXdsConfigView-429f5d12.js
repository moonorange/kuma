import{E as d}from"./EnvoyData-7b79a04e.js";import{d as m,a as t,o as l,b as g,w as a,e as n,m as u,f as _}from"./index-94d4cc96.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2469fae3.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-b391eace.js";import"./ErrorBlock-a2d60ce6.js";import"./TextWithCopyButton-6eb2c8fd.js";import"./CopyButton-2a8eacda.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-89af0225.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-06990225.js";const N=m({__name:"ZoneEgressXdsConfigView",setup(f){return(x,h)=>{const s=t("RouteTitle"),r=t("KCard"),i=t("AppView"),p=t("RouteView");return l(),g(p,{name:"zone-egress-xds-config-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:c})=>[n(i,null,{title:a(()=>[u("h2",null,[n(s,{title:c("zone-egresses.routes.item.navigation.zone-egress-xds-config-view")},null,8,["title"])])]),default:a(()=>[_(),n(r,null,{default:a(()=>[n(d,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/xds`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{N as default};