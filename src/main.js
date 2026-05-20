import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupTodo } from './counter.js'


document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero"></div>
  <div>
    <h1>TODO-app</h1>
  </div>
  <input id="inputtask" type="text" class="input">
  <button id="counter" type="button" class="counter">add task</button>
</section>

<div class="board">

  <div class="column" id="to-do-col">
    <h3 class="column-title-todo">To-do</h3>
    <div class="cards-list" id="todo-list"></div>
  </div>

  <div class="column" id="progress-col">
    <h3 class="column-title-prog">Progress</h3>
    <div class="cards-list" id="progress-list"></div>
  </div>

  <div class="column" id="Test-col">
    <h3 class="column-title-test">Test</h3>
    <div class="cards-list" id="test-list"></div>
  </div>

  <div class="column" id="done-col">
    <h3 class="column-title-done">Done</h3>
    <div class="cards-list" id="done-list"></div>
  </div>

</div>
`;


// Находим инпут, кнопку и список первой колонки
const btn = document.querySelector('#counter');
const inp = document.querySelector('#inputtask');
const list = document.querySelector('#todo-list');

// Передаем их в функцию из counter.js
setupTodo(btn, inp, list);

const cardLists = document.querySelectorAll('.cards-list');

cardLists.forEach(listZone => {
  listZone.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  listZone.addEventListener('drop', () => {
    const draggingCard = document.querySelector('.dragging');
    if (draggingCard) {
      listZone.appendChild(draggingCard);
    }
  });
});