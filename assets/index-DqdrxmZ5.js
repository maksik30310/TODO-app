(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n){e.addEventListener(`click`,()=>{let e=t.value.trim();if(e===``)return;let r=`task-`+Date.now(),i=`
      <div class="card" id="${r}" draggable="true" style="
        background-color: #3f3f4e;
        padding: 15px;
        border-radius: 6px;
        text-align: left;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        cursor: grab;
        position: relative; /* Чтобы крестик встал в угол */
      ">
        <span class="card-text">${e}</span>
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
    `;n.insertAdjacentHTML(`beforeend`,i);let a=document.getElementById(r);a.addEventListener(`dragstart`,()=>{a.classList.add(`dragging`)}),a.addEventListener(`dragend`,()=>{a.classList.remove(`dragging`)});let o=document.getElementById(r);o.querySelector(`.delete-btn`).addEventListener(`click`,e=>{e.stopPropagation(),o.remove()}),t.value=``})}document.querySelector(`#app`).innerHTML=`
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
`,e(document.querySelector(`#counter`),document.querySelector(`#inputtask`),document.querySelector(`#todo-list`)),document.querySelectorAll(`.cards-list`).forEach(e=>{e.addEventListener(`dragover`,e=>{e.preventDefault()}),e.addEventListener(`drop`,()=>{let t=document.querySelector(`.dragging`);t&&e.appendChild(t)})});