import{a as S,S as q,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const v="52357571-fe61b70f00f7342157d30cc5c";async function h(t,e=1){return(await S("https://pixabay.com/api/?per_page=15",{params:{key:v,q:t,page:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".load-btn"),y=document.querySelector(".loader");let d=null;function C(t){return t.map(e=>`
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
    `).join("")}function L(t){m.insertAdjacentHTML("beforeend",C(t)),d?d.refresh():d=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function P(){m.innerHTML=""}function b(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}function w(){p.classList.remove("load-btn-hidden")}function f(){p.classList.add("load-btn-hidden")}function $(){return document.querySelector(".gallery-item").getBoundingClientRect().height}const g=document.querySelector(".form"),B=document.querySelector(".form-input");document.querySelector(".gallery");const M=document.querySelector(".load-btn");let a=1,s="";M.addEventListener("click",R);g.addEventListener("submit",async t=>{if(t.preventDefault(),P(),a=1,console.log(a),s=B.value.trim(),b(),f(),!s){u(),i.warning({message:"Input field cannot be empty. Please enter a search term!",position:"topRight",backgroundColor:"#FFA500",messageColor:"#fff"});return}try{const e=await h(s,a),n=e.hits;if(L(n),n.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}Math.ceil(e.totalHits/15)>1&&w()}catch(e){console.log(e)}finally{u(),g.reset()}});async function R(){a+=1,f(),b();try{const t=await h(s,a);console.log(t),L(t.hits);const e=$();if(window.scrollBy({top:e*2,behavior:"smooth"}),Math.ceil(t.totalHits/15)>a)w();else{i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#00BFFF"}),f();return}}catch(t){i.error({message:`Something went wrong: ${t.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"})}finally{u()}}
//# sourceMappingURL=index.js.map
