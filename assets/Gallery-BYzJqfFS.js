import{j as e,r as h,S as f,v as o}from"./index-Bj6oHZD6.js";const j=({src:r,image_modal:p,set_image_modal:l})=>{const n=()=>{l({isopen:!0,src:r})};return e.jsx("div",{style:{margin:"2%",border:"1px solid black",borderRadius:"12px",width:"29%",height:"120px"},children:e.jsx("img",{onClick:()=>n(),src:r,height:"100%",width:"100%",alt:"my image"})})},v=({title:r,images:p,set_images:l,image_modal:n,set_image_modal:d})=>{const[a,c]=h.useState(!0),x=()=>{const s=[];if(a)var t=6;else var t=2;for(let i=0;i<t;i++)s.push([o,o,o]);l(s),c(!a)};return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:r}),[p].map((s,t)=>s.map((i,m)=>e.jsx("div",{style:{display:"flex"},children:[0,1,2].map((g,u)=>e.jsx(j,{src:i[g],image_modal:n,set_image_modal:d},t*100+m*10+u))},t*100+m*10))),e.jsx("div",{onClick:()=>x(),style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"5px",marginBottom:"20px"},children:a?"더보기":"접기"})]})};export{v as default};