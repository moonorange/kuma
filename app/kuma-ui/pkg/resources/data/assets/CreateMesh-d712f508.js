import{f as l}from"./kongponents.es-3ba46133.js";import{O as u,a as _,b as m}from"./OnboardingPage-92514748.js";import{P as h}from"./production-554ae9d4.js";import{u as f}from"./store-f2021894.js";import{d as b,r as g,c as v,o as y,a as x,w as a,e as s,f as e,g as n,t as S,u as o,p as A,k as C}from"./runtime-dom.esm-bundler-9284044f.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const r=t=>(A("data-v-bc48623a"),t=t(),C(),t),k={class:"mb-4 text-center"},D=r(()=>n("i",null,"default",-1)),M=r(()=>n("p",{class:"mt-4 text-center"},`
        This mesh is empty. Next, you add services and their data plane proxies.
      `,-1)),O=b({__name:"CreateMesh",setup(t){const c=[{label:"Name",key:"name"},{label:"Services",key:"servicesAmount"},{label:"DPPs",key:"dppsAmount"}],i=f(),p=g({total:1,data:[{name:"default",servicesAmount:0,dppsAmount:0}]}),d=v(()=>i.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-configuration-types");return(P,B)=>(y(),x(m,null,{header:a(()=>[s(u,null,{title:a(()=>[e(`
          Create the mesh
        `)]),_:1})]),content:a(()=>[n("p",k,[e(`
        When you install, `+S(o(h))+" creates a ",1),D,e(` mesh, but you can add as many meshes as you need.
      `)]),e(),s(o(l),{class:"table",fetcher:()=>p.value,headers:c,"disable-pagination":""},null,8,["fetcher"]),e(),M]),navigation:a(()=>[s(_,{"next-step":"onboarding-add-services","previous-step":o(d)},null,8,["previous-step"])]),_:1}))}});const R=N(O,[["__scopeId","data-v-bc48623a"]]);export{R as default};
