import{d as S,a as F,o as t,b as h,w as l,c as o,F as r,J as O,p as P,e as d,f as c,t as k,q as I,a9 as H,_ as M,v as R,P as D}from"./index-e8a21a80.js";import{A as J,a as Y}from"./AccordionList-d0df33ce.js";import{_ as z}from"./CodeBlock.vue_vue_type_style_index_0_lang-73738492.js";import{P as G}from"./PolicyTypeTag-0cd5733a.js";import{T as B}from"./TagList-89a4eadf.js";import{t as q}from"./toYaml-4e00099e.js";const K={class:"policy-type-heading"},Q={class:"policy-list"},U={key:0},W=S({__name:"PolicyTypeEntryList",props:{id:{type:String,required:!1,default:"entry-list"},policyTypeEntries:{type:Object,required:!0}},setup(L){const f=[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}],T=L;function v({headerKey:b}){return{class:`cell-${b}`}}return(b,N)=>{const A=F("router-link");return t(),h(Y,{"initially-open":[],"multiple-open":""},{default:l(()=>[(t(!0),o(r,null,O(T.policyTypeEntries,(p,s)=>(t(),h(J,{key:s},{"accordion-header":l(()=>[P("h3",K,[d(G,{"policy-type":p.type},{default:l(()=>[c(k(p.type)+" ("+k(p.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":l(()=>[P("div",Q,[d(I(H),{class:"policy-type-table",fetcher:()=>({data:p.connections,total:p.connections.length}),headers:f,"cell-attrs":v,"disable-pagination":"","is-clickable":""},{sourceTags:l(({rowValue:e})=>[e.length>0?(t(),h(B,{key:0,class:"tag-list",tags:e},null,8,["tags"])):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),destinationTags:l(({rowValue:e})=>[e.length>0?(t(),h(B,{key:0,class:"tag-list",tags:e},null,8,["tags"])):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),name:l(({rowValue:e})=>[e!==null?(t(),o(r,{key:0},[c(k(e),1)],64)):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),origins:l(({rowValue:e})=>[e.length>0?(t(),o("ul",U,[(t(!0),o(r,null,O(e,(i,n)=>(t(),o("li",{key:`${s}-${n}`},[d(A,{to:i.route},{default:l(()=>[c(k(i.name),1)]),_:2},1032,["to"])]))),128))])):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),config:l(({rowValue:e,rowKey:i})=>[e!==null?(t(),h(z,{key:0,id:`${T.id}-${s}-${i}-code-block`,code:e,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const X=M(W,[["__scopeId","data-v-9a1971d5"]]),Z={class:"policy-type-heading"},w={class:"policy-list"},V={key:1,class:"tag-list-wrapper"},ee={key:0},te={key:1},ne={key:0},se={key:0},oe=S({__name:"RuleEntryList",props:{id:{type:String,required:!1,default:"entry-list"},ruleEntries:{type:Object,required:!0}},setup(L){const f=[{label:"Type",key:"type"},{label:"Addresses",key:"addresses"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}],T=L;function v({headerKey:b}){return{class:`cell-${b}`}}return(b,N)=>{const A=F("router-link");return t(),h(Y,{"initially-open":[],"multiple-open":""},{default:l(()=>[(t(!0),o(r,null,O(T.ruleEntries,(p,s)=>(t(),h(J,{key:s},{"accordion-header":l(()=>[P("h3",Z,[d(G,{"policy-type":p.type},{default:l(()=>[c(k(p.type)+" ("+k(p.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":l(()=>[P("div",w,[d(I(H),{class:"policy-type-table",fetcher:()=>({data:p.connections,total:p.connections.length}),headers:f,"cell-attrs":v,"disable-pagination":"","is-clickable":""},{type:l(({rowValue:e})=>[e.sourceTags.length===0&&e.destinationTags.length===0?(t(),o(r,{key:0},[c(`
                —
              `)],64)):(t(),o("div",V,[e.sourceTags.length>0?(t(),o("div",ee,[c(`
                  From

                  `),d(B,{class:"tag-list",tags:e.sourceTags},null,8,["tags"])])):R("",!0),c(),e.destinationTags.length>0?(t(),o("div",te,[c(`
                  To

                  `),d(B,{class:"tag-list",tags:e.destinationTags},null,8,["tags"])])):R("",!0)]))]),addresses:l(({rowValue:e})=>[e.length>0?(t(),o("ul",ne,[(t(!0),o(r,null,O(e,(i,n)=>(t(),o("li",{key:`${s}-${n}`},k(i),1))),128))])):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),origins:l(({rowValue:e})=>[e.length>0?(t(),o("ul",se,[(t(!0),o(r,null,O(e,(i,n)=>(t(),o("li",{key:`${s}-${n}`},[d(A,{to:i.route},{default:l(()=>[c(k(i.name),1)]),_:2},1032,["to"])]))),128))])):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),config:l(({rowValue:e,rowKey:i})=>[e!==null?(t(),h(z,{key:0,id:`${T.id}-${s}-${i}-code-block`,code:e,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(t(),o(r,{key:1},[c(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const ie=M(oe,[["__scopeId","data-v-3e59037c"]]),ce=P("h2",{class:"visually-hidden"},`
    Policies
  `,-1),le={key:0,class:"mt-2"},ae=P("h2",{class:"mb-2"},`
      Rules
    `,-1),ge=S({__name:"SidecarDataplanePolicyList",props:{sidecarDataplanes:{},rules:{},policyTypesByName:{}},setup(L){const f=L,T=D(()=>b(f.sidecarDataplanes)),v=D(()=>A(f.rules));function b(s){const e=new Map;for(const n of s){const{type:y,service:u}=n,_=typeof u=="string"&&u!==""?[{label:"kuma.io/service",value:u}]:[],g=y==="inbound"||y==="outbound"?n.name:null;for(const[a,$]of Object.entries(n.matchedPolicies)){e.has(a)||e.set(a,{type:a,connections:[]});const E=e.get(a),C=f.policyTypesByName[a];for(const x of $){const m=N(x,C,n,_,g);E.connections.push(...m)}}}const i=Array.from(e.values());return i.sort((n,y)=>n.type.localeCompare(y.type)),i}function N(s,e,i,n,y){const u=s.conf&&Object.keys(s.conf).length>0?q(s.conf):null,g=[{name:s.name,route:{name:"policy-detail-view",params:{mesh:s.mesh,policyPath:e.path,policy:s.name}}}],a=[];if(i.type==="inbound"&&Array.isArray(s.sources))for(const{match:$}of s.sources){const C={sourceTags:[{label:"kuma.io/service",value:$["kuma.io/service"]}],destinationTags:n,name:y,config:u,origins:g};a.push(C)}else{const E={sourceTags:[],destinationTags:n,name:y,config:u,origins:g};a.push(E)}return a}function A(s){const e=new Map;for(const n of s){e.has(n.policyType)||e.set(n.policyType,{type:n.policyType,connections:[]});const y=e.get(n.policyType),u=f.policyTypesByName[n.policyType],_=p(n,u);y.connections.push(..._)}const i=Array.from(e.values());return i.sort((n,y)=>n.type.localeCompare(y.type)),i}function p(s,e){const{type:i,service:n,subset:y,conf:u}=s,_=y?Object.entries(y):[];let g,a;i==="ClientSubset"?_.length>0?g=_.map(([m,j])=>({label:m,value:j})):g=[{label:"kuma.io/service",value:"*"}]:g=[],i==="DestinationSubset"?_.length>0?a=_.map(([m,j])=>({label:m,value:j})):typeof n=="string"&&n!==""?a=[{label:"kuma.io/service",value:n}]:a=[{label:"kuma.io/service",value:"*"}]:i==="ClientSubset"&&typeof n=="string"&&n!==""?a=[{label:"kuma.io/service",value:n}]:a=[];const $=s.addresses??[],E=u&&Object.keys(u).length>0?q(u):null,C=[];for(const m of s.origins)C.push({name:m.name,route:{name:"policy-detail-view",params:{mesh:m.mesh,policyPath:e.path,policy:m.name}}});return[{type:{sourceTags:g,destinationTags:a},addresses:$,config:E,origins:C}]}return(s,e)=>(t(),o(r,null,[ce,c(),d(X,{id:"policies","policy-type-entries":T.value,"data-testid":"policy-list"},null,8,["policy-type-entries"]),c(),v.value.length>0?(t(),o("div",le,[ae,c(),d(ie,{id:"rules","rule-entries":v.value,"data-testid":"rule-list"},null,8,["rule-entries"])])):R("",!0)],64))}});export{ge as _};