console.log('feedback.js');

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.min.css';

const reviewsContainer = document.getElementById('reviews-container');
const loader = document.getElementById('loader');
const toastContainer = document.getElementById('toast-container');

function showPushNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

async function fetchFeedbacks() {
    // loader.classList.remove('hidden');
    try {
        const response = await fetch('https://deserts-store.b.goit.study/api/feedbacks');
        if (!response.ok) throw new Error('Помилка сервера при отриманні відгуків');
        
        const data = await response.json();
        const feedbacksArray = data.feedbacks || [];
        const limitedData = feedbacksArray.slice(0, 10);
        
        renderSlides(limitedData);
        initSwiper();
    } catch (error) {
        showPushNotification('Не вдалося завантажити дані. Повторіть спробу пізніше.');
    } finally {
        loader.classList.add('hidden');
    }
}

// Рендеринг карток (rate, description, author)
function renderSlides(feedbacks) {
    reviewsContainer.innerHTML = '';
    feedbacks.forEach(item => {
        const rawRating = item.rate || 5;
        const roundedRating = (Math.round(rawRating * 2) / 2).toFixed(1);
        const ratingClass = roundedRating.replace('.', '');

        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="review-card">
                <div class="stars-wrapper">
                    <div class="star-rating rating-${ratingClass}">
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                    </div>
                </div>
                <p class="review-text">"${item.description || ''}"</p>
                <h4 class="client-name">${item.author || 'Гість'}</h4>
            </div>
        `;
        reviewsContainer.appendChild(slide);
    });
}

function initSwiper() {
    new Swiper('.reviews-swiper', {
        modules: [Navigation, Pagination], 
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false, 
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1440: { slidesPerView: 3 }
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchFeedbacks);