import{i as u,S as L,a as S}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p=document.querySelector(".picture-form");p.addEventListener("submit",$);const c=document.querySelector(".loader");c.style.display="none";const i=document.querySelector(".list"),f=document.querySelector(".js_load_more");f.addEventListener("click",q);let n=33,d;const _="43226276-a07a0c17e428cfffb021b9b05";async function m(o){const{data:t}=await S("https://pixabay.com/api/",{params:{key:_,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:15}});return t}async function $(o){o.preventDefault(),d=o.target.elements.choose.value,i.innerHTML="";try{const t=await m(d);if(t.hits.length===0){i.innerHTML="",u.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"});return}i.insertAdjacentHTML("beforeend",y(t.hits)),h.refresh(),n<t.totalHits&&f.classList.replace("load_more_hidden","load_more")}catch(t){console.log(t)}finally{p.reset()}}function y(o){return o.map(({id:t,webformatURL:l,largeImageURL:a,tags:e,likes:r,views:s,comments:g,downloads:b})=>`<li data-id="${t}" class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${l}"
      data-source="${a}"
      alt="${e}"
      />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${r}</li>
    <li class="info-label"><span>Views</span><br>${s}</li>
    <li class="info-label"><span>Comments</span><br>${g}</li>
    <li class="info-label"><span>Downloads</span><br>${b}</li>
    </ul>
    </a>
</li>`).join("")}const h=new L(".list a",{captionsData:"alt",captionDelay:250});async function q(){c.style.display="inline-flex",n+=1;try{const o=await m(d);console.log(o.totalHits),i.insertAdjacentHTML("beforeend",y(o.hits)),h.refresh(),c.style.display="none";const t=Math.ceil(o.totalHits/15);n>=t&&(f.classList.replace("load_more","load_more_hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"}))}catch(o){alert(o.message)}}
//# sourceMappingURL=commonHelpers.js.map
