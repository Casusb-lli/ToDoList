import checkIconSrc from '../media/checkIcon.svg';

export class listItem {
    constructor(title, dueDate, prio, project) {
        this.title = title;
        this.dueDate = dueDate;
        this.prio = prio;
        this.project = project;
    }
}

export const todoItems = [
    new listItem('Clean', '2025-03-19', '3', 'Chores'),
    new listItem('Call mom', '2025-03-20', '1', 'Private'),
    new listItem('Buy groceries', '2025-03-18', '2', 'Chores'),
    new listItem('Leave car on service', '2025-03-10', '1', 'Other'),
];

export function displayList () {
    const listContainer = document.getElementById('listContainer');
    const doneContainer = document.getElementById('doneContainer');
    const today = new Date(); //get todays date
    
    todoItems.forEach(item => {
        //Item containers
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title-div');

        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property-div');

        const labelDiv = document.createElement('div');
        labelDiv.classList.add('label-div');

        //Checkbox
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('hidden-checkbox');

        const checkboxVisual = document.createElement('div');
        checkboxVisual.classList.add('checkbox-visual');

        const checkIcon = document.createElement('img');
        checkIcon.src = checkIconSrc;
        checkIcon.classList.add('check-icon')
        checkIcon.style.display = 'none'; 

        //Title
        const title = document.createElement('p');
        title.textContent = item.title;
        title.classList.add('checkbox-label');
        
        //Prio
        const prio = document.createElement('p');
        prio.textContent = `Prio ${item.prio}`;
        prio.classList.add(`item-prio-${item.prio}`, 'label');

        //Project
        const project = document.createElement('p');
        project.textContent = item.project;
        project.classList.add('project', 'label');

        //Due date
        const dueDate = document.createElement('p');
        dueDate.classList.add('due-date', 'label');

        const itemDate = new Date(item.dueDate);
        today.setHours(0, 0, 0, 0);
        itemDate.setHours(0, 0, 0, 0);
        const timeDiff = (itemDate - today) / (1000 * 60 * 60 * 24);

        if (timeDiff === 0) {
            dueDate.textContent = 'Today';
        } else if (timeDiff === 1) {
            dueDate.textContent = 'Tomorrow';
        } else if (timeDiff < 0) {
            dueDate.textContent = item.dueDate;
            if (timeDiff === -1) {
                dueDate.textContent = 'Yesterday'; 
            }
        } else {
            dueDate.textContent = item.dueDate;
        }

        //Append items
        checkboxVisual.appendChild(checkIcon);
        titleDiv.appendChild(checkbox);
        titleDiv.appendChild(checkboxVisual);
        titleDiv.appendChild(title);
        labelDiv.appendChild(prio);
        labelDiv.appendChild(project);
        propertyDiv.appendChild(labelDiv);
        propertyDiv.appendChild(dueDate);
        itemContainer.appendChild(titleDiv);
        itemContainer.appendChild(propertyDiv);
        listContainer.appendChild(itemContainer);
    
        itemContainer.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            itemContainer.classList.toggle('checked', checkbox.checked);
            checkboxVisual.classList.add('checkbox-visuals-checked');
            if (checkbox.checked) {
                checkIcon.style.display = 'block';
                doneContainer.appendChild(itemContainer);

            } else {
               checkIcon.style.display = 'none';
               listContainer.appendChild(itemContainer);
            }
        });
    });
}

