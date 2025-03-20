// index.js
import './styles.css';  // Import your CSS file

import { displayList } from "./list";

import { createAddItemModal } from './createAddItemModal';

import { loadSavedItems } from './createAddItemModal';

document.addEventListener('DOMContentLoaded', loadSavedItems);

//displayList();


const addItemButton = document.getElementById('addItemButton');

addItemButton.addEventListener('click', () => {
    createAddItemModal();
});


