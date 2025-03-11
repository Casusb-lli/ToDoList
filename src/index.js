// index.js
import './styles.css';  // Import your CSS file

import { displayList } from "./list";

import { addItem } from './addItem';

const addItemButton = document.getElementById('addItemButton');


addItemButton.addEventListener('click', () => {
    addItem();
});

displayList();