import{a as B,S as x,b as z,c as q,d as O,N as P,P as I,i as C,A as F}from"./assets/vendor-BPsa392G.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();B.defaults.baseURL="https://deserts-store.b.goit.study/api";async function A(e,t={}){try{return(await B(e,t)).data}catch(s){console.log(s)}}async function W(e){try{return(await B.post("/orders",e)).data}catch(t){console.log(t)}}async function j(e){const t=new x({lines:12,length:6,width:4,radius:8,color:"#e39622"}),s=z.create(`
        <div class="dessert-loader" style="position: relative; min-height: 200px;"></div>
    `,{closable:!1,className:"dessert-modal-wrapper",onClose:()=>{document.body.classList.remove("no-scroll")}});document.body.classList.add("no-scroll"),s.show();const r=s.element().querySelector(".dessert-loader");t.spin(r);try{const{name:o,description:n,composition:a,price:l,rate:d,image:i}=await A(`/desserts/${e}`,{method:"GET"});s.element().innerHTML=`
            <div class="dessert-modal">
                    <button class="close-modal-btn"  aria-label="Закрити">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                             <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <div>
                        <img class="dessert-modal-img" src="${i}" alt="${o}" width="300" />                    
                    </div>
                    <div>
                        <h3 class="dessert-modal-name">${o}</h3>
                        <p class="dessert-modal-price">${l} грн</p>
                        <div class="dessert-modal-rating">${G(d)}</div>
                        <p class="dessert-modal-description">${n}</p>
                        <p class="dessert-modal-composition"><span>Склад</span>: ${a}</p>
                        <button class="dessert-modal-order-btn">Перейти до замовлення</button>                    
                    </div>                            
            </div>`;const L=s.element().querySelector(".close-modal-btn"),E=s.element().querySelector(".dessert-modal-order-btn");L.addEventListener("click",()=>{s.close()}),E.addEventListener("click",()=>{s.close();const p=document.querySelector(".OrderModalBackdrop");if(p){p.style.display="flex",document.body.classList.add("no-scroll");const M=document.getElementById("orderProductId");M&&(M.value=e);return}if(typeof window.openOrderModal=="function"){window.openOrderModal(e);return}typeof window.openOrderModalDirect=="function"&&window.openOrderModalDirect(e)});const v=document.querySelector(".dessert-modal-wrapper");v.addEventListener("click",p=>{p.target===v&&s.close()}),document.addEventListener("keydown",p=>{p.key==="Escape"&&s.close()})}catch{q.fire({icon:"error"}),s.close()}finally{t.stop()}}function G(e){const t=Array.from({length:5},()=>`
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
  `).join("");function s(o){const n=Math.round(Number(o)*2)/2,a=Math.floor(n);return n%1!==0?`value-${a} half`:`value-${a}`}return`
    <div class="rating ${s(e)} color-default ">
      <div class="star-container">
        ${t}
      </div>
    </div>
  `}const Z="https://deserts-store.b.goit.study/api/desserts?page=1&limit=10&type=popular",R=document.getElementById("popular-list"),$=document.getElementById("popular-loader");let k=null;function T(e){C.error({message:e,position:"topRight",timeout:4e3,progressBar:!1})}function S(e){const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function H(e){$==null||$.classList.toggle("hidden",!e)}function K(e){return(e==null?void 0:e.desserts)??[]}async function J(){if(R){H(!0);try{const e=await fetch(Z);if(!e.ok)throw new Error(`Помилка сервера: ${e.status}`);const t=await e.json(),s=K(t);if(!s.length){T("Популярні товари поки що відсутні.");return}Q(s),Y()}catch(e){console.error("Bestsellers fetch error:",e),T("Не вдалося завантажити популярні товари. Спробуйте пізніше.")}finally{H(!1)}}}function Q(e){const t=e.map(s=>{const{name:r,category:o,description:n,price:a,image:l}=s,d=S(r??""),i=(o==null?void 0:o.name)??"Десерти";return`
                <div class="swiper-slide">
                    <article class="product-card">
                        <img
                            class="product-img"
                            src="${l??""}"
                            alt="${d}"
                            loading="lazy"
                        />
                        <div class="product-info">
                            <p class="product-category">${S(i)}</p>
                            <h3 class="product-title">${d}</h3>
                            <p class="product-description">${S(n??"")}</p>
                            <div class="product-footer">
                                <span class="product-price">${a??0} грн</span>
                                <button data-id="${s._id}" class="btn-details" type="button" aria-label="Детальніше про ${d}">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            `}).join("");R.innerHTML=t}function X(){document.querySelector("#popular-list").addEventListener("click",t=>{const s=t.target;if(s.closest(".btn-details")){const o=s.closest(".btn-details").dataset.id;j(o)}})}X();function Y(){k&&k.destroy(!0,!0),k=new O(".popular-swiper",{modules:[P,I],slidesPerView:1,spaceBetween:16,pagination:{el:"#popular-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:32}}})}document.addEventListener("DOMContentLoaded",J);const m=document.querySelector(".category-list"),D=document.querySelector(".category-select"),g=document.querySelector(".category-wrapper"),y=document.querySelector(".category-select-trigger"),U=document.querySelector(".category-select-value"),w=document.querySelector(".desserts-list"),c=document.querySelector(".load-more-btn");let u="all",h=1;const ee=8;async function te(){const e=document.querySelector("#categories-loader"),t=document.querySelector(".category-wrapper"),s=new x({lines:12,length:6,width:4,radius:8,color:"#d18a1f"});try{s.spin(e);const r=await A("/categories",{method:"GET"}),o=r.map(a=>`
                <li class="category-item" data-category-id="${a._id}">
                    <button class="category-btn" >
                        ${a.name}
                    </button>   
                </li>
            `).join(""),n=r.map(a=>`
            <option
                    value="${a._id}">${a.name}
            </option>
            `).join("");m.insertAdjacentHTML("beforeend",o),D.insertAdjacentHTML("beforeend",n)}catch{q.fire({icon:"error",text:"Error loading categories"})}finally{s.stop(),e.remove(),t.classList.remove("hidden")}}async function b(e="all",t=!1){const s=new x({lines:12,length:6,width:4,radius:8,color:"#e39622"}),r=document.querySelector(".desserts-loader");try{const o={limit:ee,sortName:"name",sortDirect:"asc",page:h};e!=="all"&&(o.category=e),t||(w.innerHTML=""),r.classList.remove("hidden"),s.spin(r),c.disabled=!0,c.classList.add("hidden");const{totalItems:n,desserts:a}=await A("/desserts",{method:"GET",params:o}),l=a.map(i=>`
        <li class="dessert-item">
            <img class="dessert-img" src="${i.image}" alt="${i.name}" width=300 class="dessert-img">
            <p class="dessert-category">${i.category.name}</p>
            <h3 class="dessert-name">${i.name}</h3>
            <p class="dessert-description">${i.description}</p>
            <div class="dessert-details">
                <p class="dessert-price">${i.price} грн</p>
                <button class="dessert-details-btn" data-id=${i._id}>
                       <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.05 2.90275L1.45425 12.5045C1.28042 12.6743 1.0805 12.7592 0.8545 12.7592C0.628666 12.7592 0.43075 12.6723 0.26075 12.4985C0.0869165 12.3245 0 12.1246 0 11.8988C0 11.6729 0.0869165 11.473 0.26075 11.299L9.8565 1.7035H1.4075C1.16317 1.7035 0.959166 1.62117 0.7955 1.4565C0.631833 1.292 0.55 1.08892 0.55 0.84725C0.55 0.60575 0.631833 0.404167 0.7955 0.2425C0.959166 0.0808336 1.16317 0 1.4075 0H11.9075C12.148 0 12.3501 0.0819171 12.5138 0.24575C12.6774 0.409417 12.7592 0.611417 12.7592 0.85175V11.3518C12.7592 11.5921 12.677 11.7941 12.5125 11.9578C12.348 12.1216 12.1449 12.2035 11.9033 12.2035C11.6576 12.2035 11.4539 12.1216 11.2923 11.9578C11.1308 11.7941 11.05 11.5921 11.05 11.3518V2.90275Z" fill="#080C0C"/>
                       </svg>                       
                </button>
            </div>
        </li>
    `).join("");w.insertAdjacentHTML("beforeend",l),w.children.length>=n?(c.disabled=!0,c.textContent="Більше немає десертів",c.classList.remove("hidden"),c.classList.add("disabled-btn")):(c.disabled=!1,c.textContent="Завантажити ще",c.classList.remove("hidden","disabled-btn"))}catch{q.fire({icon:"error",text:"Error loading categories"})}finally{s.stop(),r.classList.add("hidden")}}se(w);function se(e){e.addEventListener("click",t=>{if(t.target.closest(".dessert-details-btn")){const s=t.target.closest(".dessert-details-btn").dataset.id;j(s)}})}m.addEventListener("click",e=>{if(e.target.closest(".category-item")){u=e.target.closest(".category-item").dataset.categoryId,h=1,c.disabled=!1,c.textContent="Завантажити ще";const t=m.children;Array.from(t).forEach(s=>{s.querySelector("button").classList.remove("active")}),e.target.closest(".category-item > button").classList.add("active"),D.value=u,U.textContent=e.target.closest(".category-item > button").textContent.trim(),g.classList.remove("is-open"),y.setAttribute("aria-expanded","false"),b(u)}});y.addEventListener("click",()=>{const e=g.classList.toggle("is-open");y.setAttribute("aria-expanded",String(e))});document.addEventListener("click",e=>{g.contains(e.target)||(g.classList.remove("is-open"),y.setAttribute("aria-expanded","false"))});document.addEventListener("keydown",e=>{e.key==="Escape"&&(g.classList.remove("is-open"),y.setAttribute("aria-expanded","false"))});D.addEventListener("change",e=>{c.disabled=!1,c.textContent="Завантажити ще",u=e.target.value,h=1;const t=m.children;Array.from(t).forEach(s=>{s.querySelector("button").classList.remove("active")}),m.querySelector(`[data-category-id="${u}"] > button`).classList.add("active"),U.textContent=m.querySelector(`[data-category-id="${u}"] > button`).textContent.trim(),console.log(u),b(u)});c.addEventListener("click",()=>{c.disabled||(h+=1,b(u,!0))});te();b(u);(()=>{const e={openMenuBtn:document.querySelector(".nav-button"),closeMenuBtn:document.querySelector(".mob-menu-button"),menu:document.querySelector(".mob-menu"),body:document.body,menuLinks:document.querySelectorAll(".mob-link")};if(!e.openMenuBtn||!e.closeMenuBtn||!e.menu)return;function t(){e.menu.classList.add("is-open"),e.body.classList.add("is-scroll-locked")}function s(){e.menu.classList.remove("is-open"),e.body.classList.remove("is-scroll-locked")}e.openMenuBtn.addEventListener("click",r=>{window.innerWidth<768&&(r.preventDefault(),t())}),e.closeMenuBtn.addEventListener("click",s),e.menuLinks.forEach(r=>{r.addEventListener("click",s)}),window.addEventListener("keydown",r=>{r.key==="Escape"&&s()})})();let f;const oe=()=>{f=new O(".about-viewport",{modules:[P,I],slidesPerView:2,slidesPerGroup:1,spaceBetween:24,watchOverflow:!1,navigation:{prevEl:".about-button-prev",nextEl:".about-button-next"},pagination:{el:".about-pagination",clickable:!0,bulletClass:"about-pagination-bullet",bulletActiveClass:"about-pagination-bullet-active"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}})},ne=()=>{f&&(f.destroy(!0,!0),f=void 0)},_=()=>{if(window.innerWidth<768){ne();return}f||oe()};_();window.addEventListener("resize",_);const V=document.getElementById("reviews-container"),re=document.getElementById("loader"),ae=document.getElementById("toast-container");function ie(e){const t=document.createElement("div");t.className="toast",t.textContent=e,ae.appendChild(t),setTimeout(()=>t.remove(),4e3)}async function ce(){try{const e=await fetch("https://deserts-store.b.goit.study/api/feedbacks");if(!e.ok)throw new Error("Помилка сервера при отриманні відгуків");const r=((await e.json()).feedbacks||[]).slice(0,10);de(r),le()}catch{ie("Не вдалося завантажити дані. Повторіть спробу пізніше.")}finally{re.classList.add("hidden")}}function de(e){V.innerHTML="",e.forEach(t=>{const s=t.rate||5,o=(Math.round(s*2)/2).toFixed(1).replace(".",""),n=document.createElement("div");n.className="swiper-slide",n.innerHTML=`
            <div class="review-card">
                <div class="stars-wrapper">
                    <div class="star-rating rating-${o}">
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
        `,V.appendChild(n)})}function le(){new O(".reviews-swiper",{modules:[P,I],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:"#reviews-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1440:{slidesPerView:3}}})}document.addEventListener("DOMContentLoaded",ce);new F(".accordion-container",{duration:400,showMultiple:!1});function N(){const e=document.getElementById("openOrderModal"),t=document.querySelector(".OrderModalBackdrop"),s=document.querySelector(".OrderModal"),r=document.querySelector(".OrderModalClose"),o=document.querySelector(".OrderModalForm"),n=document.getElementById("orderProductId");if(!t||!s)return;function a(d=""){n&&(n.value=d||""),t.style.display="flex",document.body.classList.add("no-scroll")}function l(){t.style.display="none",document.body.classList.remove("no-scroll")}e&&e.addEventListener("click",a),t.addEventListener("click",d=>{d.target===t&&l()}),r&&r.addEventListener("click",l),o&&o.addEventListener("submit",async d=>{d.preventDefault();const i=new FormData(o),L=(i.get("name")||"").toString().trim(),E=(i.get("phone")||"").toString().trim(),v=(i.get("comment")||"").toString().trim(),p=(i.get("productId")||"").toString().trim();if(o.reportValidity())try{await W({name:L,phone:E,comment:v,productId:p}),C.success({title:"Готово",message:"Ваше замовлення успішно надіслано!",position:"topRight",timeout:4e3}),o.reset(),l()}catch{C.error({title:"Помилка",message:"Не вдалося надіслати замовлення. Спробуйте ще раз.",position:"topRight",timeout:4e3})}}),document.addEventListener("keydown",d=>{d.key==="Escape"&&t.style.display!=="none"&&l()}),window.openOrderModal=a,window.closeOrderModal=l}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N();window.openOrderModalDirect=function(){const t=document.querySelector(".OrderModalBackdrop");t&&(t.style.display="flex",document.body.classList.add("no-scroll"))};
//# sourceMappingURL=index.js.map
