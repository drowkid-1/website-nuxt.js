import{_ as u}from"./Title.vue.eaee0010.js";import l from"./Header.53f95014.js";import f from"./ContentRenderer.d6b39d7b.js";import d from"./index.f240a896.js";import g from"./Wrapper.3f2c512b.js";import{u as y}from"./asyncData.0725557f.js";import{g as x,a2 as h,af as C,o as w,j as L,w as o,b as e,i as P,a8 as R}from"./entry.4e6a175a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.d052c275.js";import"./index.a6ef77ff.js";const j=x({__name:"Renderer",props:{path:{type:String,required:!0},pageTitle:{type:String,default:""}},async setup(n){let t,a;const r=n,{data:_}=([t,a]=h(()=>y(r.path,()=>R(r.path).findOne(),"$OI1I4RU3aR")),t=await t,a(),t);return _||C("404"),(v,S)=>{const p=u,c=l,s=f,i=d,m=g;return w(),L(m,null,{default:o(()=>[e(c,null,{default:o(()=>[e(p,{text:n.pageTitle,class:"capitalize"},null,8,["text"])]),_:1}),e(i,null,{default:o(()=>[e(s,{value:P(_)},null,8,["value"])]),_:1})]),_:1})}}});export{j as default};