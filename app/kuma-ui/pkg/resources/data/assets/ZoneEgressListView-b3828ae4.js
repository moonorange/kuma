import{d as K,r as o,o as n,g as c,w as e,h as a,m as S,l as u,E as B,$ as R,C as f,a5 as D,j as v,F as b,S as L,i as h,a1 as N,K as T,k as $,q as A}from"./index-77212499.js";import{g as Z}from"./dataplane-0a086c06.js";const F=K({__name:"ZoneEgressListView",setup(P){function C(z){return z.map(m=>{const{name:p}=m,_={name:"zone-egress-detail-view",params:{zoneEgress:p}},{networking:t}=m.zoneEgress;let d;t!=null&&t.address&&(t!=null&&t.port)&&(d=`${t.address}:${t.port}`);const g=Z(m.zoneEgressInsight??{});return{detailViewRoute:_,name:p,addressPort:d,status:g}})}return(z,m)=>{const p=o("RouteTitle"),_=o("RouterLink"),t=o("KButton"),d=o("KDropdownItem"),g=o("KDropdownMenu"),E=o("KCard"),w=o("DataSource"),V=o("AppView"),x=o("RouteView");return n(),c(w,{src:"/me"},{default:e(({data:k})=>[k?(n(),c(x,{key:0,name:"zone-egress-list-view",params:{page:1,size:k.pageSize}},{default:e(({route:l,t:r})=>[a(V,null,{title:e(()=>[S("h1",null,[a(p,{title:r("zone-egresses.routes.items.title"),render:!0},null,8,["title"])])]),default:e(()=>[u(),a(w,{src:`/zone-egress-overviews?page=${l.params.page}&size=${l.params.size}`},{default:e(({data:i,error:y})=>[a(E,null,{body:e(()=>[y!==void 0?(n(),c(B,{key:0,error:y},null,8,["error"])):(n(),c(R,{key:1,class:"zone-egress-collection","data-testid":"zone-egress-collection",headers:[{label:"Name",key:"name"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":parseInt(l.params.page),"page-size":parseInt(l.params.size),total:i==null?void 0:i.total,items:i?C(i.items):void 0,error:y,"empty-state-message":r("common.emptyState.message",{type:"Zone Egresses"}),"empty-state-cta-to":r("zone-egresses.href.docs"),"empty-state-cta-text":r("common.documentation"),onChange:l.update},{name:e(({row:s,rowValue:I})=>[a(_,{to:s.detailViewRoute,"data-testid":"detail-view-link"},{default:e(()=>[u(f(I),1)]),_:2},1032,["to"])]),addressPort:e(({rowValue:s})=>[s?(n(),c(D,{key:0,text:s},null,8,["text"])):(n(),v(b,{key:1},[u(f(r("common.collection.none")),1)],64))]),status:e(({rowValue:s})=>[s?(n(),c(L,{key:0,status:s},null,8,["status"])):(n(),v(b,{key:1},[u(f(r("common.collection.none")),1)],64))]),actions:e(({row:s})=>[a(g,{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[a(t,{class:"non-visual-button",appearance:"secondary",size:"small"},{default:e(()=>[a(h(N),{size:h(T)},null,8,["size"])]),_:1})]),items:e(()=>[a(d,{item:{to:s.detailViewRoute,label:r("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]))]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["params"])):$("",!0)]),_:1})}}});const q=A(F,[["__scopeId","data-v-fd5c7f5e"]]);export{q as default};
