import{d as D,l as I,u as A,a as v,o as t,b as l,w as e,e as r,p as m,f as s,q as a,t as i,c as p,E as x,D as S,a6 as y,a3 as V,v as C,F as N,a0 as P,B as q,C as E,a8 as L,_ as F}from"./index-18b1553c.js";import{_ as k}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-4e8db35a.js";import{_ as Q}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-0a42085b.js";import{S as K}from"./StatusBadge-6c7efe52.js";import{T as W}from"./TagList-a9024701.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-3f6534fa.js";import"./toYaml-4e00099e.js";const j=_=>(q("data-v-c02ac605"),_=_(),E(),_),z={class:"summary-title-wrapper"},G=j(()=>m("img",{"aria-hidden":"true",src:L},null,-1)),H={class:"summary-title"},J={key:1,class:"stack"},M={class:"mt-4"},O={key:0},U={key:3,class:"stack"},X={key:1,class:"stack"},Y={key:0},Z={class:"mt-4"},ee=D({__name:"ServiceSummaryView",props:{service:{default:void 0}},setup(_){const{t:o}=I(),b=A(),c=_;return(te,se)=>{const B=v("RouteTitle"),T=v("RouterLink"),f=v("DataSource"),R=v("AppView"),$=v("RouteView");return t(),l($,{name:"service-summary-view",params:{mesh:"",service:"",codeSearch:""}},{default:e(({route:d})=>[r(R,null,{title:e(()=>[m("div",z,[G,s(),m("h2",H,[r(T,{to:{name:"service-detail-view",params:{service:d.params.service}}},{default:e(()=>[r(B,{title:a(o)("services.routes.item.title",{name:d.params.service}),render:!0},null,8,["title"])]),_:2},1032,["to"])])])]),default:e(()=>{var g,w;return[s(),c.service===void 0?(t(),l(k,{key:0},{message:e(()=>[m("p",null,i(a(o)("common.collection.summary.empty_message",{type:"Service"})),1)]),default:e(()=>[s(i(a(o)("common.collection.summary.empty_title",{type:"Service"}))+" ",1)]),_:1})):(t(),p("div",J,[m("div",null,[m("h3",null,i(a(o)("services.routes.item.overview")),1),s(),m("div",M,[c.service.serviceType==="external"?(t(),p("div",O,[r(f,{src:`/meshes/${c.service.mesh}/external-services/for/${c.service.name}`},{default:e(({data:n,error:u})=>[u?(t(),l(x,{key:0,error:u},null,8,["error"])):n===void 0?(t(),l(S,{key:1})):n===null?(t(),l(k,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[m("p",null,i(a(o)("services.detail.no_matching_external_service",{name:c.service.name})),1)]),_:1})):(t(),p("div",U,[r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[r(V,{text:n.networking.address},null,8,["text"])]),_:2},1024),s(),n.tags!==null?(t(),l(y,{key:0},{title:e(()=>[s(i(a(o)("http.api.property.tags")),1)]),body:e(()=>[r(W,{tags:n.tags},null,8,["tags"])]),_:2},1024)):C("",!0)]))]),_:1},8,["src"])])):(t(),p("div",X,[r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.status")),1)]),body:e(()=>[r(K,{status:c.service.status??"not_available"},null,8,["status"])]),_:1}),s(),r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[c.service.addressPort?(t(),l(V,{key:0,text:c.service.addressPort},null,8,["text"])):(t(),p(N,{key:1},[s(i(a(o)("common.detail.none")),1)],64))]),_:1}),s(),r(P,{online:((g=c.service.dataplanes)==null?void 0:g.online)??0,total:((w=c.service.dataplanes)==null?void 0:w.total)??0},{title:e(()=>[s(i(a(o)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])]))])]),s(),c.service.serviceType==="external"?(t(),p("div",Y,[m("h3",null,i(a(o)("services.routes.item.config")),1),s(),m("div",Z,[r(f,{src:`/meshes/${d.params.mesh}/external-services/for/${d.params.service}`},{default:e(({data:n,error:u})=>[u?(t(),l(x,{key:0,error:u},null,8,["error"])):n===void 0?(t(),l(S,{key:1})):n===null?(t(),l(k,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[m("p",null,i(a(o)("services.detail.no_matching_external_service",{name:d.params.service})),1)]),_:2},1024)):(t(),l(Q,{key:3,id:"code-block-service",resource:n,"resource-fetcher":h=>a(b).getExternalService({mesh:n.mesh,name:n.name},h),"is-searchable":"",query:d.params.codeSearch,onQueryChange:h=>d.update({codeSearch:h})},null,8,["resource","resource-fetcher","query","onQueryChange"]))]),_:2},1032,["src"])])])):C("",!0)]))]}),_:2},1024)]),_:1})}}});const me=F(ee,[["__scopeId","data-v-c02ac605"]]);export{me as default};