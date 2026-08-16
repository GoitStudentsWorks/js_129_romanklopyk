import {Spinner} from 'spin.js';
import createDetailWindow from './dessert-detail.js';
import getData from './api.js';

const $category = document.querySelector('.category-list');
const $select = document.querySelector('.category-select');
const $desserts = document.querySelector('.desserts-list');
const $loader = document.querySelector('.loader');
const $loadMoreBtn = document.querySelector('.load-more-btn');

async function renderCategories() {
    const loaderCat = document.querySelector('#categories-loader');
    const wrapperEl = document.querySelector('.category-wrapper');

    const spinner = new Spinner({
        lines: 12,
        length: 6,
        width: 4,
        radius: 8,
        color: '#d18a1f',
    });

    try{
        // wrapperEl.classList.add('hidden');
        spinner.spin(loaderCat);
        const categories = await getData('/categories', { method: 'GET' });
        const list = categories.map(category => `
                <li class="category-item" data-category-id="${category._id}">
                    <button class="category-btn" >
                        ${category.name}
                    </button>   
                </li>
            `).join('');

        const select = categories.map(category => `
            <option
                    value="${category._id}">${category.name}
            </option>
            `).join('');

        return { list, select };
    }
    catch(error){
        console.log(error);
    }
    finally{
        spinner.stop();
        loaderCat.remove();
        wrapperEl.classList.remove('hidden');
    }

}

const { list, select } = await renderCategories();
$category.insertAdjacentHTML('beforeend', list);
$select.insertAdjacentHTML('beforeend', select);

let activeCategoryId = 'all';
let page = 1;
const limit = 8;


async function renderDesserts(categoryId = 'all', isLoadMore = false) {
    const spinner = new Spinner({
        lines: 12,
        length: 6,
        width: 4,
        radius: 8,
        color: '#e39622',
    });
    const loaderDessert = document.querySelector('.desserts-loader');

    try {
        const params = {
            limit: limit,
            sortName: 'name',
            sortDirect: 'asc',
            page,
        };
        if (categoryId !== 'all') {
            params.category = categoryId;
        }
        if (!isLoadMore) {
            $desserts.innerHTML = '';
        }

        loaderDessert.classList.remove('hidden');
        spinner.spin(loaderDessert);
        $loadMoreBtn.disabled = true;
        $loadMoreBtn.classList.add('hidden');


        const { totalItems, desserts } = await getData('/desserts', { method: 'GET', params });
        console.log({ totalItems, desserts });

        const markup = desserts.map(dessert => `
        <li class="dessert-item">
            <img class="dessert-img" src="${dessert.image}" alt="${dessert.name}" width=300 class="dessert-img">
            <p class="dessert-category">${dessert.category.name}</p>
            <h3 class="dessert-name">${dessert.name}</h3>
            <p class="dessert-description">${dessert.description}</p>
            <div class="dessert-details">
                <p class="dessert-price">${dessert.price} грн</p>
                <button class="dessert-details-btn" data-id=${dessert._id}>
                       <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.05 2.90275L1.45425 12.5045C1.28042 12.6743 1.0805 12.7592 0.8545 12.7592C0.628666 12.7592 0.43075 12.6723 0.26075 12.4985C0.0869165 12.3245 0 12.1246 0 11.8988C0 11.6729 0.0869165 11.473 0.26075 11.299L9.8565 1.7035H1.4075C1.16317 1.7035 0.959166 1.62117 0.7955 1.4565C0.631833 1.292 0.55 1.08892 0.55 0.84725C0.55 0.60575 0.631833 0.404167 0.7955 0.2425C0.959166 0.0808336 1.16317 0 1.4075 0H11.9075C12.148 0 12.3501 0.0819171 12.5138 0.24575C12.6774 0.409417 12.7592 0.611417 12.7592 0.85175V11.3518C12.7592 11.5921 12.677 11.7941 12.5125 11.9578C12.348 12.1216 12.1449 12.2035 11.9033 12.2035C11.6576 12.2035 11.4539 12.1216 11.2923 11.9578C11.1308 11.7941 11.05 11.5921 11.05 11.3518V2.90275Z" fill="#080C0C"/>
                       </svg>
                </button>
            </div>
        </li>
    `).join('');

        $desserts.insertAdjacentHTML('beforeend', markup);

        const loadedElements = $desserts.children.length;
        console.log({ loadedElements });

        if (loadedElements >= totalItems) {
            $loadMoreBtn.disabled = true;
            $loadMoreBtn.textContent = 'Більше немає десертів';
            $loadMoreBtn.classList.remove('hidden');
            $loadMoreBtn.classList.add('disabled-btn');
        } else {
            $loadMoreBtn.disabled = false;
            $loadMoreBtn.textContent = 'Завантажити ще';
            $loadMoreBtn.classList.remove('hidden', 'disabled-btn');

        }
    } catch (error) {
        console.log(error);
    } finally {
        spinner.stop();
        loaderDessert.classList.add('hidden');
    }
}

addListener($desserts);

function addListener(container) {
    container.addEventListener('click', e => {
        if (e.target.closest('.dessert-details-btn')) {
            const id = e.target.closest('.dessert-details-btn').dataset.id;
            createDetailWindow(id);
        }
    });
}

$category.addEventListener('click', e => {
    if (e.target.closest('.category-item')) {
        activeCategoryId = e.target.closest('.category-item').dataset.categoryId;
        page = 1;
        $loadMoreBtn.disabled = false;
        $loadMoreBtn.textContent = 'Завантажити ще';
        const children = $category.children;
        Array.from(children).forEach(child => {
            child.querySelector('button').classList.remove('active');
        });
        e.target.closest('.category-item > button').classList.add('active');
        $select.value = activeCategoryId;
        renderDesserts(activeCategoryId);
    }
});

$select.addEventListener('change', e => {
    $loadMoreBtn.disabled = false;
    $loadMoreBtn.textContent = 'Завантажити ще';
    activeCategoryId = e.target.value;
    page = 1;
    const children = $category.children;
    Array.from(children).forEach(child => {
        child.querySelector('button').classList.remove('active');
    });
    $category.querySelector(`[data-category-id="${activeCategoryId}"] > button`).classList.add('active');
    // renderDesserts(activeCategoryId);
    console.log(activeCategoryId);
    renderDesserts(activeCategoryId);
});

$loadMoreBtn.addEventListener('click', () => {
    if ($loadMoreBtn.disabled) {
        return;
    }
    page += 1;
    renderDesserts(activeCategoryId, true);
});


renderDesserts(activeCategoryId);