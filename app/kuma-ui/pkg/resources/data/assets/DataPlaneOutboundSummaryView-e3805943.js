import{d as x,k as S,S as g,a as i,o as c,b as p,w as t,e as _,m as r,f as m,t as y,l as f,c as k,C as D,v as P,x as R,a1 as C,_ as N}from"./index-5f4feb06.js";import{_ as I}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-7f79002a.js";import{N as B}from"./NavTabs-d4a6578a.js";const O=a=>(P("data-v-93ed9056"),a=a(),R(),a),A={class:"summary-title-wrapper"},T=O(()=>r("img",{"aria-hidden":"true",src:C},null,-1)),$={class:"summary-title"},E={key:1,class:"stack"},j=x({__name:"DataPlaneOutboundSummaryView",props:{data:{}},setup(a){var w;const{t:u}=S(),V=g(),v=a,b=(((w=V.getRoutes().find(e=>e.name==="data-plane-outbound-summary-view"))==null?void 0:w.children)??[]).map(e=>{var s,n;const l=typeof e.name>"u"?(s=e.children)==null?void 0:s[0]:e,o=l.name,d=((n=l.meta)==null?void 0:n.module)??"";return{title:u(`data-planes.routes.item.navigation.${o}`),routeName:o,module:d}});return(e,l)=>{const o=i("RouterView"),d=i("AppView"),h=i("RouteView");return c(),p(h,{name:"data-plane-outbound-summary-view",params:{service:""}},{default:t(({route:s})=>[_(d,null,{title:t(()=>[r("div",A,[T,m(),r("h2",$,y(s.params.service),1)])]),default:t(()=>[m(),typeof v.data>"u"?(c(),p(I,{key:0},{message:t(()=>[r("p",null,y(f(u)("common.collection.summary.empty_message",{type:"Data Plane Proxy"})),1)]),default:t(()=>[m(y(f(u)("common.collection.summary.empty_title",{type:"Data Plane Proxy"}))+" ",1)]),_:1})):(c(),k("div",E,[_(B,{tabs:f(b)},null,8,["tabs"]),m(),_(o,null,{default:t(n=>[(c(),p(D(n.Component),{data:v.data},null,8,["data"]))]),_:1})]))]),_:2},1024)]),_:1})}}});const H=N(j,[["__scopeId","data-v-93ed9056"]]);export{H as default};
