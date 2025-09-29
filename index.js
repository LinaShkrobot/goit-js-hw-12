import{a as S,S as q,i as s}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))g(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&g(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function g(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const v="52357571-fe61b70f00f7342157d30cc5c";async function m(t,e=1){return(await S("https://pixabay.com/api/?per_page=15",{params:{key:v,q:t,page:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".load-btn"),L=document.querySelector(".loader");let c=null;function C(t){return t.map(e=>`
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
    `).join("")}function b(t){p.insertAdjacentHTML("beforeend",C(t)),c?c.refresh():c=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function P(){p.innerHTML=""}function w(){L.classList.remove("hidden")}function d(){L.classList.add("hidden")}function u(){y.classList.remove("load-btn-hidden")}function f(){y.classList.add("load-btn-hidden")}function $(){return document.querySelector(".gallery-item").getBoundingClientRect().height}const h=document.querySelector(".form"),B=document.querySelector(".form-input");document.querySelector(".gallery");const M=document.querySelector(".load-btn");let i=1,a="";M.addEventListener("click",R);h.addEventListener("submit",async t=>{if(t.preventDefault(),P(),i=1,a=B.value.trim(),w(),f(),!a){d(),s.warning({message:"Input field cannot be empty. Please enter a search term!",position:"topRight",backgroundColor:"#FFA500",messageColor:"#fff"});return}try{const n=(await m(a,i)).hits;if(b(n),n.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}u()}catch(e){console.log(e)}finally{d(),h.reset()}});async function R(){i+=1,f(),w();try{const t=await m(a,i);console.log(t),b(t.hits);const e=$();if(window.scrollBy({top:e*2,behavior:"smooth"}),u(),Math.ceil(t.totalHits/15)>1)u();else{s.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#00BFFF"}),f();return}}catch(t){s.error({message:`Something went wrong: ${t.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"})}finally{d()}}
//# sourceMappingURL=index.js.map
