import{a as $,S as v,b as E,c as y,d as S,N as x,P as M,A as k}from"./assets/vendor-lagkIt2Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();console.log("bestsellers");$.defaults.baseURL="https://deserts-store.b.goit.study/api";async function b(a,e={}){try{return(await $(a,e)).data}catch(t){console.log(t)}}async function q(a){const e=new v({lines:12,length:6,width:4,radius:8,color:"#e39622"}),t=E.create(`
        <div class="dessert-loader" style="position: relative; min-height: 200px;"></div>
    `,{closable:!1,className:"dessert-modal-wrapper",onClose:()=>{document.body.classList.remove("no-scroll")}});document.body.classList.add("no-scroll"),t.show();const n=t.element().querySelector(".dessert-loader");e.spin(n);try{const{name:s,description:r,composition:o,price:u,rate:p,image:c}=await b(`/desserts/${a}`,{method:"GET"});t.element().innerHTML=`
            <div class="dessert-modal">
                    <button class="close-modal-btn"  aria-label="Закрити">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                             <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <div>
                        <img class="dessert-modal-img" src="${c}" alt="${s}" width="300" />                    
                    </div>
                    <div>
                        <h3 class="dessert-modal-name">${s}</h3>
                        <p class="dessert-modal-price">${u} грн</p>
                        <div class="dessert-modal-rating">${P(p)}</div>
                        <p class="dessert-modal-description">${r}</p>
                        <p class="dessert-modal-composition"><span>Склад</span>: ${o}</p>
                        <button class="dessert-modal-order-btn">Перейти до замовлення</button>                    
                    </div>                            
            </div>`,t.element().querySelector(".close-modal-btn").addEventListener("click",()=>{t.close()});const L=document.querySelector(".dessert-modal-wrapper");L.addEventListener("click",h=>{h.target===L&&t.close()}),document.addEventListener("keydown",h=>{h.key==="Escape"&&t.close()})}catch{y.fire({icon:"error",text:"Error loading categories"}),t.close()}finally{e.stop()}}function P(a){const e=Array.from({length:5},()=>`
    <div class="star">
      <svg class="star-empty">
        <use href="../img/star-rating.icons.svg#star-empty"></use>
      </svg>
      <svg class="star-half">
        <use href="../img/star-rating.icons.svg#star-half"></use>
      </svg>
      <svg class="star-filled">
        <use href="../img/star-rating.icons.svg#star-filled"></use>
      </svg>
    </div>
  `).join("");function t(s){const r=Math.round(Number(s)*2)/2,o=Math.floor(r);return r%1!==0?`value-${o} half`:`value-${o}`}return`
    <div class="rating ${t(a)} color-default ">
      <div class="star-container">
        ${e}
      </div>
    </div>
  `}const d=document.querySelector(".category-list"),w=document.querySelector(".category-select"),m=document.querySelector(".desserts-list"),i=document.querySelector(".load-more-btn");let l="all",g=1;const A=8;async function H(){const a=document.querySelector("#categories-loader"),e=document.querySelector(".category-wrapper"),t=new v({lines:12,length:6,width:4,radius:8,color:"#d18a1f"});try{t.spin(a);const n=await b("/categories",{method:"GET"}),s=n.map(o=>`
                <li class="category-item" data-category-id="${o._id}">
                    <button class="category-btn" >
                        ${o.name}
                    </button>   
                </li>
            `).join(""),r=n.map(o=>`
            <option
                    value="${o._id}">${o.name}
            </option>
            `).join("");d.insertAdjacentHTML("beforeend",s),w.insertAdjacentHTML("beforeend",r)}catch{y.fire({icon:"error",text:"Error loading categories"})}finally{t.stop(),a.remove(),e.classList.remove("hidden")}}async function f(a="all",e=!1){const t=new v({lines:12,length:6,width:4,radius:8,color:"#e39622"}),n=document.querySelector(".desserts-loader");try{const s={limit:A,sortName:"name",sortDirect:"asc",page:g};a!=="all"&&(s.category=a),e||(m.innerHTML=""),n.classList.remove("hidden"),t.spin(n),i.disabled=!0,i.classList.add("hidden");const{totalItems:r,desserts:o}=await b("/desserts",{method:"GET",params:s});console.log({totalItems:r,desserts:o});const u=o.map(c=>`
        <li class="dessert-item">
            <img class="dessert-img" src="${c.image}" alt="${c.name}" width=300 class="dessert-img">
            <p class="dessert-category">${c.category.name}</p>
            <h3 class="dessert-name">${c.name}</h3>
            <p class="dessert-description">${c.description}</p>
            <div class="dessert-details">
                <p class="dessert-price">${c.price} грн</p>
                <button class="dessert-details-btn" data-id=${c._id}>
                       <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.05 2.90275L1.45425 12.5045C1.28042 12.6743 1.0805 12.7592 0.8545 12.7592C0.628666 12.7592 0.43075 12.6723 0.26075 12.4985C0.0869165 12.3245 0 12.1246 0 11.8988C0 11.6729 0.0869165 11.473 0.26075 11.299L9.8565 1.7035H1.4075C1.16317 1.7035 0.959166 1.62117 0.7955 1.4565C0.631833 1.292 0.55 1.08892 0.55 0.84725C0.55 0.60575 0.631833 0.404167 0.7955 0.2425C0.959166 0.0808336 1.16317 0 1.4075 0H11.9075C12.148 0 12.3501 0.0819171 12.5138 0.24575C12.6774 0.409417 12.7592 0.611417 12.7592 0.85175V11.3518C12.7592 11.5921 12.677 11.7941 12.5125 11.9578C12.348 12.1216 12.1449 12.2035 11.9033 12.2035C11.6576 12.2035 11.4539 12.1216 11.2923 11.9578C11.1308 11.7941 11.05 11.5921 11.05 11.3518V2.90275Z" fill="#080C0C"/>
                       </svg>
                </button>
            </div>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",u);const p=m.children.length;console.log({loadedElements:p}),p>=r?(i.disabled=!0,i.textContent="Більше немає десертів",i.classList.remove("hidden"),i.classList.add("disabled-btn")):(i.disabled=!1,i.textContent="Завантажити ще",i.classList.remove("hidden","disabled-btn"))}catch{y.fire({icon:"error",text:"Error loading categories"})}finally{t.stop(),n.classList.add("hidden")}}N(m);function N(a){a.addEventListener("click",e=>{if(e.target.closest(".dessert-details-btn")){const t=e.target.closest(".dessert-details-btn").dataset.id;q(t)}})}d.addEventListener("click",a=>{if(a.target.closest(".category-item")){l=a.target.closest(".category-item").dataset.categoryId,g=1,i.disabled=!1,i.textContent="Завантажити ще";const e=d.children;Array.from(e).forEach(t=>{t.querySelector("button").classList.remove("active")}),a.target.closest(".category-item > button").classList.add("active"),w.value=l,f(l)}});w.addEventListener("change",a=>{i.disabled=!1,i.textContent="Завантажити ще",l=a.target.value,g=1;const e=d.children;Array.from(e).forEach(t=>{t.querySelector("button").classList.remove("active")}),d.querySelector(`[data-category-id="${l}"] > button`).classList.add("active"),console.log(l),f(l)});i.addEventListener("click",()=>{i.disabled||(g+=1,f(l,!0))});H();f(l);console.log("modal");console.log("about.js");console.log("feedback.js");const C=document.getElementById("reviews-container"),T=document.getElementById("loader"),j=document.getElementById("toast-container");function B(a){const e=document.createElement("div");e.className="toast",e.textContent=a,j.appendChild(e),setTimeout(()=>e.remove(),4e3)}async function D(){try{const a=await fetch("https://deserts-store.b.goit.study/api/feedbacks");if(!a.ok)throw new Error("Помилка сервера при отриманні відгуків");const n=((await a.json()).feedbacks||[]).slice(0,10);O(n),I()}catch{B("Не вдалося завантажити дані. Повторіть спробу пізніше.")}finally{T.classList.add("hidden")}}function O(a){C.innerHTML="",a.forEach(e=>{const t=e.rate||5,s=(Math.round(t*2)/2).toFixed(1).replace(".",""),r=document.createElement("div");r.className="swiper-slide",r.innerHTML=`
            <div class="review-card">
                <div class="stars-wrapper">
                    <div class="star-rating rating-${s}">
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                    </div>
                </div>
                <p class="review-text">"${e.description||""}"</p>
                <h4 class="client-name">${e.author||"Гість"}</h4>
            </div>
        `,C.appendChild(r)})}function I(){new S(".reviews-swiper",{modules:[x,M],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1440:{slidesPerView:3}}})}document.addEventListener("DOMContentLoaded",D);new k(".accordion-container",{duration:400,showMultiple:!1});
//# sourceMappingURL=index.js.map
