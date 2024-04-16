import{a as L,i as f,S as _}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function p(a){return a.map(({id:t,webformatURL:r,largeImageURL:s,tags:e,likes:o,views:l,comments:g,downloads:b})=>`<li data-id="${t}" class="gallery-item">
    <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${s}"
      alt="${e}"
      />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${o}</li>
    <li class="info-label"><span>Views</span><br>${l}</li>
    <li class="info-label"><span>Comments</span><br>${g}</li>
    <li class="info-label"><span>Downloads</span><br>${b}</li>
    </ul>
    </a>
</li>`).join("")}const S="43226276-a07a0c17e428cfffb021b9b05";async function m(a,t){const{data:r}=await L("https://pixabay.com/api/",{params:{key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return r}const h=document.querySelector(".picture-form");h.addEventListener("submit",q);const d=document.querySelector(".loader");d.style.display="none";const c=document.querySelector(".list"),n=document.querySelector(".js_load_more");n.addEventListener("click",w);let i=1,u;async function q(a){a.preventDefault(),n.classList.replace("load_more","load_more_hidden"),u=a.target.elements.choose.value,c.innerHTML="",i=1;try{const t=await m(u,i);if(t.hits.length===0){c.innerHTML="",f.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"});return}c.insertAdjacentHTML("beforeend",p(t.hits)),y.refresh(),i<t.totalHits&&n.classList.replace("load_more_hidden","load_more"),t.hits.length===0&&n.classList.replace("load_more","load_more_hidden")}catch(t){console.log(t)}finally{h.reset()}}const y=new _(".list a",{captionsData:"alt",captionDelay:250});async function w(){d.style.display="inline-flex",i+=1;const t=document.querySelector(".gallery-item").getBoundingClientRect().height;try{const r=await m(u,i);c.insertAdjacentHTML("beforeend",p(r.hits)),y.refresh(),d.style.display="none",window.scrollBy({top:t*2,left:0,behavior:"smooth"});const s=Math.ceil(r.totalHits/15);i>=s&&(n.classList.replace("load_more","load_more_hidden"),f.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#09f;",messageColor:"#2e2f42",timeout:2e3,position:"topRight"}))}catch(r){alert(r.message)}}
//# sourceMappingURL=commonHelpers.js.map
