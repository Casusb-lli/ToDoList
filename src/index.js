// index.js
const contentContainer = document.getElementById('content');

const menuButton = document.getElementById('menuButton');
const homeButton = document.getElementById('homeButton');
const aboutButton = document.getElementById('aboutButton');

import "./styles.css";

import { addHomeContent } from "./homeContent";

import { dishes } from "./menuContent";

import { addAboutContent } from "./aboutContent";

menuButton.addEventListener('click', () => {
    contentContainer.innerHTML = "";
    const menuContainer = document.createElement('section');
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Menu';
    pageTitle.classList.add('page-title');
    menuContainer.appendChild(pageTitle);

    dishes.forEach(dish => {
        menuContainer.appendChild(dish.createDishElement()); 
        contentContainer.appendChild(menuContainer);
    });
});

homeButton.addEventListener('click', () => {
    contentContainer.innerHTML = "";
    addHomeContent();
});

aboutButton.addEventListener('click', () => {
    contentContainer.innerHTML = "";
    addAboutContent();
})

addHomeContent();