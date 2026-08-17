import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let aboutUsSwiper;

const initAboutUsSwiper = () => {
    aboutUsSwiper = new Swiper('.about-viewport', {
        modules: [Navigation, Pagination],

        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 24,
        watchOverflow: false,

        navigation: {
            prevEl: '.about-button-prev',
            nextEl: '.about-button-next',
        },

        pagination: {
            el: '.about-pagination',
            clickable: true,
            bulletClass: 'about-pagination-bullet',
            bulletActiveClass: 'about-pagination-bullet-active',
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },

            1440: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
        },
    });
};

const destroyAboutUsSwiper = () => {
    if (!aboutUsSwiper) return;

    aboutUsSwiper.destroy(true, true);
    aboutUsSwiper = undefined;
};

const toggleAboutUsSwiper = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        destroyAboutUsSwiper();
        return;
    }

    if (!aboutUsSwiper) {
        initAboutUsSwiper();
    }
};

toggleAboutUsSwiper();

window.addEventListener('resize', toggleAboutUsSwiper);
