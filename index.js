import{a as H,S as E,b as O,c as C,d as x,N as S,P as M,i as D,A as R}from"./assets/vendor-BPsa392G.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();H.defaults.baseURL="https://deserts-store.b.goit.study/api";async function k(e,t={}){try{return(await H(e,t)).data}catch(s){console.log(s)}}async function V(e){const t=new E({lines:12,length:6,width:4,radius:8,color:"#e39622"}),s=O.create(`
        <div class="dessert-loader" style="position: relative; min-height: 200px;"></div>
    `,{closable:!1,className:"dessert-modal-wrapper",onClose:()=>{document.body.classList.remove("no-scroll")}});document.body.classList.add("no-scroll"),s.show();const n=s.element().querySelector(".dessert-loader");t.spin(n);try{const{name:r,description:a,composition:o,price:d,rate:u,image:c}=await k(`/desserts/${e}`,{method:"GET"});s.element().innerHTML=`
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
                        <div class="dessert-modal-rating">${U(u)}</div>
                        <p class="dessert-modal-description">${a}</p>
                        <p class="dessert-modal-composition"><span>Склад</span>: ${o}</p>
                        <button class="dessert-modal-order-btn">Перейти до замовлення</button>                    
                    </div>                            
            </div>`,s.element().querySelector(".close-modal-btn").addEventListener("click",()=>{s.close()});const P=document.querySelector(".dessert-modal-wrapper");P.addEventListener("click",y=>{y.target===P&&s.close()}),document.addEventListener("keydown",y=>{y.key==="Escape"&&s.close()})}catch{C.fire({icon:"error"}),s.close()}finally{t.stop()}}function U(e){const t=Array.from({length:5},()=>`
    <div class="star">
      <svg class="star-empty" viewBox="0 0 34 32" aria-hidden="true">
        <path d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-.626 2.8-6.638 2.816 6.654 7.214.626-5.468 4.744 1.647 7.049-6.209-3.755z" />
      </svg>
      <svg class="star-half" viewBox="0 0 34 32" aria-hidden="true">
        <path d="M33.412 12.395 21.57 11.374 16.942.47 12.314 11.39.472 12.395l8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791ZM16.941 22.541c0 0-.298-14.646 0-15.318l2.816 6.654 7.214.626-5.468 4.744 1.647 7.049Z" />
      </svg>
      <svg class="star-filled" viewBox="0 0 34 32" aria-hidden="true">
        <path d="M16.941 25.621 27.12 31.765l-2.701-11.579 8.993-7.791-11.842-1.005L16.942.47l-4.628 10.92L.472 12.395l8.993 7.791-2.701 11.579Z" />
      </svg>
    </div>
  `).join("");function s(r){const a=Math.round(Number(r)*2)/2,o=Math.floor(a);return a%1!==0?`value-${o} half`:`value-${o}`}return`
    <div class="rating ${s(e)} color-default ">
      <div class="star-container">
        ${t}
      </div>
    </div>
  `}const _="https://deserts-store.b.goit.study/api/desserts?page=1&limit=10&type=popular",N=document.getElementById("popular-list"),b=document.getElementById("popular-loader");let L=null;function A(e){D.error({message:e,position:"topRight",timeout:4e3,progressBar:!1})}function $(e){const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function q(e){b==null||b.classList.toggle("hidden",!e)}function z(e){return(e==null?void 0:e.desserts)??[]}async function G(){if(N){q(!0);try{const e=await fetch(_);if(!e.ok)throw new Error(`Помилка сервера: ${e.status}`);const t=await e.json(),s=z(t);if(!s.length){A("Популярні товари поки що відсутні.");return}W(s),F()}catch(e){console.error("Bestsellers fetch error:",e),A("Не вдалося завантажити популярні товари. Спробуйте пізніше.")}finally{q(!1)}}}function W(e){const t=e.map(s=>{const{name:n,category:r,description:a,price:o,image:d}=s,u=$(n??""),c=(r==null?void 0:r.name)??"Десерти";return`
                <div class="swiper-slide">
                    <article class="product-card">
                        <img
                            class="product-img"
                            src="${d??""}"
                            alt="${u}"
                            loading="lazy"
                        />
                        <div class="product-info">
                            <p class="product-category">${$(c)}</p>
                            <h3 class="product-title">${u}</h3>
                            <p class="product-description">${$(a??"")}</p>
                            <div class="product-footer">
                                <span class="product-price">${o??0} грн</span>
                                <button data-id="${s._id}" class="btn-details" type="button" aria-label="Детальніше про ${u}">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            `}).join("");N.innerHTML=t}function Z(){document.querySelector("#popular-list").addEventListener("click",t=>{const s=t.target;if(s.closest(".btn-details")){const r=s.closest(".btn-details").dataset.id;V(r)}})}Z();function F(){L&&L.destroy(!0,!0),L=new x(".popular-swiper",{modules:[S,M],slidesPerView:1,spaceBetween:16,pagination:{el:"#popular-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:32}}})}document.addEventListener("DOMContentLoaded",G);const p=document.querySelector(".category-list"),B=document.querySelector(".category-select"),g=document.querySelector(".category-wrapper"),f=document.querySelector(".category-select-trigger"),I=document.querySelector(".category-select-value"),v=document.querySelector(".desserts-list"),i=document.querySelector(".load-more-btn");let l="all",h=1;const K=8;async function J(){const e=document.querySelector("#categories-loader"),t=document.querySelector(".category-wrapper"),s=new E({lines:12,length:6,width:4,radius:8,color:"#d18a1f"});try{s.spin(e);const n=await k("/categories",{method:"GET"}),r=n.map(o=>`
                <li class="category-item" data-category-id="${o._id}">
                    <button class="category-btn" >
                        ${o.name}
                    </button>   
                </li>
            `).join(""),a=n.map(o=>`
            <option
                    value="${o._id}">${o.name}
            </option>
            `).join("");p.insertAdjacentHTML("beforeend",r),B.insertAdjacentHTML("beforeend",a)}catch{C.fire({icon:"error",text:"Error loading categories"})}finally{s.stop(),e.remove(),t.classList.remove("hidden")}}async function w(e="all",t=!1){const s=new E({lines:12,length:6,width:4,radius:8,color:"#e39622"}),n=document.querySelector(".desserts-loader");try{const r={limit:K,sortName:"name",sortDirect:"asc",page:h};e!=="all"&&(r.category=e),t||(v.innerHTML=""),n.classList.remove("hidden"),s.spin(n),i.disabled=!0,i.classList.add("hidden");const{totalItems:a,desserts:o}=await k("/desserts",{method:"GET",params:r}),d=o.map(c=>`
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
    `).join("");v.insertAdjacentHTML("beforeend",d),v.children.length>=a?(i.disabled=!0,i.textContent="Більше немає десертів",i.classList.remove("hidden"),i.classList.add("disabled-btn")):(i.disabled=!1,i.textContent="Завантажити ще",i.classList.remove("hidden","disabled-btn"))}catch{C.fire({icon:"error",text:"Error loading categories"})}finally{s.stop(),n.classList.add("hidden")}}Q(v);function Q(e){e.addEventListener("click",t=>{if(t.target.closest(".dessert-details-btn")){const s=t.target.closest(".dessert-details-btn").dataset.id;V(s)}})}p.addEventListener("click",e=>{if(e.target.closest(".category-item")){l=e.target.closest(".category-item").dataset.categoryId,h=1,i.disabled=!1,i.textContent="Завантажити ще";const t=p.children;Array.from(t).forEach(s=>{s.querySelector("button").classList.remove("active")}),e.target.closest(".category-item > button").classList.add("active"),B.value=l,I.textContent=e.target.closest(".category-item > button").textContent.trim(),g.classList.remove("is-open"),f.setAttribute("aria-expanded","false"),w(l)}});f.addEventListener("click",()=>{const e=g.classList.toggle("is-open");f.setAttribute("aria-expanded",String(e))});document.addEventListener("click",e=>{g.contains(e.target)||(g.classList.remove("is-open"),f.setAttribute("aria-expanded","false"))});document.addEventListener("keydown",e=>{e.key==="Escape"&&(g.classList.remove("is-open"),f.setAttribute("aria-expanded","false"))});B.addEventListener("change",e=>{i.disabled=!1,i.textContent="Завантажити ще",l=e.target.value,h=1;const t=p.children;Array.from(t).forEach(s=>{s.querySelector("button").classList.remove("active")}),p.querySelector(`[data-category-id="${l}"] > button`).classList.add("active"),I.textContent=p.querySelector(`[data-category-id="${l}"] > button`).textContent.trim(),console.log(l),w(l)});i.addEventListener("click",()=>{i.disabled||(h+=1,w(l,!0))});J();w(l);let m;const X=()=>{m=new x(".about-viewport",{modules:[S,M],slidesPerView:2,slidesPerGroup:1,spaceBetween:24,watchOverflow:!1,navigation:{prevEl:".about-button-prev",nextEl:".about-button-next"},pagination:{el:".about-pagination",clickable:!0,bulletClass:"about-pagination-bullet",bulletActiveClass:"about-pagination-bullet-active"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}})},Y=()=>{m&&(m.destroy(!0,!0),m=void 0)},j=()=>{if(window.innerWidth<768){Y();return}m||X()};j();window.addEventListener("resize",j);const T=document.getElementById("reviews-container"),ee=document.getElementById("loader"),te=document.getElementById("toast-container");function se(e){const t=document.createElement("div");t.className="toast",t.textContent=e,te.appendChild(t),setTimeout(()=>t.remove(),4e3)}async function re(){try{const e=await fetch("https://deserts-store.b.goit.study/api/feedbacks");if(!e.ok)throw new Error("Помилка сервера при отриманні відгуків");const n=((await e.json()).feedbacks||[]).slice(0,10);ae(n),ne()}catch{se("Не вдалося завантажити дані. Повторіть спробу пізніше.")}finally{ee.classList.add("hidden")}}function ae(e){T.innerHTML="",e.forEach(t=>{const s=t.rate||5,r=(Math.round(s*2)/2).toFixed(1).replace(".",""),a=document.createElement("div");a.className="swiper-slide",a.innerHTML=`
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
        `,T.appendChild(a)})}function ne(){new x(".reviews-swiper",{modules:[S,M],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:"#reviews-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1440:{slidesPerView:3}}})}document.addEventListener("DOMContentLoaded",re);new R(".accordion-container",{duration:400,showMultiple:!1});
//# sourceMappingURL=index.js.map
