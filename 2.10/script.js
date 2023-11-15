document.addEventListener('DOMContentLoaded', function() {
    // 1. Change the text from “title 2” to “main title”
    const startHereElement = document.querySelector('.start-here');
    startHereElement.textContent = 'main title';
  
    // 2. Add another subtitle with the text “subtitle 4”
    const ulElement = startHereElement.parentElement.querySelector('ul');
    const newLiElement = document.createElement('li');
    newLiElement.textContent = 'subtitle 4';
    ulElement.appendChild(newLiElement);
  
    // 3. Delete the last <li> element from the list.
    const lastLiElement = ulElement.lastElementChild;
    ulElement.removeChild(lastLiElement);
  
    // 4. Change the <title> element text to “Master Of The Dom”.
    document.title = 'Master Of The Dom';
  
    // 5. Change the text of the <p> element to something else of your choice.
    const pElement = document.querySelector('p');
    pElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum incidunt,accusantium odio aliquid voluptas.';
  });
  