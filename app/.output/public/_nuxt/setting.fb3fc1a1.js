import{_ as de}from"./AlertBanner.vue.2dbbe56e.js";import ce from"./index.f240a896.js";import{_ as pe}from"./Title.vue.eaee0010.js";import me from"./Header.53f95014.js";import{o as b,H as j,T as fe,t as Z,N as J,u as q}from"./env.469d6536.js";import{a as ve,f as ee,O as C,b as _e,o as A,T as D,m as be,P as O,N as k}from"./hidden.e63812dc.js";import{g as B,r as y,l as H,m as g,n as Q,q as G,s as xe,v as he,F as te,x as ae,y as W,u as ge,o as X,j as ye,w as u,b as a,a as f,i as P,c as we,z as Te,A as E,d as Ie,B as Y,t as U}from"./entry.4e6a175a.js";import{_ as Pe}from"./Title.vue.d843a5f6.js";import{_ as Se}from"./TextInput.vue.3aba9b24.js";import $e from"./Content.4bbcbb7b.js";import{_ as Ae}from"./index.vue.e6d90474.js";import{_ as ke}from"./index.vue.53c632b7.js";import Fe from"./Footer.72f26d6b.js";import{_ as Ve}from"./index.vue.9c168b2e.js";import Le from"./Icon.69a21c52.js";import{_ as ze}from"./Switch.vue.da9dd5ad.js";import Be from"./Wrapper.3f2c512b.js";import{u as Oe}from"./use-awesome-screen.2a3734e4.js";import"./transition.8d882135.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./use-sync-props.04239caa.js";import"./nuxt-link.caad5b4d.js";function Ce(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(m=>setTimeout(()=>{throw m}))}let Ee=B({props:{onFocus:{type:Function,required:!0}},setup(t){let m=y(!0);return()=>m.value?H(ee,{as:"button",type:"button",features:ve.Focusable,onFocus(v){v.preventDefault();let p,r=50;function l(){var i;if(r--<=0){p&&cancelAnimationFrame(p);return}if((i=t.onFocus)!=null&&i.call(t)){m.value=!1,cancelAnimationFrame(p);return}p=requestAnimationFrame(l)}p=requestAnimationFrame(l)}}):null}});var je=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(je||{}),Ne=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(Ne||{});let le=Symbol("TabsContext");function N(t){let m=W(le,null);if(m===null){let v=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,N),v}return m}let K=Symbol("TabsSSRContext"),De=B({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:m,attrs:v,emit:p}){var r;let l=y((r=t.selectedIndex)!=null?r:t.defaultIndex),i=y([]),_=y([]),w=g(()=>t.selectedIndex!==null),d=g(()=>w.value?t.selectedIndex:l.value);function o(n){var e;let s=C(c.tabs.value,b),x=C(c.panels.value,b),h=s.filter(T=>{var $;return!(($=b(T))!=null&&$.hasAttribute("disabled"))});if(n<0||n>s.length-1){let T=q(l.value===null?0:Math.sign(n-l.value),{[-1]:()=>1,[0]:()=>q(Math.sign(n),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});l.value=q(T,{[0]:()=>s.indexOf(h[0]),[1]:()=>s.indexOf(h[h.length-1])}),c.tabs.value=s,c.panels.value=x}else{let T=s.slice(0,n),$=[...s.slice(n),...T].find(z=>h.includes(z));if(!$)return;let L=(e=s.indexOf($))!=null?e:c.selectedIndex.value;L===-1&&(L=c.selectedIndex.value),l.value=L,c.tabs.value=s,c.panels.value=x}}let c={selectedIndex:g(()=>{var n,e;return(e=(n=l.value)!=null?n:t.defaultIndex)!=null?e:null}),orientation:g(()=>t.vertical?"vertical":"horizontal"),activation:g(()=>t.manual?"manual":"auto"),tabs:i,panels:_,setSelectedIndex(n){d.value!==n&&p("change",n),w.value||o(n)},registerTab(n){var e;if(i.value.includes(n))return;let s=i.value[l.value];i.value.push(n),i.value=C(i.value,b);let x=(e=i.value.indexOf(s))!=null?e:l.value;x!==-1&&(l.value=x)},unregisterTab(n){let e=i.value.indexOf(n);e!==-1&&i.value.splice(e,1)},registerPanel(n){_.value.includes(n)||(_.value.push(n),_.value=C(_.value,b))},unregisterPanel(n){let e=_.value.indexOf(n);e!==-1&&_.value.splice(e,1)}};Q(le,c);let S=y({tabs:[],panels:[]}),F=y(!1);G(()=>{F.value=!0}),Q(K,g(()=>F.value?null:S.value));let V=g(()=>t.selectedIndex);return G(()=>{xe([V],()=>{var n;return o((n=t.selectedIndex)!=null?n:t.defaultIndex)},{immediate:!0})}),he(()=>{if(!w.value||d.value==null||c.tabs.value.length<=0)return;let n=C(c.tabs.value,b);n.some((e,s)=>b(c.tabs.value[s])!==b(e))&&c.setSelectedIndex(n.findIndex(e=>b(e)===b(c.tabs.value[d.value])))}),()=>{let n={selectedIndex:l.value};return H(te,[i.value.length<=0&&H(Ee,{onFocus:()=>{for(let e of i.value){let s=b(e);if((s==null?void 0:s.tabIndex)===0)return s.focus(),!0}return!1}}),j({theirProps:{...v,...fe(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:n,slots:m,attrs:v,name:"TabGroup"})])}}}),Ue=B({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:m,slots:v}){let p=N("TabList");return()=>{let r={selectedIndex:p.selectedIndex.value},l={role:"tablist","aria-orientation":p.orientation.value};return j({ourProps:l,theirProps:t,slot:r,attrs:m,slots:v,name:"TabList"})}}}),qe=B({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Z()}`}},setup(t,{attrs:m,slots:v,expose:p}){let r=N("Tab"),l=y(null);p({el:l,$el:l}),G(()=>r.registerTab(l)),ae(()=>r.unregisterTab(l));let i=W(K),_=g(()=>{if(i.value){let e=i.value.tabs.indexOf(t.id);return e===-1?i.value.tabs.push(t.id)-1:e}return-1}),w=g(()=>{let e=r.tabs.value.indexOf(l);return e===-1?_.value:e}),d=g(()=>w.value===r.selectedIndex.value);function o(e){var s;let x=e();if(x===D.Success&&r.activation.value==="auto"){let h=(s=be(l))==null?void 0:s.activeElement,T=r.tabs.value.findIndex($=>b($)===h);T!==-1&&r.setSelectedIndex(T)}return x}function c(e){let s=r.tabs.value.map(x=>b(x)).filter(Boolean);if(e.key===A.Space||e.key===A.Enter){e.preventDefault(),e.stopPropagation(),r.setSelectedIndex(w.value);return}switch(e.key){case A.Home:case A.PageUp:return e.preventDefault(),e.stopPropagation(),o(()=>O(s,k.First));case A.End:case A.PageDown:return e.preventDefault(),e.stopPropagation(),o(()=>O(s,k.Last))}if(o(()=>q(r.orientation.value,{vertical(){return e.key===A.ArrowUp?O(s,k.Previous|k.WrapAround):e.key===A.ArrowDown?O(s,k.Next|k.WrapAround):D.Error},horizontal(){return e.key===A.ArrowLeft?O(s,k.Previous|k.WrapAround):e.key===A.ArrowRight?O(s,k.Next|k.WrapAround):D.Error}}))===D.Success)return e.preventDefault()}let S=y(!1);function F(){var e;S.value||(S.value=!0,!t.disabled&&((e=b(l))==null||e.focus(),r.setSelectedIndex(w.value),Ce(()=>{S.value=!1})))}function V(e){e.preventDefault()}let n=_e(g(()=>({as:t.as,type:m.type})),l);return()=>{var e;let s={selected:d.value},{id:x,...h}=t,T={ref:l,onKeydown:c,onMousedown:V,onClick:F,id:x,role:"tab",type:n.value,"aria-controls":(e=b(r.panels.value[w.value]))==null?void 0:e.id,"aria-selected":d.value,tabIndex:d.value?0:-1,disabled:t.disabled?!0:void 0};return j({ourProps:T,theirProps:h,slot:s,attrs:m,slots:v,name:"Tab"})}}}),He=B({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:m,attrs:v}){let p=N("TabPanels");return()=>{let r={selectedIndex:p.selectedIndex.value};return j({theirProps:t,ourProps:{},slot:r,attrs:v,slots:m,name:"TabPanels"})}}}),Ge=B({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Z()}`},tabIndex:{type:Number,default:0}},setup(t,{attrs:m,slots:v,expose:p}){let r=N("TabPanel"),l=y(null);p({el:l,$el:l}),G(()=>r.registerPanel(l)),ae(()=>r.unregisterPanel(l));let i=W(K),_=g(()=>{if(i.value){let o=i.value.panels.indexOf(t.id);return o===-1?i.value.panels.push(t.id)-1:o}return-1}),w=g(()=>{let o=r.panels.value.indexOf(l);return o===-1?_.value:o}),d=g(()=>w.value===r.selectedIndex.value);return()=>{var o;let c={selected:d.value},{id:S,tabIndex:F,...V}=t,n={ref:l,id:S,role:"tabpanel","aria-labelledby":(o=b(r.tabs.value[w.value]))==null?void 0:o.id,tabIndex:d.value?F:-1};return!d.value&&t.unmount&&!t.static?H(ee,{as:"span",...n}):j({ourProps:n,theirProps:V,slot:c,attrs:m,slots:v,features:J.Static|J.RenderStrategy,visible:d.value,name:"TabPanel"})}}});const Me={class:"mb-6"},Re=f("p",{class:"mb-2"}," type your github username and click the button to validate. ",-1),We={class:"flex"},Ke=f("span",{class:"flex-1 px-4 py-2"},"github.com/",-1),Je=f("p",{class:"mb-2"},"This is your bot ID.",-1),Qe={class:"flex"},Xe=f("span",null,"Copy",-1),Ye=f("p",null,"Used when interacting with the bot.",-1),Ze=f("p",{class:"mb-2"},"toggle enable to remove the red border",-1),et={class:"flex"},tt={class:"capitalize"},at=f("p",null,"if enable we will secure your comments from spam",-1),lt=f("p",{class:"mb-2"}," you can enable advanced settings to change the settings ",-1),nt={class:"flex"},st={class:"capitalize"},ot=f("p",{class:"mb-2"}," if no index file is present within a directory, the directory contents will be displayed. ",-1),rt={class:"flex"},ut={class:"capitalize"},Vt=B({__name:"setting",setup(t){const m=Oe();ge({title:"Settings"});const v=()=>{const d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let o="";for(let c=0;c<255;c++)o+=d.charAt(Math.floor(Math.random()*d.length));return o},p=y("viandwi24"),r=y(v()),l=y(!1),i=y(!1),_=y(!1),w=async()=>{try{const d=await fetch(`https://api.github.com/users/${p.value}`);if(d.status!==200)throw new Error(`error when fetching username : ${d.statusText} (${d.status})`);const o=await d.json();alert(`Found Accout Name ${o.name} with id : ${o.id}`)}catch(d){alert(d)}};return(d,o)=>{const c=de,S=ce,F=pe,V=me,n=qe,e=Ue,s=Pe,x=Se,h=$e,T=Ae,$=ke,L=Fe,z=Ve,ne=Le,M=Ge,R=ze,se=He,oe=De,re=Be;return X(),ye(re,null,{default:u(()=>[a(S,{class:"mb-0"},{default:u(()=>[a(c,{type:"success",title:"This is a page for testing purposes",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",class:"mb-6"})]),_:1}),a(V,null,{default:u(()=>[a(F,{text:"Setting",class:"capitalize"})]),_:1}),a(S,null,{default:u(()=>[f("div",Me,[a(oe,{as:"div",class:"flex flex-col md:flex-row md:space-x-4",vertical:P(m).higherThan("md")},{default:u(()=>[a(e,{class:"w-full md:w-1/6 flex md:flex-col rounded-lg mb-2"},{default:u(()=>[(X(),we(te,null,Te(["General","Protection","Advanced"],(I,ue)=>a(n,{key:ue,as:"template"},{default:u(({selected:ie})=>[f("button",{class:Y(["md:w-full text-left px-3 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-white/[0.12] dark:hover:text-white",ie?"font-extrabold":"text-gray-800 dark:text-gray-400"])},U(I),3)]),_:2},1024)),64))]),_:1}),a(se,{class:"flex-1"},{default:u(()=>[a(M,null,{default:u(()=>[a(z,{class:"mb-6"},{default:u(()=>[a(h,null,{default:u(()=>[a(s,{class:"capitalize",text:"validate github profile"}),Re,f("div",We,[a(x,{modelValue:P(p),"onUpdate:modelValue":o[0]||(o[0]=I=>E(p)?p.value=I:null),class:"w-full md:w-1/3"},{"prefix-disabled":u(()=>[Ke]),_:1},8,["modelValue"])])]),_:1}),a(L,{class:"flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between"},{default:u(()=>[f("p",null,[Ie(" Learn more about "),a(T,{class:"underline font-bold capitalize",text:"github users api",href:"https://docs.github.com/en/rest/users/users#get-a-user"})]),a($,{class:"capitalize",size:"sm",type:"opposite",text:"validate",onClick:w})]),_:1})]),_:1}),a(z,{class:"mb-4"},{default:u(()=>[a(h,null,{default:u(()=>[a(s,{class:"capitalize",text:"bot id"}),Je,f("div",Qe,[a(x,{modelValue:P(r),"onUpdate:modelValue":o[1]||(o[1]=I=>E(r)?r.value=I:null),class:"w-full md:w-1/3"},{suffix:u(()=>[a($,{type:"opposite",class:"flex space-x-1 border-none"},{default:u(()=>[a(ne,{name:"ic:baseline-content-copy"}),Xe]),_:1})]),_:1},8,["modelValue"])])]),_:1}),a(L,{class:"justify-between"},{default:u(()=>[Ye]),_:1})]),_:1})]),_:1}),a(M,null,{default:u(()=>[a(z,{class:Y({"mb-4":!0,"border-red-500 dark:border-red-500":!P(l)})},{default:u(()=>[a(h,null,{default:u(()=>[a(s,{class:"capitalize",text:"spam protection"}),Ze,f("div",et,[a(R,{modelValue:P(l),"onUpdate:modelValue":o[2]||(o[2]=I=>E(l)?l.value=I:null)},{default:u(()=>[f("span",tt,U(P(l)?"enabled":"disabled"),1)]),_:1},8,["modelValue"])])]),_:1}),a(L,{class:"justify-between"},{default:u(()=>[at]),_:1})]),_:1},8,["class"])]),_:1}),a(M,null,{default:u(()=>[a(z,{class:"mb-6"},{default:u(()=>[a(h,null,{default:u(()=>[a(s,{class:"capitalize",text:"enable advanced settings"}),lt,f("div",nt,[a(R,{modelValue:P(_),"onUpdate:modelValue":o[3]||(o[3]=I=>E(_)?_.value=I:null)},{default:u(()=>[f("span",st,U(P(_)?"enabled":"disabled"),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1}),a(z,{class:"mb-6",disabled:!P(_)},{default:u(()=>[a(h,null,{default:u(()=>[a(s,{class:"capitalize",text:"directory listing"}),ot,f("div",rt,[a(R,{modelValue:P(i),"onUpdate:modelValue":o[4]||(o[4]=I=>E(i)?i.value=I:null),on:""},{default:u(()=>[f("span",ut,U(P(i)?"enabled":"disabled"),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["vertical"])])]),_:1})]),_:1})}}});export{Vt as default};