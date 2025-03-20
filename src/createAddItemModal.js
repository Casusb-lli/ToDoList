import { displayList, listItem } from "./list"; 
import { todoItems } from "./list";
import closeIconSrc from '../media/closeIcon.svg';

export function createAddItemModal () {
    //Modal container
    const addItemModal = document.getElementById('addItemModal');
    addItemModal.classList.add('add-item-modal');
    addItemModal.style.display = 'block';
    addItemModal.innerHTML = '';

    const today = new Date(); //get todays date
    
    //Modal content container
    const modalContent = document.createElement('div');
    modalContent.classList.add('add-item-modal-content');

    //Modal Header + close button
    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.classList.add('modal-header-div');
    const modalHeader = document.createElement('H3');
    modalHeader.textContent = 'Add task';
    modalHeader.classList.add('modal-header')
    const closeButton = document.createElement('a');
    closeButton.classList.add('close-button');
    const closeIcon = document.createElement('img');
    closeIcon.src = closeIconSrc;

    //Title input
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-div','input-div')
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('type', 'text');

    //Prio dropdown
    const prioDiv = document.createElement('div');
    prioDiv.classList.add('prio-div','input-div')
    const prioLabel = document.createElement('label');
    prioLabel.textContent = 'Set prio';
    prioLabel.setAttribute('for', 'prio');
    const prioInput = document.createElement('select');
    prioInput.setAttribute('id', 'prio');
    prioInput.setAttribute('name', 'prio');
    const prioOptions = [
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' }
    ];

    prioOptions.forEach(optionData => {
        const prioOption = document.createElement('option');
        prioOption.textContent = optionData.text;
        prioInput.appendChild(prioOption);
    })

    //Datepicker
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div','input-div')
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due date';
    dateLabel.setAttribute('for', 'dueDate');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'dueDate');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('value', today);

    //Project dropdown
    const uniqueProjects = [...new Set(todoItems.map(item => item.project))];

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div','input-div')
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'project');
    projectLabel.textContent = 'Type of task';
    const projectInput = document.createElement('select');
    uniqueProjects.forEach(project => {
        const projectOption = document.createElement('option');
        projectOption.textContent = project;
        projectOption.value = project;
        projectInput.appendChild(projectOption);
    });

    const addItemButton = document.createElement('button');
    addItemButton.textContent = 'Add task';
    addItemButton.classList.add('add-item-button');
    addItemButton.addEventListener('click', () => {
        saveNewItem(titleInput, dateInput, prioInput, projectInput);
    });

    //Append elements
    modalHeaderDiv.appendChild(modalHeader);
    modalHeaderDiv.appendChild(closeButton);
    modalContent.appendChild(modalHeaderDiv);
    closeButton.appendChild(closeIcon);

    modalContent.appendChild(titleDiv);
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    modalContent.appendChild(prioDiv);
    prioDiv.appendChild(prioLabel);
    prioDiv.appendChild(prioInput);

    modalContent.appendChild(dateDiv);
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    modalContent.appendChild(projectDiv);
    projectDiv.appendChild(projectLabel);
    projectDiv.appendChild(projectInput);

    modalContent.appendChild(addItemButton);
    addItemModal.appendChild(modalContent);
    
    closeButton.addEventListener('click', () => {
        addItemModal.style.display = 'none';
    })
}

export function saveNewItem(titleInput, dueDateInput, prioInput, projectInput) {
    const title = titleInput.value.trim();
    const dueDate = dueDateInput.value;
    const prio = prioInput.value;
    const project = projectInput.value;

    if (!title) {
        alert('Please fill in a title');
        return;
    }

    const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];

    const newItem = new listItem(title, dueDate, prio, project);
    storedItems.push(newItem);

    localStorage.setItem('todoItems', JSON.stringify(storedItems));

    todoItems.push(newItem);

    displayList();

    addItemModal.style.display = 'none';

    console.log(newItem);

    console.log(localStorage.getItem('todoItems'));
}

export function loadSavedItems() {
    const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    const restoredItems = storedItems.map(item => new listItem(item.title, item.dueDate, item.prio, item.project));
    todoItems.push(...restoredItems);
    displayList();
}
