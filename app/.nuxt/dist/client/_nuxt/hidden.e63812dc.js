import{o as f,a as E,u as b,H as y}from"./env.469d6536.js";import{r as N,q as A,v as F,g}from"./entry.4e6a175a.js";var x=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(x||{});function p(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function K(e,t){let n=N(p(e.value.type,e.value.as));return A(()=>{n.value=p(e.value.type,e.value.as)}),F(()=>{var r;n.value||f(t)&&f(t)instanceof HTMLButtonElement&&!((r=f(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function P(e){if(E.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=f(e);if(t)return t.ownerDocument}return document}let m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),L=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(L||{}),O=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(O||{});function D(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(m)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var M=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(M||{});function R(e,t=0){var n;return e===((n=P(e))==null?void 0:n.body)?!1:b(t,{[0](){return e.matches(m)},[1](){let r=e;for(;r!==null;){if(r.matches(m))return!0;r=r.parentElement}return!1}})}var I=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(I||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let T=["textarea","input"].join(",");function H(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,T))!=null?n:!1}function U(e,t=n=>n){return e.slice().sort((n,r)=>{let u=t(n),a=t(r);if(u===null||a===null)return 0;let s=u.compareDocumentPosition(a);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function G(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){var a;let s=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?n?U(e):e:D(e);u.length>0&&o.length>1&&(o=o.filter(i=>!u.includes(i))),r=r??s.activeElement;let v=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),w=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=t&32?{preventScroll:!0}:{},c=0,d=o.length,l;do{if(c>=d||c+d<=0)return 0;let i=w+c;if(t&16)i=(i+d)%d;else{if(i<0)return 3;if(i>=d)return 1}l=o[i],l==null||l.focus(h),c+=v}while(l!==s.activeElement);return t&6&&H(l)&&l.select(),2}var _=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(_||{});let W=g({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...u}=e,a={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return y({ourProps:a,theirProps:u,slot:{},attrs:n,slots:t,name:"Hidden"})}}});export{D as E,S as N,U as O,G as P,L as T,_ as a,K as b,W as f,M as h,P as m,x as o,R as w};
