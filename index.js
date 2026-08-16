import{a as C,S as v,b as $,c as E,N as S,P as M,A as x}from"./assets/vendor-CHMthEz3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();C.defaults.baseURL="https://deserts-store.b.goit.study/api";async function y(a,e={}){try{return(await C(a,e)).data}catch(s){console.log(s)}}console.log("utils.js");console.log("bestsellers");async function k(a){const e=new v({lines:12,length:6,width:4,radius:8,color:"#e39622"}),s=$.create(`
        <div class="dessert-loader" style="position: relative; min-height: 200px;"></div>
    `,{closable:!1,className:"dessert-modal-wrapper",onClose:()=>{document.body.classList.remove("no-scroll")}});document.body.classList.add("no-scroll"),s.show();const r=s.element().querySelector(".dessert-loader");e.spin(r);try{const{name:t,description:o,composition:n,price:u,rate:p,image:c}=await y(`/desserts/${a}`,{method:"GET"});s.element().innerHTML=`
            <div class="dessert-modal">
                    <button class="close-modal-btn"  aria-label="Закрити">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                             <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <div>
                        <img class="dessert-modal-img" src="${c}" alt="${t}" width="300" />                    
                    </div>
                    <div>
                        <h3 class="dessert-modal-name">${t}</h3>
                        <p class="dessert-modal-price">${u} грн</p>
                        <div class="dessert-modal-rating">${q(p)}</div>
                        <p class="dessert-modal-description">${o}</p>
                        <p class="dessert-modal-composition"><span>Склад</span>: ${n}</p>
                        <button class="dessert-modal-order-btn">Перейти до замовлення</button>                    
                    </div>                            
            </div>`,s.element().querySelector(".close-modal-btn").addEventListener("click",()=>{s.close()});const w=document.querySelector(".dessert-modal-wrapper");w.addEventListener("click",h=>{h.target===w&&s.close()}),document.addEventListener("keydown",h=>{h.key==="Escape"&&s.close()})}catch(t){console.log(t),s.close()}finally{e.stop()}}function q(a){const e=Array.from({length:5},()=>`
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
  `).join("");function s(t){const o=Math.round(Number(t)*2)/2,n=Math.floor(o);return o%1!==0?`value-${n} half`:`value-${n}`}return`
    <div class="rating ${s(a)} color-default ">
      <div class="star-container">
        ${e}
      </div>
    </div>
  `}const d=document.querySelector(".category-list"),b=document.querySelector(".category-select"),m=document.querySelector(".desserts-list"),i=document.querySelector(".load-more-btn");async function P(){const a=document.querySelector("#categories-loader"),e=document.querySelector(".category-wrapper"),s=new v({lines:12,length:6,width:4,radius:8,color:"#d18a1f"});try{s.spin(a);const r=await y("/categories",{method:"GET"}),t=r.map(n=>`
                <li class="category-item" data-category-id="${n._id}">
                    <button class="category-btn" >
                        ${n.name}
                    </button>   
                </li>
            `).join(""),o=r.map(n=>`
            <option
                    value="${n._id}">${n.name}
            </option>
            `).join("");d.insertAdjacentHTML("beforeend",t),b.insertAdjacentHTML("beforeend",o)}catch(r){console.log(r)}finally{s.stop(),a.remove(),e.classList.remove("hidden")}}P();let l="all",g=1;const j=8;async function f(a="all",e=!1){const s=new v({lines:12,length:6,width:4,radius:8,color:"#e39622"}),r=document.querySelector(".desserts-loader");try{const t={limit:j,sortName:"name",sortDirect:"asc",page:g};a!=="all"&&(t.category=a),e||(m.innerHTML=""),r.classList.remove("hidden"),s.spin(r),i.disabled=!0,i.classList.add("hidden");const{totalItems:o,desserts:n}=await y("/desserts",{method:"GET",params:t});console.log({totalItems:o,desserts:n});const u=n.map(c=>`
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
    `).join("");m.insertAdjacentHTML("beforeend",u);const p=m.children.length;console.log({loadedElements:p}),p>=o?(i.disabled=!0,i.textContent="Більше немає десертів",i.classList.remove("hidden"),i.classList.add("disabled-btn")):(i.disabled=!1,i.textContent="Завантажити ще",i.classList.remove("hidden","disabled-btn"))}catch(t){console.log(t)}finally{s.stop(),r.classList.add("hidden")}}A(m);function A(a){a.addEventListener("click",e=>{if(e.target.closest(".dessert-details-btn")){const s=e.target.closest(".dessert-details-btn").dataset.id;k(s)}})}d.addEventListener("click",a=>{if(a.target.closest(".category-item")){l=a.target.closest(".category-item").dataset.categoryId,g=1,i.disabled=!1,i.textContent="Завантажити ще";const e=d.children;Array.from(e).forEach(s=>{s.querySelector("button").classList.remove("active")}),a.target.closest(".category-item > button").classList.add("active"),b.value=l,f(l)}});b.addEventListener("change",a=>{i.disabled=!1,i.textContent="Завантажити ще",l=a.target.value,g=1;const e=d.children;Array.from(e).forEach(s=>{s.querySelector("button").classList.remove("active")}),d.querySelector(`[data-category-id="${l}"] > button`).classList.add("active"),console.log(l),f(l)});i.addEventListener("click",()=>{i.disabled||(g+=1,f(l,!0))});f(l);console.log("modal");console.log("about.js");console.log("feedback.js");const L=document.getElementById("reviews-container"),H=document.getElementById("loader"),N=document.getElementById("toast-container");function T(a){const e=document.createElement("div");e.className="toast",e.textContent=a,N.appendChild(e),setTimeout(()=>e.remove(),4e3)}async function B(){try{const a=await fetch("https://deserts-store.b.goit.study/api/feedbacks");if(!a.ok)throw new Error("Помилка сервера при отриманні відгуків");const r=((await a.json()).feedbacks||[]).slice(0,10);D(r),O()}catch{T("Не вдалося завантажити дані. Повторіть спробу пізніше.")}finally{H.classList.add("hidden")}}function D(a){L.innerHTML="",a.forEach(e=>{const s=e.rate||5,t=(Math.round(s*2)/2).toFixed(1).replace(".",""),o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
            <div class="review-card">
                <div class="stars-wrapper">
                    <div class="star-rating rating-${t}">
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
        `,L.appendChild(o)})}function O(){new E(".reviews-swiper",{modules:[S,M],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1440:{slidesPerView:3}}})}document.addEventListener("DOMContentLoaded",B);new x(".accordion-container",{duration:400,showMultiple:!1});
//# sourceMappingURL=index.js.map
