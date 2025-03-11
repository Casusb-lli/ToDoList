

class dish {
    constructor(name,  description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    createDishElement() {
        const dishContainer = document.createElement("div");
        dishContainer.classList.add("dish");

        const dishName = document.createElement('h3');
        dishName.textContent = this.name;

        const dishDescription = document.createElement('p');
        dishDescription.textContent = this.description;

        const dishPrice = document.createElement('p');
        dishPrice.textContent = `£${this.price}`;

        dishContainer.append(dishName, dishDescription, dishPrice);

        return dishContainer;
    }
}

const dish1 = new dish ('Swedish Meatballs', 'Delicious meatballs', '23');
const dish2 = new dish ('Pasta Bolognes', 'Creamy and cheesy', '15');
const dish3 = new dish ('Lasagna', 'Yummi', '20');

export const dishes = [dish1, dish2, dish3];


