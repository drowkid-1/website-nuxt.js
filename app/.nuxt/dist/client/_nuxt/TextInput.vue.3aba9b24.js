import{g as z,S as B,H as m,m as s,o as l,c as d,i as e,B as r,G as u,I as c,a as g,Z as w,$ as _,A as C}from"./entry.4e6a175a.js";import{u as E}from"./use-sync-props.04239caa.js";const P={class:r("text-input-container relative flex")},D={class:"text-input-wrapper relative flex flex-1"},H=["type","placeholder"],A=z({__name:"TextInput",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},size:{type:String,default:"md"},type:{type:String,default:"default"}},emits:["update:modelValue"],setup(a,{emit:S}){const n=a,t=B(),f=m({xs:"px-1 py-0.5",sm:"px-2 py-1.5",md:"px-4 py-2",lg:"px-5 py-3"}),y=m({xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}),i=E(n,"modelValue",S),b=s(()=>typeof t.prefix<"u"||typeof t["prefix-disabled"]<"u"),v=s(()=>typeof t.suffix<"u"),o=s(()=>"border-gray-900/10 dark:border-gray-50/[0.2]"),$=s(()=>"dark:focus:border-white focus:border-gray-900"),h=s(()=>f[n.size]||f.md),k=s(()=>y[n.size]||y.md);return(p,x)=>(l(),d("div",P,[e(t)["prefix-disabled"]?(l(),d("div",{key:0,class:r(`duration-300 transition-colors flex rounded-l bg-gray-100 dark:bg-gray-800 text-gray-500 border ${e(o)}`)},[u(p.$slots,"prefix-disabled")],2)):c("",!0),e(t).prefix?(l(),d("div",{key:1,class:r(`flex rounded-l border ${e(o)}`)},[u(p.$slots,"prefix")],2)):c("",!0),g("div",D,[w(g("input",{"onUpdate:modelValue":x[0]||(x[0]=V=>C(i)?i.value=V:null),class:r(`duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border ${e(b)?"":"rounded-l"} ${e(v)?"":"rounded-r"} ${e(o)} ${e($)} ${e(h)} ${e(k)}`),type:a.type,placeholder:a.placeholder},null,10,H),[[_,e(i)]])]),e(t).suffix?(l(),d("div",{key:2,class:r(`flex rounded-r border ${e(o)}`)},[u(p.$slots,"suffix")],2)):c("",!0)]))}});export{A as _};
