import{E as c}from"./EnvoyData-c81e58ec.js";import{a as m}from"./dataplane-0a086c06.js";import{d as u,r as a,o as _,i as f,w as e,j as t,p as w,n as x,k as h}from"./index-adcc6fc8.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4a09da2d.js";const R=u({__name:"DataPlaneXdsConfigView",props:{data:{}},setup(o){const n=o;return(V,g)=>{const r=a("RouteTitle"),p=a("KCard"),d=a("AppView"),l=a("RouteView");return _(),f(l,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:""}},{default:e(({route:s,t:i})=>[t(d,null,{title:e(()=>[w("h2",null,[t(r,{title:i("data-planes.routes.item.navigation.data-plane-xds-config-view"),render:!0},null,8,["title"])])]),default:e(()=>[x(),t(p,null,{body:e(()=>[t(c,{status:h(m)(n.data.dataplane,n.data.dataplaneInsight).status,resource:"Data Plane Proxy",src:`/meshes/${s.params.mesh}/dataplanes/${s.params.dataPlane}/data-path/xds`,"query-key":"envoy-data-xds-data-plane"},null,8,["status","src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{R as default};
