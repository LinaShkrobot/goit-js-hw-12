import{a as q,S,i as u}from"./assets/vendor-BCVp9CTC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const v="52357571-fe61b70f00f7342157d30cc5c";async function f(o,e=1){return(await q("https://pixabay.com/api/?per_page=15",{params:{key:v,q:o,page:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}const $=document.querySelector(".gallery"),h=document.querySelector(".load-btn"),g=document.querySelector(".loader");function y(o){return o.map(e=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-image"
           src="${e.webformatURL}"
           alt="${e.tags}"/>
      </a>
      <ul class="gallery-text">
         <li>
         <h3>Likes</h3>
         <p>${e.likes}</p>
         </li>
         <li>
         <h3>Views</h3>
         <p>${e.views}</p>
         </li>
         <li>
         <h3>Comments</h3>
         <p>${e.comments}</p>
         </li>
         <li>
         <h3>Downloads</h3>
         <p>${e.downloads}</p>
         </li>
      </ul>
    </li>
    `).join("")}function B(){$.innerHTML=""}function m(){g.classList.remove("hidden")}function p(){g.classList.add("hidden")}function L(){h.classList.remove("load-btn-hidden")}function l(){h.classList.add("load-btn-hidden")}function C(){return document.querySelector(".gallery-item").getBoundingClientRect().height}const d=document.querySelector(".form"),M=document.querySelector(".form-input"),b=document.querySelector(".gallery"),P=document.querySelector(".load-btn");let a=1,s="";const w=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});P.addEventListener("click",O);d.addEventListener("submit",o=>{o.preventDefault(),B(),a=1,s=M.value.trim(),m(),l(),s&&f(s,a).then(e=>{const n=e.hits;if(b.insertAdjacentHTML("beforeend",y(n)),w.refresh(),n.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}L()}).catch(e=>{console.log(e)}).finally(()=>{p(),d.reset()})});async function O(){a+=1,l(),m();try{const o=await f(s,a);console.log(o),b.insertAdjacentHTML("beforeend",y(o.hits)),w.refresh();const e=C();window.scrollBy({top:e*2,behavior:"smooth"}),L();const n=Math.ceil(o.totalHits/15);if(a>=n){u.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#00BFFF"}),l();return}}catch(o){alert(o.message)}finally{p()}}
//# sourceMappingURL=index.js.map
