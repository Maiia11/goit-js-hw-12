import{i as h,S as b,a as L}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const d=document.querySelector(".picture-form");d.addEventListener("submit",$);const n=document.querySelector(".loader");n.style.display="none";const l=document.querySelector(".list"),f=document.querySelector(".js_load_more");f.addEventListener("click",w);let u=1,c;const S="43226276-a07a0c17e428cfffb021b9b05";async function p(r){const{data:t}=await L("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:15}});return console.log(t),t}async function $(r){r.preventDefault(),c=r.target.elements.choose.value,n.style.display="inline-flex";try{const t=await p(c);if(n.style.display="none",t.hits.length===0){l.innerHTML="",h.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"});return}console.log(t.hits),l.insertAdjacentHTML("beforeend",m(t.hits)),q.refresh(),console.log(t.totalHits),u<t.totalHits&&f.classList.replace("load_more_hidden","load_more")}catch(t){console.log(t)}finally{d.reset()}}function m(r){return r.map(({id:t,webformatURL:i,largeImageURL:s,tags:e,likes:o,views:a,comments:y,downloads:g})=>`<li data-id="${t}" class="gallery-item">
    <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${i}"
      data-source="${s}"
      alt="${e}"
      />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${o}</li>
    <li class="info-label"><span>Views</span><br>${a}</li>
    <li class="info-label"><span>Comments</span><br>${y}</li>
    <li class="info-label"><span>Downloads</span><br>${g}</li>
    </ul>
    </a>
</li>`).join("")}const q=new b(".list a",{captionsData:"alt",captionDelay:250});async function w(){u+=1;try{const r=await p(c);l.insertAdjacentHTML("beforeend",m(r.hits))}catch(r){alert(r.message)}}
//# sourceMappingURL=commonHelpers.js.map
