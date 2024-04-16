import{i as f,S as p,a as d}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".picture-form");m.addEventListener("submit",h);const n=document.querySelector(".loader");n.style.display="none";const l=document.querySelector(".list"),y="43226276-a07a0c17e428cfffb021b9b05";async function g(s){const{data:r}=await d("https://pixabay.com/api/",{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(r),r}jj;async function h(s){s.preventDefault();const r=s.target.elements.choose.value;n.style.display="inline-flex";try{const o=await g(r);if(n.style.display="none",o.hits.length===0){l.innerHTML="",f.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"});return}l.innerHTML=b(o.hits),L.refresh()}catch(o){console.log(o)}}function b(s){return s.map(({id:r,webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:c,downloads:u})=>`<li data-id="${r}" class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${o}"
      data-source="${a}"
      alt="${e}"
      />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${t}</li>
    <li class="info-label"><span>Views</span><br>${i}</li>
    <li class="info-label"><span>Comments</span><br>${c}</li>
    <li class="info-label"><span>Downloads</span><br>${u}</li>
    </ul>
    </a>
</li>`).join("")}const L=new p(".list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
