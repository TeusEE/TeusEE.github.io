import{j as e,r as h,S as y,v as o}from"./index-BQ1EeNnE.js";const f=({src:s,image_modal:d,set_image_modal:a})=>{const l=()=>{a({isopen:!0,src:s})};return e.jsx("div",{style:{margin:"2%",border:"1px solid black",borderRadius:"12px",width:"29%",height:"120px"},children:e.jsx("img",{onClick:()=>{l(),document.body.classList.add("modal-open")},src:s,height:"100%",width:"100%",alt:"my image"})})},v=({title:s,images:d,set_images:a,image_modal:l,set_image_modal:p})=>{const[n,c]=h.useState(!0),x=()=>{const r=[];if(n)var t=6;else var t=2;for(let i=0;i<t;i++)r.push([o,o,o]);a(r),c(!n)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:s}),[d].map((r,t)=>r.map((i,m)=>e.jsx("div",{style:{display:"flex"},children:[0,1,2].map((u,g)=>e.jsx(f,{src:i[u],image_modal:l,set_image_modal:p},t*100+m*10+g))},t*100+m*10))),e.jsx("div",{onClick:()=>{x()},style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"5px",marginBottom:"20px"},children:n?"더보기":"접기"})]})};export{v as default};
