import{_ as d,G as u,H as _,y as m,h,e,w as t,r as o,o as f,f as y,i as C}from"./index.f2463021.js";const K={name:"EntityURLControl",components:{KClipboardProvider:u,KPop:_,KButton:m},props:{name:{type:String,default:""},mesh:{type:String,default:""},route:{type:Object,required:!1,default:null}},computed:{shareUrl(){const n=`${window.location.href.replace(window.location.hash,"")}#`,r=this.route!==null?this.route:{name:this.$route.name,params:{mesh:this.mesh},query:{ns:this.name}},{fullPath:s}=this.$router.resolve(r);return`${n}${s}`}}},$={"data-testid":"entity-url-control"},P=y(" Copy URL "),b=C("p",null,"URL copied to clipboard!",-1);function v(n,r,s,w,x,a){const c=o("KButton"),l=o("KPop"),i=o("KClipboardProvider");return f(),h("div",$,[e(i,null,{default:t(({copyToClipboard:p})=>[e(l,{placement:"bottom"},{content:t(()=>[b]),default:t(()=>[e(c,{appearance:"outline",icon:"copy",size:"small",onClick:()=>{p(a.shareUrl)}},{default:t(()=>[P]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})])}const U=d(K,[["render",v]]);export{U as E};
