import { carsInfo } from './data.js';

const data = JSON.parse(carsInfo);

console.log(data);

const carsContent = document.querySelector('.car-content');

data.forEach(({url, model, price}) => {
    const div = document.createElement('div');
    div.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const img = document.createElement('img');
    img.classList.add('car-image');
    img.src = url;

    const productLink = document.createElement('a');
    productLink.classList.add('link');
    productLink.href = carsInfo.model;
    productLink.textContent = model;

    const para = document.createElement('p');
    para.classList.add('car__info');
    para.textContent = price;

    cardBody.appendChild(productLink);
    cardBody.appendChild(para);

    div.appendChild(img);
    div.appendChild(cardBody);

    carsContent.appendChild(div);
})

