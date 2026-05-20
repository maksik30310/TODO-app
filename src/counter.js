export function setupTodo(button, input, todoList) {
  
  // Создаем функцию, которая срабатывает при клике
  button.addEventListener('click', () => {
    const text = input.value.trim(); // Забираем текст и убираем пробелы по бокам

    if (text === '') return; // Если инпут пустой — ничего не делаем

    // Генерируем уникальный ID для карточки 
    const id = 'task-' + Date.now();

    // Создаем HTML-строку для новой карточки
        const cardTemplate = `
      <div class="card" id="${id}" draggable="true" style="
        background-color: #3f3f4e;
        padding: 15px;
        border-radius: 6px;
        text-align: left;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        cursor: grab;
        position: relative; /* Чтобы крестик встал в угол */
      ">
        <span class="card-text">${text}</span>
        <button class="delete-btn" style="
          position: absolute;
          top: 5px;
          right: 8px;
          background: none;
          border: none;
          color: #ce6464;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
          padding: 0;
        ">✕</button>
      </div>
    `;


    // Вставляем карточку строго внутрь списка «To-do»
    todoList.insertAdjacentHTML('beforeend', cardTemplate);

const currentCard = document.getElementById(id);

currentCard.addEventListener('dragstart', () => {
  currentCard.classList.add('dragging');
});

currentCard.addEventListener('dragend', () => {
  currentCard.classList.remove('dragging');
});

    // Находим созданную карточку
    const newCard = document.getElementById(id);
    
    // Находим крестик ИМЕННО внутри этой карточки
    const deleteBtn = newCard.querySelector('.delete-btn');

    // Вешаем удаление только на крестик
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Блокирует всплытие события к самой карточке
      newCard.remove();    // Удаляем карточку целиком
    });



    // Очищаем поле ввода
    input.value = '';
  });
}

