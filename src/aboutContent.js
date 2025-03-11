export function addAboutContent () {
    const contentContainer = document.getElementById("content");

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "About Doggy Friendly";
    pageTitle.classList.add('page-title');

    const aboutText = document.createElement('p');
    aboutText.textContent = 'Doggy Friendly´s heart started to beat 1998. The idea came up when the owner had a hard time finding a restaurant that accepted their costumer to bring their lovely four leg friends. Doggy friendly is the first restaurant in London that not only happely welcome costumers dogs but also gives the dogs a meal and drink for free when buying one of the dishes. Doggy Friendly is the perfect spot for a date with your four leg bestie!';

    contentContainer.appendChild(pageTitle);
    contentContainer.appendChild(aboutText);
}