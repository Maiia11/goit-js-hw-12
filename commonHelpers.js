import{i as h,S as b,a as L}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=document.querySelector(".picture-form");d.addEventListener("submit",$);const l=document.querySelector(".loader");l.style.display="none";const i=document.querySelector(".list"),f=document.querySelector(".js_load_more");f.addEventListener("click",w);let u=1,c;const S="43226276-a07a0c17e428cfffb021b9b05";async function p(a){const{data:t}=await L("https://pixabay.com/api/",{params:{key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:15}});return t}async function $(a){a.preventDefault(),c=a.target.elements.choose.value,i.innerHTML="";try{const t=await p(c);if(t.hits.length===0){i.innerHTML="",h.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"});return}i.insertAdjacentHTML("beforeend",m(t.hits)),q.refresh(),u<t.totalHits&&f.classList.replace("load_more_hidden","load_more")}catch(t){console.log(t)}finally{d.reset()}}function m(a){return a.map(({id:t,webformatURL:n,largeImageURL:o,tags:e,likes:r,views:s,comments:y,downloads:g})=>`<li data-id="${t}" class="gallery-item">
    <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${n}"
      data-source="${o}"
      alt="${e}"
      />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${r}</li>
    <li class="info-label"><span>Views</span><br>${s}</li>
    <li class="info-label"><span>Comments</span><br>${y}</li>
    <li class="info-label"><span>Downloads</span><br>${g}</li>
    </ul>
    </a>
</li>`).join("")}const q=new b(".list a",{captionsData:"alt",captionDelay:250});async function w(){l.style.display="inline-flex",u+=1;try{const a=await p(c);i.insertAdjacentHTML("beforeend",m(a.hits)),l.style.display="none"}catch(a){alert(a.message)}}
//# sourceMappingURL=commonHelpers.js.map
