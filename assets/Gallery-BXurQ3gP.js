import{j as t,r as p,S as O,_ as s}from"./index-BEvCqqW8.js";const R=({src:o,image_modal:E,set_image_modal:d})=>{const _=()=>{d({isopen:!0,src:o})};return t.jsx("div",{style:{margin:"2%",border:"1px solid rgb(230, 224, 255)",borderRadius:"12px",width:"29%",height:"111.896px",overflow:"hidden"},children:t.jsx("img",{onClick:()=>{_(),document.body.classList.add("modal-open")},src:o,height:"100%",width:"100%",alt:"my image"})})},L=Object.assign({"./assets/images/1.webp":()=>s(()=>import("./1-CdwT0P1R.js"),[]),"./assets/images/10.svg":()=>s(()=>import("./10-Ck3AzeUH.js"),[]),"./assets/images/11.svg":()=>s(()=>import("./11-Ck3AzeUH.js"),[]),"./assets/images/12.svg":()=>s(()=>import("./12-Ck3AzeUH.js"),[]),"./assets/images/13.svg":()=>s(()=>import("./13-Ck3AzeUH.js"),[]),"./assets/images/14.svg":()=>s(()=>import("./14-Ck3AzeUH.js"),[]),"./assets/images/15.svg":()=>s(()=>import("./15-Ck3AzeUH.js"),[]),"./assets/images/16.svg":()=>s(()=>import("./16-Ck3AzeUH.js"),[]),"./assets/images/17.svg":()=>s(()=>import("./17-Ck3AzeUH.js"),[]),"./assets/images/18.svg":()=>s(()=>import("./18-Ck3AzeUH.js"),[]),"./assets/images/2.webp":()=>s(()=>import("./2-B5fdfgov.js"),[]),"./assets/images/3.webp":()=>s(()=>import("./3-DI1VMeke.js"),[]),"./assets/images/4.svg":()=>s(()=>import("./4-Ck3AzeUH.js"),[]),"./assets/images/5.svg":()=>s(()=>import("./5-Ck3AzeUH.js"),[]),"./assets/images/6.svg":()=>s(()=>import("./6-Ck3AzeUH.js"),[]),"./assets/images/7.svg":()=>s(()=>import("./7-Ck3AzeUH.js"),[]),"./assets/images/8.svg":()=>s(()=>import("./8-Ck3AzeUH.js"),[]),"./assets/images/9.svg":()=>s(()=>import("./9-Ck3AzeUH.js"),[])}),x=({title:o,image_modal:E,set_image_modal:d})=>{const[_,v]=p.useState(!0),[c,u]=p.useState([]),[I,P]=p.useState([]);p.useEffect(()=>{(async()=>{const n=Object.entries(L).map(([e,g])=>g().then(i=>({path:e,src:i.default}))),a=await Promise.all(n);a.sort((e,g)=>{let i=e.path.split("/"),l=g.path.split("/");return i=i[i.length-1].split(".")[0],l=l[l.length-1].split(".")[0],parseInt(i)-parseInt(l)});const r=[];for(let e=0;e<6;e++)r.push(a.slice(e*3,(e+1)*3));u(r.slice(0,2)),P(r)})()},[]);const h=()=>{const m=_?6:2;u([...I].slice(0,m)),v(!_)};return t.jsxs(t.Fragment,{children:[t.jsx(O,{children:o}),[c].map((m,n)=>m.map((a,r)=>t.jsx("div",{style:{display:"flex"},children:[0,1,2].map((e,g)=>t.jsx(R,{src:a[e].src,image_modal:E,set_image_modal:d},a[e].path))},n*100+r*10))),t.jsx("div",{onClick:()=>{h()},style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"5px",marginBottom:"20px"},children:_?"더보기":"접기"})]})};export{x as default};