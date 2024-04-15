import{d as T,a as o,o as a,b as d,w as e,e as c,m as u,f as y,c as _,F as m,D as w,n as X,t as k,C as $,q as b,_ as q}from"./index-C0P2XlBb.js";const z={class:"policy-list-content"},E={class:"policy-count"},j={class:"policy-list"},G=T({__name:"PolicyTypeListView",setup(H){return(J,M)=>{const C=o("RouteTitle"),D=o("XAction"),R=o("DataCollection"),B=o("DataLoader"),P=o("KCard"),x=o("RouterView"),f=o("DataSource"),L=o("AppView"),A=o("RouteView");return a(),d(f,{src:"/me"},{default:e(({data:N})=>[N?(a(),d(A,{key:0,name:"policy-list-view",params:{mesh:"",policyPath:"",policy:""}},{default:e(({route:r,t:S})=>[c(L,null,{title:e(()=>[u("h2",null,[c(C,{title:S("policies.routes.types.title")},null,8,["title"])])]),default:e(()=>[y(),c(f,{src:`/mesh-insights/${r.params.mesh}`},{default:e(({data:t})=>[c(f,{src:"/*/policy-types"},{default:e(({data:i,error:F})=>[u("div",z,[c(P,{class:"policy-type-list","data-testid":"policy-type-list"},{default:e(()=>[c(B,{data:[i],errors:[F]},{default:e(()=>[(a(!0),_(m,null,w([typeof(t==null?void 0:t.policies)>"u"?i.policies:i.policies.filter(s=>{var p,l;return!s.isTargetRefBased&&(((l=(p=t.policies)==null?void 0:p[s.name])==null?void 0:l.total)??0)>0})],s=>(a(),d(R,{key:s,predicate:typeof(t==null?void 0:t.policies)>"u"?void 0:p=>s.length>0||p.isTargetRefBased,items:i.policies},{default:e(({items:p})=>[(a(!0),_(m,null,w([p.find(l=>l.path===r.params.policyPath)],l=>(a(),_(m,{key:l},[(a(!0),_(m,null,w(p,(n,K)=>{var v,V;return a(),_("div",{key:n.path,class:X(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":l&&l.path===n.path}])},[c(D,{class:"policy-type-link",to:{name:"policy-list-view",params:{mesh:r.params.mesh,policyPath:n.path}},mount:r.params.policyPath.length===0&&K===0?r.replace:void 0,"data-testid":`policy-type-link-${n.name}`},{default:e(()=>[y(k(n.name),1)]),_:2},1032,["to","mount","data-testid"]),y(),u("div",E,k(((V=(v=t==null?void 0:t.policies)==null?void 0:v[n.name])==null?void 0:V.total)??0),1)],2)}),128))],64))),128))]),_:2},1032,["predicate","items"]))),128))]),_:2},1032,["data","errors"])]),_:2},1024),y(),u("div",j,[c(x,null,{default:e(({Component:s})=>[(a(),d($(s),{"policy-types":i==null?void 0:i.policies},null,8,["policy-types"]))]),_:2},1024)])])]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)]),_:1})):b("",!0)]),_:1})}}}),Q=q(G,[["__scopeId","data-v-129749cd"]]);export{Q as default};