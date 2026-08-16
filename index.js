import{a as B,S as $,b as N,c as L,d as P,N as q,P as H,i as A,A as j}from"./assets/vendor-BPsa392G.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();B.defaults.baseURL="https://deserts-store.b.goit.study/api";async function E(e,t={}){try{return(await B(e,t)).data}catch(s){console.log(s)}}const v="data:image/svg+xml,%3csvg%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='star-empty'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-empty%3c/title%3e%3cpath%20class='path-star-empty'%20d='M33.412%2012.395l-11.842-1.021-4.628-10.904-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579%2010.179-6.144%2010.179%206.144-2.685-11.579%208.976-7.791zM16.941%2022.541l-6.193%203.739%201.647-7.049-5.468-4.744%207.214-0.626%202.8-6.638%202.816%206.654%207.214%200.626-5.468%204.744%201.647%207.049-6.209-3.755z'/%3e%3c/symbol%3e%3csymbol%20id='star-half'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-half%3c/title%3e%3cpath%20class='path-star-half'%20d='M%2033.412,12.395%2021.57,11.374%2016.942,0.47%2012.314,11.39%200.472,12.395%209.465,20.186%206.764,31.765%2016.943,25.621%2027.122,31.765%2024.437,20.186%2033.413,12.395%20Z%20M%2016.941,22.541%20c%200,0%20-0.297971,-14.6455833%200,-15.318%20l%202.816,6.654%207.214,0.626%20-5.468,4.744%201.647,7.049%20z'/%3e%3c/symbol%3e%3csymbol%20id='star-filled'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-filled%3c/title%3e%3cpath%20class='path-star-filled'%20d='M16.941%2025.621l10.179%206.144-2.701-11.579%208.993-7.791-11.842-1.005-4.628-10.92-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579z'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";async function T(e){const t=new $({lines:12,length:6,width:4,radius:8,color:"#e39622"}),s=N.create(`
        <div class="dessert-loader" style="position: relative; min-height: 200px;"></div>
    `,{closable:!1,className:"dessert-modal-wrapper",onClose:()=>{document.body.classList.remove("no-scroll")}});document.body.classList.add("no-scroll"),s.show();const o=s.element().querySelector(".dessert-loader");t.spin(o);try{const{name:r,description:a,composition:n,price:d,rate:p,image:c}=await E(`/desserts/${e}`,{method:"GET"});s.element().innerHTML=`
            <div class="dessert-modal">
                    <button class="close-modal-btn"  aria-label="Закрити">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                             <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <div>
                        <img class="dessert-modal-img" src="${c}" alt="${r}" width="300" />                    
                    </div>
                    <div>
                        <h3 class="dessert-modal-name">${r}</h3>
                        <p class="dessert-modal-price">${d} грн</p>
                        <div class="dessert-modal-rating">${V(p)}</div>
                        <p class="dessert-modal-description">${a}</p>
                        <p class="dessert-modal-composition"><span>Склад</span>: ${n}</p>
                        <button class="dessert-modal-order-btn">Перейти до замовлення</button>                    
                    </div>                            
            </div>`,s.element().querySelector(".close-modal-btn").addEventListener("click",()=>{s.close()});const x=document.querySelector(".dessert-modal-wrapper");x.addEventListener("click",h=>{h.target===x&&s.close()}),document.addEventListener("keydown",h=>{h.key==="Escape"&&s.close()})}catch{L.fire({icon:"error"}),s.close()}finally{t.stop()}}function V(e){const t=Array.from({length:5},()=>`
    <div class="star">
      <svg class="star-empty">
        <use href="${v}#star-empty"></use>
      </svg>
      <svg class="star-half">
        <use href="${v}#star-half"></use>
      </svg>
      <svg class="star-filled">
        <use href="${v}#star-filled"></use>
      </svg>
    </div>
  `).join("");function s(r){const a=Math.round(Number(r)*2)/2,n=Math.floor(a);return a%1!==0?`value-${n} half`:`value-${n}`}return`
    <div class="rating ${s(e)} color-default ">
      <div class="star-container">
        ${t}
      </div>
    </div>
  `}const D="https://deserts-store.b.goit.study/api/desserts?page=1&limit=10&type=popular",I=document.getElementById("popular-list"),w=document.getElementById("popular-loader");let y=null;function M(e){A.error({message:e,position:"topRight",timeout:4e3,progressBar:!1})}function b(e){const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function S(e){w==null||w.classList.toggle("hidden",!e)}function O(e){return(e==null?void 0:e.desserts)??[]}async function R(){if(I){S(!0);try{const e=await fetch(D);if(!e.ok)throw new Error(`Помилка сервера: ${e.status}`);const t=await e.json(),s=O(t);if(!s.length){M("Популярні товари поки що відсутні.");return}z(s),F()}catch(e){console.error("Bestsellers fetch error:",e),M("Не вдалося завантажити популярні товари. Спробуйте пізніше.")}finally{S(!1)}}}function z(e){const t=e.map(s=>{const{name:o,category:r,description:a,price:n,image:d}=s,p=b(o??""),c=(r==null?void 0:r.name)??"Десерти";return`
                <div class="swiper-slide">
                    <article class="product-card">
                        <img
                            class="product-img"
                            src="${d??""}"
                            alt="${p}"
                            loading="lazy"
                        />
                        <div class="product-info">
                            <p class="product-category">${b(c)}</p>
                            <h3 class="product-title">${p}</h3>
                            <p class="product-description">${b(a??"")}</p>
                            <div class="product-footer">
                                <span class="product-price">${n??0} грн</span>
                                <button data-id="${s._id}" class="btn-details" type="button" aria-label="Детальніше про ${p}">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            `}).join("");I.innerHTML=t}function _(){document.querySelector("#popular-list").addEventListener("click",t=>{const s=t.target;if(s.closest(".btn-details")){const r=s.closest(".btn-details").dataset.id;T(r)}})}_();function F(){y&&y.destroy(!0,!0),y=new P(".popular-swiper",{modules:[q,H],slidesPerView:1,spaceBetween:16,pagination:{el:"#popular-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:32}}})}document.addEventListener("DOMContentLoaded",R);const u=document.querySelector(".category-list"),C=document.querySelector(".category-select"),m=document.querySelector(".desserts-list"),i=document.querySelector(".load-more-btn");let l="all",f=1;const G=8;async function U(){const e=document.querySelector("#categories-loader"),t=document.querySelector(".category-wrapper"),s=new $({lines:12,length:6,width:4,radius:8,color:"#d18a1f"});try{s.spin(e);const o=await E("/categories",{method:"GET"}),r=o.map(n=>`
                <li class="category-item" data-category-id="${n._id}">
                    <button class="category-btn" >
                        ${n.name}
                    </button>   
                </li>
            `).join(""),a=o.map(n=>`
            <option
                    value="${n._id}">${n.name}
            </option>
            `).join("");u.insertAdjacentHTML("beforeend",r),C.insertAdjacentHTML("beforeend",a)}catch{L.fire({icon:"error",text:"Error loading categories"})}finally{s.stop(),e.remove(),t.classList.remove("hidden")}}async function g(e="all",t=!1){const s=new $({lines:12,length:6,width:4,radius:8,color:"#e39622"}),o=document.querySelector(".desserts-loader");try{const r={limit:G,sortName:"name",sortDirect:"asc",page:f};e!=="all"&&(r.category=e),t||(m.innerHTML=""),o.classList.remove("hidden"),s.spin(o),i.disabled=!0,i.classList.add("hidden");const{totalItems:a,desserts:n}=await E("/desserts",{method:"GET",params:r}),d=n.map(c=>`
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
    `).join("");m.insertAdjacentHTML("beforeend",d),m.children.length>=a?(i.disabled=!0,i.textContent="Більше немає десертів",i.classList.remove("hidden"),i.classList.add("disabled-btn")):(i.disabled=!1,i.textContent="Завантажити ще",i.classList.remove("hidden","disabled-btn"))}catch{L.fire({icon:"error",text:"Error loading categories"})}finally{s.stop(),o.classList.add("hidden")}}W(m);function W(e){e.addEventListener("click",t=>{if(t.target.closest(".dessert-details-btn")){const s=t.target.closest(".dessert-details-btn").dataset.id;T(s)}})}u.addEventListener("click",e=>{if(e.target.closest(".category-item")){l=e.target.closest(".category-item").dataset.categoryId,f=1,i.disabled=!1,i.textContent="Завантажити ще";const t=u.children;Array.from(t).forEach(s=>{s.querySelector("button").classList.remove("active")}),e.target.closest(".category-item > button").classList.add("active"),C.value=l,g(l)}});C.addEventListener("change",e=>{i.disabled=!1,i.textContent="Завантажити ще",l=e.target.value,f=1;const t=u.children;Array.from(t).forEach(s=>{s.querySelector("button").classList.remove("active")}),u.querySelector(`[data-category-id="${l}"] > button`).classList.add("active"),console.log(l),g(l)});i.addEventListener("click",()=>{i.disabled||(f+=1,g(l,!0))});U();g(l);const k=document.getElementById("reviews-container"),Z=document.getElementById("loader"),K=document.getElementById("toast-container");function J(e){const t=document.createElement("div");t.className="toast",t.textContent=e,K.appendChild(t),setTimeout(()=>t.remove(),4e3)}async function Q(){try{const e=await fetch("https://deserts-store.b.goit.study/api/feedbacks");if(!e.ok)throw new Error("Помилка сервера при отриманні відгуків");const o=((await e.json()).feedbacks||[]).slice(0,10);X(o),Y()}catch{J("Не вдалося завантажити дані. Повторіть спробу пізніше.")}finally{Z.classList.add("hidden")}}function X(e){k.innerHTML="",e.forEach(t=>{const s=t.rate||5,r=(Math.round(s*2)/2).toFixed(1).replace(".",""),a=document.createElement("div");a.className="swiper-slide",a.innerHTML=`
            <div class="review-card">
                <div class="stars-wrapper">
                    <div class="star-rating rating-${r}">
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                    </div>
                </div>
                <p class="review-text">"${t.description||""}"</p>
                <h4 class="client-name">${t.author||"Гість"}</h4>
            </div>
        `,k.appendChild(a)})}function Y(){new P(".reviews-swiper",{modules:[q,H],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1440:{slidesPerView:3}}})}document.addEventListener("DOMContentLoaded",Q);new j(".accordion-container",{duration:400,showMultiple:!1});
//# sourceMappingURL=index.js.map
