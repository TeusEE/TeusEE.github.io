import{j as e,r as g,S as j,v as o}from"./index-bxAb6_C8.js";const f=({src:r,image_modal:p,set_image_modal:l})=>{const a=()=>{l({isopen:!0,src:r})};return e.jsx("div",{style:{margin:"2%",border:"1px solid black",borderRadius:"12px",width:"29%",height:"120px"},children:e.jsx("img",{onClick:()=>a(),src:r,height:"100%",width:"100%",alt:"my image"})})},v=({title:r,images:p,set_images:l,image_modal:a,set_image_modal:m})=>{const[n,c]=g.useState(!0),x=()=>{const s=[];if(n)var t=6;else var t=2;for(let i=0;i<t;i++)s.push([o,o,o]);l(s),c(!n)};return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:r}),[p].map((s,t)=>s.map((i,d)=>e.jsx("div",{style:{display:"flex"},children:[0,1,2].map((u,h)=>e.jsx(f,{src:i[u],image_modal:a,set_image_modal:m},t*100+d*10+h))},t*100+d*10))),e.jsx("button",{onClick:()=>x(),children:n?"더보기":"접기"})]})};export{v as default};