import{S as l,N as d,P as p,A as u}from"./assets/vendor-MMQnTymT.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();console.log("api.js");console.log("utils.js");console.log("bestsellers");console.log("dessert.js");console.log("modal");console.log("about.js");console.log("feedback.js");const i=document.getElementById("reviews-container"),c=document.getElementById("loader"),f=document.getElementById("toast-container");function m(n){const s=document.createElement("div");s.className="toast",s.textContent=n,f.appendChild(s),setTimeout(()=>s.remove(),4e3)}async function g(){c.classList.remove("hidden");try{const n=await fetch("https://deserts-store.b.goit.study/api/feedbacks");if(!n.ok)throw new Error("Помилка сервера при отриманні відгуків");const o=((await n.json()).feedbacks||[]).slice(0,10);w(o),h()}catch{m("Не вдалося завантажити дані. Повторіть спробу пізніше.")}finally{c.classList.add("hidden")}}function w(n){i.innerHTML="",n.forEach(s=>{const r=s.rate||5,e=(Math.round(r*2)/2).toFixed(1).replace(".",""),t=document.createElement("div");t.className="swiper-slide",t.innerHTML=`
            <div class="review-card">
                <div class="stars-wrapper">
                    <div class="star-rating rating-${e}">
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                    </div>
                </div>
                <p class="review-text">"${s.description||""}"</p>
                <h4 class="client-name">${s.author||"Гість"}</h4>
            </div>
        `,i.appendChild(t)})}function h(){new l(".reviews-swiper",{modules:[d,p],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1440:{slidesPerView:3}}})}document.addEventListener("DOMContentLoaded",g);new u(".accordion-container",{duration:400,showMultiple:!1});
//# sourceMappingURL=index.js.map
