import  { Spinner } from 'spin.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'css-star-rating/css/star-rating.css';
import getData from './api.js';

async function createDetailWindow(id) {
    const spinner = new Spinner({
        lines: 12,
        length: 6,
        width: 4,
        radius: 8,
        color: '#e39622',
    });

    const $dessertDetails = basicLightbox.create(`
        <div class="dessert-loader" style="position: relative; min-height: 200px;"></div>
    `, {
        closable: false,
        className: 'dessert-modal-wrapper',
        onClose: () => {
            document.body.classList.remove('no-scroll');
        },
    });
    document.body.classList.add('no-scroll');
    $dessertDetails.show();


    const loaderEl = $dessertDetails.element().querySelector('.dessert-loader');
    spinner.spin(loaderEl);

    try {
        const { name, description, composition, price, rate, image } = await getData(`/desserts/${id}`, { method: 'GET' });
        $dessertDetails.element().innerHTML = `
            <div class="dessert-modal">
                    <button class="close-modal-btn"  aria-label="Закрити">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                             <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <img class="dessert-modal-img" src="${image}" alt="${name}" width="300" />
                    <h3 class="dessert-modal-name">${name}</h3>
                    <p class="dessert-modal-price">${price} грн</p>
                    <div class="dessert-modal-rating">${createStars(rate)}</div>
                    <p class="dessert-modal-description">${description}</p>
                    <p class="dessert-modal-composition"><span>Склад</span>: ${composition}</p>
                    <button class="dessert-modal-order-btn">Перейти до замовлення</button>        
            </div>`;

        const closeBtn = $dessertDetails.element().querySelector('.close-modal-btn');
        closeBtn.addEventListener('click', () => {
            $dessertDetails.close();
        });

    }
    catch (error) {
        console.log(error);
        $dessertDetails.close();
    }
    finally {
        spinner.stop();
    }
}

function createStars(value) {
    const stars = Array.from({ length: 5 }, () => `
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
  `).join('');
    function getRatingClass(rate) {
        const roundedRate = Math.round(Number(rate) * 2) / 2;
        const integerPart = Math.floor(roundedRate);
        const hasHalf = roundedRate % 1 !== 0;
        return hasHalf ? `value-${integerPart} half` : `value-${integerPart}`;
    }
    const ratingClass = getRatingClass(value);
    return `
    <div class="rating ${ratingClass} color-default ">
      <div class="star-container">
        ${stars}
      </div>
    </div>
  `;
}

export default createDetailWindow;