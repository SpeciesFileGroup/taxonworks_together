import{a as u,o as n,b as e,e as c,f as x,h as k,u as a,F as i,r as $,c as l}from"./entry.92b8362b.js";const w={},M={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},g=c("path",{"stroke-linecap":"round",d:"M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"},null,-1),B=[g];function C(r,t){return n(),e("svg",M,B)}const L=u(w,[["render",C]]),v={},y=c("circle",{cy:"calc(100% - 5px)",cx:"2.5",r:"1",fill:"currentColor"},null,-1),H=[y];function T(r,t){return n(),e("svg",null,H)}const A=u(v,[["render",T]]),F=["innerHTML"],I=["innerHTML"],b=x({__name:"AddressMaker",props:{items:{}},setup(r){const t=r,_=k(()=>{const[o,...s]=t.items;return{username:o,host:s}});function m(){const[o,...s]=t.items;document.location.href=`mailto:${o}@${s.join(".")}`}return(o,s)=>{const p=L,d=A;return n(),e("span",{class:"text-primary cursor-pointer",onClick:m},[c("span",{innerHTML:a(_).username},null,8,F),(n(!0),e(i,null,$(a(_).host,(h,f)=>(n(),e(i,null,[f===0?(n(),l(p,{key:0,class:"h-4 inline"})):(n(),l(d,{key:1,class:"inline h-4 w-1"})),c("span",{innerHTML:h},null,8,I)],64))),256))])}}});export{b as default};