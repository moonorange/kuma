import{d as Y,Q as ee,C as b,a as p,o as t,b as y,w as e,e as o,m as V,f as s,E as ne,t as c,aB as A,q as v,F as z,c as f,H as I,p as D,T as te,K as B,U as oe,aC as se,X as T,D as ae,J as le,_ as ie}from"./index-1j9z4Egf.js";import{A as re}from"./AppCollection-QEcgTHkF.js";import{_ as ce}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-uT_HNzVW.js";import{S as me}from"./StatusBadge-j_uZdXEO.js";import{S as pe}from"./SummaryView-GaIQsIB6.js";const ue=["data-testid"],de=Y({__name:"ZoneListView",setup(fe){const q=ee(),K=b(!1),E=b(!1),C=b(""),L=b({}),N=b({}),F=u=>{const k="zoneIngress";L.value=u.items.reduce((m,d)=>{var g;const l=(g=d[k])==null?void 0:g.zone;if(typeof l<"u"){typeof m[l]>"u"&&(m[l]={online:[],offline:[]});const h=typeof d[`${k}Insight`].connectedSubscription<"u"?"online":"offline";m[l][h].push(d)}return m},{})},H=u=>{const k="zoneEgress";N.value=u.items.reduce((m,d)=>{var g;const l=(g=d[k])==null?void 0:g.zone;if(typeof l<"u"){typeof m[l]>"u"&&(m[l]={online:[],offline:[]});const h=typeof d[`${k}Insight`].connectedSubscription<"u"?"online":"offline";m[l][h].push(d)}return m},{})};async function J(){await q.deleteZone({name:C.value})}function S(){K.value=!K.value}function M(u){S(),C.value=u}function O(u){E.value=(u==null?void 0:u.items.length)>0}return(u,k)=>{const m=p("RouteTitle"),d=p("KButton"),l=p("DataSource"),g=p("RouterLink"),h=p("KTooltip"),U=p("KDropdownItem"),j=p("KDropdown"),G=p("KCard"),P=p("RouterView"),Q=p("AppView"),W=p("RouteView");return t(),y(l,{src:"/me"},{default:e(({data:R})=>[R?(t(),y(W,{key:0,name:"zone-cp-list-view",params:{page:1,size:R.pageSize,zone:""}},{default:e(({route:i,t:r,can:w})=>[o(Q,null,T({title:e(()=>[V("h1",null,[o(m,{title:r("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[s(),s(),o(l,{src:`/zone-cps?page=${i.params.page}&size=${i.params.size}`,onChange:O},{default:e(({data:_,error:Z,refresh:X})=>[o(l,{src:"/zone-ingress-overviews?page=1&size=100",onChange:F}),s(),o(l,{src:"/zone-egress-overviews?page=1&size=100",onChange:H}),s(),o(G,null,{default:e(()=>[Z!==void 0?(t(),y(ne,{key:0,error:Z},null,8,["error"])):(t(),y(re,{key:1,class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Ingresses (online / total)",key:"ingress"},{label:"Egresses (online / total)",key:"egress"},{label:"Status",key:"state"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":i.params.page,"page-size":i.params.size,total:_==null?void 0:_.total,items:_==null?void 0:_.items,error:Z,"empty-state-title":w("create zones")?r("zone-cps.empty_state.title"):void 0,"empty-state-message":w("create zones")?r("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":w("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":w("create zones")?r("zones.index.create"):void 0,"is-selected-row":n=>n.name===i.params.zone,onChange:i.update},T({name:e(({row:n})=>[o(g,{to:{name:"zone-cp-detail-view",params:{zone:n.name},query:{page:i.params.page,size:i.params.size}}},{default:e(()=>[s(c(n.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({row:n})=>[s(c(v(A)(n.zoneInsight,"version.kumaCp.version",r("common.collection.none"))),1)]),type:e(({row:n})=>[s(c(n.zoneInsight.environment.length>0?n.zoneInsight.environment:"kubernetes"),1)]),ingress:e(({row:n})=>[(t(!0),f(z,null,I([L.value[n.name]||{online:[],offline:[]}],a=>(t(),f(z,null,[s(c(a.online.length)+" / "+c(a.online.length+a.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(t(!0),f(z,null,I([N.value[n.name]||{online:[],offline:[]}],a=>(t(),f(z,null,[s(c(a.online.length)+" / "+c(a.online.length+a.offline.length),1)],64))),256))]),state:e(({row:n})=>[o(me,{status:n.state},null,8,["status"])]),warnings:e(({row:n})=>[(t(!0),f(z,null,I([{version_mismatch:!v(A)(n.zoneInsight,"version.kumaCp.kumaCpGlobalCompatible","true"),store_memory:n.zoneInsight.store==="memory"}],a=>(t(),f(z,{key:`${a.version_mismatch}-${a.store_memory}`},[Object.values(a).some($=>$)?(t(),y(h,{key:0},{content:e(()=>[V("ul",null,[(t(!0),f(z,null,I(a,($,x)=>(t(),f(z,{key:x},[$?(t(),f("li",{key:0,"data-testid":`warning-${x}`},c(r(`zone-cps.list.${x}`)),9,ue)):D("",!0)],64))),128))])]),default:e(()=>[s(),o(te,{"data-testid":"warning",class:"mr-1",size:v(B),"hide-title":""},null,8,["size"])]),_:2},1024)):(t(),f(z,{key:1},[s(c(r("common.collection.none")),1)],64))],64))),128))]),details:e(({row:n})=>[o(g,{class:"details-link","data-testid":"details-link",to:{name:"zone-cp-detail-view",params:{zone:n.name}}},{default:e(()=>[s(c(r("common.collection.details_link"))+" ",1),o(v(oe),{display:"inline-block",decorative:"",size:v(B)},null,8,["size"])]),_:2},1032,["to"])]),_:2},[w("create zones")?{name:"actions",fn:e(({row:n})=>[o(j,{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[o(d,{class:"non-visual-button",appearance:"secondary","icon-only":""},{default:e(()=>[o(v(se))]),_:1})]),items:e(()=>[o(U,{danger:"","data-testid":"dropdown-delete-item",onClick:a=>M(n.name)},{default:e(()=>[s(c(r("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),key:"0"}:void 0]),1032,["headers","page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange"]))]),_:2},1024),s(),i.params.zone?(t(),y(P,{key:0},{default:e(n=>[o(pe,{onClose:a=>i.replace({name:"zone-cp-list-view",query:{page:i.params.page,size:i.params.size}})},{default:e(()=>[(t(),y(ae(n.Component),{name:i.params.zone,"zone-overview":_==null?void 0:_.items.find(a=>a.name===i.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):D("",!0),s(),K.value?(t(),y(ce,{key:1,"confirmation-text":C.value,"delete-function":J,"is-visible":"","action-button-text":r("common.delete_modal.proceed_button"),title:r("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:S,onDelete:()=>{S(),X()}},{default:e(()=>[V("p",null,c(r("common.delete_modal.text1",{type:"Zone",name:C.value})),1),s(),V("p",null,c(r("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","action-button-text","title","onDelete"])):D("",!0)]),_:2},1032,["src"])]),_:2},[w("create zones")&&E.value?{name:"actions",fn:e(()=>[o(d,{appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[o(v(le),{size:v(B)},null,8,["size"]),s(" "+c(r("zones.index.create")),1)]),_:2},1024)]),key:"0"}:void 0]),1024)]),_:2},1032,["params"])):D("",!0)]),_:1})}}}),ke=ie(de,[["__scopeId","data-v-b5cc8de5"]]);export{ke as default};