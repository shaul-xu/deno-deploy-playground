import{C as k}from"./Common.c3c7941e.js";import{P as g}from"./PageHeader.2c53f077.js";import{_ as h,f as v,u as L,G as B,i as w,o as t,g as x,w as C,e as y,h as c,a as e,c as o,D as _,F as u,t as i}from"./app.077ae042.js";const D={class:"links-wrapper"},F={class:"link-group"},P={class:"content"},$=["href"],N=["src"],T={class:"sitename"},V={class:"desc"},b=v({__name:"Links",setup(E){const a=L(),p=B(),d=w(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),x(k,null,{page:C(()=>[y(g,{"page-info":c(d)},null,8,["page-info"]),e("div",D,[(t(!0),o(u,null,_(c(p).links,(l,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",F,[(t(!0),o(u,null,_(l.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",P,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,N),e("span",T,i(n.sitename),1),e("div",V,i(n.desc),1)],8,$)])]))),128))])]))),128))])]),_:1}))}});var S=h(b,[["__file","Links.vue"]]);export{S as default};
