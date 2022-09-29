import{_ as g,B as y,J as B,z as k,A as v,h as d,D as u,p as n,i as c,b as l,E as T,k as E,w as b,r as i,o as a,e as S,u as w,x as L}from"./index.f2463021.js";import{E as I}from"./ErrorBlock.6b7b6a0a.js";import{_ as K}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.92dd8129.js";const V={name:"TabsWidget",components:{ErrorBlock:I,LoadingBlock:K,KIcon:y,KTabs:B},props:{loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},error:{type:Object,required:!1,default:null},tabs:{type:Array,required:!0},hasBorder:{type:Boolean,default:!1},initialTabOverride:{type:String,default:null}},emits:["on-tab-change"],data(){return{tabState:this.initialTabOverride&&`#${this.initialTabOverride}`}},computed:{tabsSlots(){return this.tabs.map(e=>e.hash.replace("#",""))},isReady(){return this.loaders!==!1?!this.isEmpty&&!this.hasError&&!this.isLoading:!0}},methods:{switchTab(e){k.logger.info(v.TABS_TAB_CHANGE,{data:{newTab:e}}),this.$emit("on-tab-change",e)}}},x=e=>(w("data-v-951a8820"),e=e(),L(),e),A={class:"tab-container","data-testid":"tab-container"},C={key:0,class:"tab__header"},W={class:"tab__content-container"},N={class:"flex items-center with-warnings"},O=x(()=>c("span",null," Warnings ",-1)),H={key:1};function R(e,o,s,q,_,r){const h=i("KIcon"),m=i("KTabs"),p=i("LoadingBlock"),f=i("ErrorBlock");return a(),d("div",A,[e.$slots.tabHeader&&r.isReady?(a(),d("header",C,[u(e.$slots,"tabHeader",{},void 0,!0)])):n("",!0),c("div",W,[r.isReady?(a(),l(m,{key:0,modelValue:_.tabState,"onUpdate:modelValue":o[0]||(o[0]=t=>_.tabState=t),tabs:s.tabs,onChanged:o[1]||(o[1]=t=>r.switchTab(t))},T({"warnings-anchor":b(()=>[c("span",N,[S(h,{class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"16"}),O])]),_:2},[E(r.tabsSlots,t=>({name:t,fn:b(()=>[u(e.$slots,t,{},void 0,!0)])}))]),1032,["modelValue","tabs"])):n("",!0),s.loaders===!0?(a(),d("div",H,[s.isLoading?(a(),l(p,{key:0})):s.hasError?(a(),l(f,{key:1,error:s.error},null,8,["error"])):n("",!0)])):n("",!0)])])}const G=g(V,[["render",R],["__scopeId","data-v-951a8820"]]);export{G as T};
