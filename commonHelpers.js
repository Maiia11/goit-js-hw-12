import{i as f,S as L,a as S}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const p=document.querySelector(".picture-form");p.addEventListener("submit",q);const c=document.querySelector(".loader");c.style.display="none";const n=document.querySelector(".list"),u=document.querySelector(".js_load_more");u.addEventListener("click",w);let l=33,d;const _="43226276-a07a0c17e428cfffb021b9b05";async function m(r){const{data:t}=await S("https://pixabay.com/api/",{params:{key:_,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:15}});return t}async function q(r){r.preventDefault(),d=r.target.elements.choose.value,n.innerHTML="";try{const t=await m(d);if(t.hits.length===0){n.innerHTML="",f.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"});return}n.insertAdjacentHTML("beforeend",y(t.hits)),h.refresh(),l<t.totalHits&&u.classList.replace("load_more_hidden","load_more")}catch(t){console.log(t)}finally{p.reset()}}function y(r){return r.map(({id:t,webformatURL:a,largeImageURL:s,tags:e,likes:o,views:i,comments:g,downloads:b})=>`<li data-id="${t}" class="gallery-item">
    <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${a}"
      data-source="${s}"
      alt="${e}"
      />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${o}</li>
    <li class="info-label"><span>Views</span><br>${i}</li>
    <li class="info-label"><span>Comments</span><br>${g}</li>
    <li class="info-label"><span>Downloads</span><br>${b}</li>
    </ul>
    </a>
</li>`).join("")}const h=new L(".list a",{captionsData:"alt",captionDelay:250});async function w(){c.style.display="inline-flex",l+=1;const t=document.querySelector(".gallery-item").getBoundingClientRect().height;try{const a=await m(d);n.insertAdjacentHTML("beforeend",y(a.hits)),h.refresh(),c.style.display="none",window.scrollBy({top:t*2,left:0,behavior:"smooth"});const s=Math.ceil(a.totalHits/15);l>=s&&(u.classList.replace("load_more","load_more_hidden"),f.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"}))}catch(a){alert(a.message)}}
//# sourceMappingURL=commonHelpers.js.map
