import{j as r}from"./index-CSDZxSBd.js";const n=({src:i})=>{const o=t=>{navigator.clipboard.writeText(t),alert("계좌가 복사되었습니다.")},e={mother:["조민경","국민은행","11111111111111"],father:["안동열","신한은행","22222222222222"],me:["안지연","수협은행","33333333333333"]};return i==="M"&&(e.mother=["유병희","국민은행","11111111111111"],e.father=["이종면","신한은행","22222222222222"],e.me=["이태우","국민은행","39280104181777"]),r.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},children:["mother","father","me"].map(t=>r.jsxs("div",{onClick:()=>o(e[t][2]),style:{border:"1px solid black",borderRadius:"12px",padding:"12px",margin:"12px"},children:[e[t][0],r.jsx("br",{}),e[t][1]," ",e[t][2]]}))})};export{n as default};