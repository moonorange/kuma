import{_ as v}from"./SidecarDataplanePolicyList.vue_vue_type_script_setup_true_lang-46814fd2.js";import{d as $,a as o,o as a,b as t,w as e,e as s,p as b,f as C,E as l,D as P}from"./index-18b1553c.js";import"./AccordionList-a75f0783.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-3f6534fa.js";import"./PolicyTypeTag-5a89fb25.js";import"./TagList-a9024701.js";import"./toYaml-4e00099e.js";const O=$({__name:"DataPlanePoliciesView",setup(x){return(B,R)=>{const f=o("RouteTitle"),r=o("DataSource"),w=o("KCard"),h=o("AppView"),k=o("RouteView");return a(),t(k,{name:"data-plane-policies-view",params:{mesh:"",dataPlane:""}},{default:e(({route:n,t:y})=>[s(h,null,{title:e(()=>[b("h2",null,[s(f,{title:y("data-planes.routes.item.navigation.data-plane-policies-view"),render:!0},null,8,["title"])])]),default:e(()=>[C(),s(w,null,{body:e(()=>[s(r,{src:"/*/policy-types"},{default:e(({data:i,error:c})=>[s(r,{src:`/meshes/${n.params.mesh}/dataplanes/${n.params.dataPlane}/sidecar-dataplanes-policies`},{default:e(({data:p,error:m})=>[s(r,{src:`/meshes/${n.params.mesh}/dataplanes/${n.params.dataPlane}/rules`},{default:e(({data:d,error:_})=>[c?(a(),t(l,{key:0,error:c},null,8,["error"])):m?(a(),t(l,{key:1,error:m},null,8,["error"])):_?(a(),t(l,{key:2,error:_},null,8,["error"])):i===void 0||p===void 0||d===void 0?(a(),t(P,{key:3})):(a(),t(v,{key:4,"policy-types-by-name":i.policies.reduce((V,u)=>Object.assign(V,{[u.name]:u}),{}),"sidecar-dataplanes":p.items,rules:d.items},null,8,["policy-types-by-name","sidecar-dataplanes","rules"]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}}});export{O as default};