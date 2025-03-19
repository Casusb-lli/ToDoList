import { listItem } from "./list"; 
import { todoItems } from "./list";

export function addItem () {
    const addItemFormContainer = document.getElementById('addItemFormContainer');
    const listContainer = document.getElementById('listContainer');
    const today = new Date(); //get todays date

    //Create title input
    const addTitle = document.createElement('div');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('type', 'text');

    //Create description
    const addDescription = document.createElement('div');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');

    //Create prio dropdown
    const addPrio = document.createElement('div');
    const prioLabel = document.createElement('label');
    prioLabel.textContent = 'Set prio';
    prioLabel.setAttribute('for', 'prio');
    const prioInput = document.createElement('select');
    prioInput.setAttribute('id', 'prio');
    prioInput.setAttribute('name', 'prio');
    const prioOptions = [
        { value: 'High', text: 'High' },
        { value: 'Medium', text: 'Medium' },
        { value: 'Low', text: 'Low' }
    ];
    prioOptions.forEach(optionData => {
        const prioOption = document.createElement('option');
        prioOption.textContent = optionData.text;
        prioInput.appendChild(prioOption);
    })

    //Create datepicker 
    const addDate = document.createElement('div');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due date';
    dateLabel.setAttribute('for', 'dueDate');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'dueDate');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('value', today);

    //Create project picker
    const uniqueProjects = [...new Set(todoItems.map(item => item.project))];

    const addProject = document.createElement('div');
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'project');
    const projectInput = document.createElement('select');
    uniqueProjects.forEach(project => {
        const projectOption = document.createElement('option');
        projectOption.textContent = project;
        projectOption.value = project;
        projectInput.appendChild(projectOption);
    });

    //Append elements
    addItemFormContainer.appendChild(addTitle);
    addTitle.appendChild(titleLabel);
    addTitle.appendChild(titleInput);
    addItemFormContainer.appendChild(addDescription);
    addDescription.appendChild(descriptionLabel);
    addDescription.appendChild(descriptionInput);
    addItemFormContainer.appendChild(addPrio);
    addPrio.appendChild(prioLabel);
    addPrio.appendChild(prioInput);
    addItemFormContainer.appendChild(addDate);
    addDate.appendChild(dateLabel);
    addDate.appendChild(dateInput);
    addItemFormContainer.appendChild(addProject);
    addProject.appendChild(projectLabel);
    addProject.appendChild(projectInput);
}