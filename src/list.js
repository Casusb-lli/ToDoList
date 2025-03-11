import checkIconSrc from '../media/checkIcon.svg';

class listItem {
    constructor(title, description, dueDate, prio, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.prio = prio;
        this.project = project;
    }
}

const todoItems = [
    new listItem('Clean', 'Take out trash, vaccum clean, make the bed', '2025-03-11', '3', 'Chores'),
    new listItem('Call mom', 'Celebrate her on her birthday!', '2025-03-12', '1', 'Private'),
    new listItem('Buy groceries', 'Buy breakfast, food storage', '2025-03-10', '2', 'Chores'),
    new listItem('Leave car on service', 'At Perrys', '2025-03-15', '1', 'Other'),
];


export function displayList () {
    const todoListContainer = document.getElementById('todoListContainer');
    const doneContainer = document.getElementById('doneContainer');
    const today = new Date(); //get todays date
    todoItems.forEach(item => {
        //Create items
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('hidden-checkbox');

        const checkboxVisual = document.createElement('div');
        checkboxVisual.classList.add('checkbox-visual');
       
        const prio = document.createElement('p');
        prio.textContent = `Prio ${item.prio}`;
        prio.classList.add(`item-prio-${item.prio}`)

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('checkbox-label');

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('item-description');

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
        } else if (timeDiff === -1) {
            dueDate.textContent = 'Yesterday';
        } else {
            dueDate.textContent = item.dueDate;
        }

        const checkIcon = document.createElement('img');
        checkIcon.src = checkIconSrc;
        checkIcon.classList.add('check-icon')
        checkIcon.style.display = 'none'; 

        //Display items
        todoListContainer.appendChild(itemContainer);
        itemContainer.appendChild(checkboxVisual);
        itemContainer.appendChild(title);
        itemContainer.appendChild(description);
        itemContainer.appendChild(dueDate);
        itemContainer.appendChild(prio);
        checkboxVisual.appendChild(checkIcon);

        itemContainer.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            itemContainer.classList.toggle('checked', checkbox.checked);
            checkboxVisual.classList.add('checkbox-visuals-checked');

           
            if (checkbox.checked) {
                checkIcon.style.display = 'block';
                doneContainer.appendChild(itemContainer);

            } else {
               checkIcon.style.display = 'none';
               todoListContainer.appendChild(itemContainer);
            }
        });
    });
}

