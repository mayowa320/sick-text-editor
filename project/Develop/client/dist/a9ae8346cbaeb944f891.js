import{Workbox}from"workbox-window";import Editor from"./editor";import"./database";import"../css/style.css";const main=document.querySelector("#main");main.innerHTML="";const loadSpinner=()=>{const r=document.createElement("div");r.classList.add("spinner"),r.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',main.appendChild(r)},editor=new Editor;void 0===editor&&loadSpinner(),"serviceWorker"in navigator?new Workbox("/src-sw.js").register():console.error("Service workers are not supported in this browser.");