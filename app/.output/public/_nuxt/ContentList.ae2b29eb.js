import n from"./ContentQuery.b4cdc709.js";import{g as l,S as c,l as f}from"./entry.4e6a175a.js";import"./asyncData.0725557f.js";const r=(u,t)=>f("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),_=l({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=c(),{path:p,query:a}=u,m={...a||{},path:p||(a==null?void 0:a.path)||"/"};return f(n,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>r("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{_ as default};