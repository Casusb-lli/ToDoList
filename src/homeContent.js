

import headerImg from "./media/restaurant-header-image.jpg";

export function addHomeContent() {
    const contentContainer = document.getElementById("content");
    let img = document.createElement('img');
    img.src = headerImg;
    img.classList.add('home-page-img');
    let pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Welcome to Doggy Friendly';
    pageTitle.classList.add('page-title');
    let pageDescription = document.createElement('p');
    pageDescription.textContent = 'Eat on my restaruant, it is a very good restaurant.'

    contentContainer.appendChild(pageTitle);
    contentContainer.appendChild(img);
    contentContainer.appendChild(pageDescription);
}