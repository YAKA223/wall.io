import{_ as n,r as u,o as v,a as _,c as r,b as h,u as g,d as x,e as y,f as t,g as c,w as i,h as p,p as B,i as I,j as w,k as $}from"./index-efa79591.js";import{M as l}from"./MyButton-12512baf.js";const f=""+new URL("favicon-db74ab0b.ico",import.meta.url).href;const k=h('<div class="foot-bar-left" data-v-f7ddb8c7><div class="logo" data-v-f7ddb8c7><img class="logo-img" src="'+f+'" data-v-f7ddb8c7><p class="logo-text" data-v-f7ddb8c7>留言墙</p></div></div><div class="foot-bar-centre" data-v-f7ddb8c7></div><div class="foot-bar-right" data-v-f7ddb8c7></div>',3),F=[k],N={__name:"FootBar",props:{fn:{type:Function}},setup(e){const o=e,s=u(null);return v(()=>{o.fn(s)}),(d,a)=>(_(),r("div",{class:"foot-bar-box",ref_key:"foot",ref:s},F,512))}},S=n(N,[["__scopeId","data-v-f7ddb8c7"]]);const m=e=>(B("data-v-b723e6dd"),e=e(),I(),e),T={class:"top-bar"},V=m(()=>t("div",{class:"top-bar-logo"},[t("img",{src:f,class:"logo-img"}),t("p",{class:"logo-name"},"留言墙")],-1)),M={class:"top-bar-menu"},R=m(()=>t("div",{class:"top-bar-user"},[t("div",{class:"user-head"})],-1)),C={__name:"TopBar",setup(e){const o=g();x();const s=y(()=>o.query.id);return(d,a)=>(_(),r("div",T,[V,t("div",M,[c(l,{nom:s.value==0?"cprimary":"csecondary",class:"menu-msg"},{default:i(()=>[p("留言墙")]),_:1},8,["nom"]),c(l,{nom:s.value==1?"cprimary":"csecondary",style:{cursor:"no-drop"}},{default:i(()=>[p("照片墙")]),_:1},8,["nom"])]),R]))}},j=n(C,[["__scopeId","data-v-b723e6dd"]]);const q={class:"index"},E={__name:"index",setup(e){const o=u(30);w("addheight",o);const s=new IntersectionObserver(a=>{a[0].isIntersecting?o.value=100:o.value=30},{threshold:0}),d=a=>{s.observe(a.value)};return v(()=>{}),(a,H)=>{const b=$("router-view");return _(),r("div",q,[c(j),c(b),t("div",null,[c(S,{fn:d})])])}}},U=n(E,[["__scopeId","data-v-27539a00"]]);export{U as default};
