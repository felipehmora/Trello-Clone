const mainContainer = document.querySelector(".main-container");
const createCardInput = document.getElementById("card-input");
const cardInput = document.getElementById("card-input");
const addBtn = document.getElementById("add-btn");
const task = document.getElementById("task");
const taskInput = document.getElementById("task-input");

addBtn.addEventListener("click", () => {
  const newBoard = document.createElement("div");

  let title = createCardInput.value;

  newBoard.className = "card";

  newBoard.innerHTML += `
        <h2>${title}</h2>
        <input type="text" placeholder="Add Task" id="task-input" />
        <button id="add-task" onclick="obtainAddButton()" class='add-button'>+</button>
        `;

  mainContainer.appendChild(newBoard);
});

function obtainAddButton() {
  console.log("hello");

  const data = document.querySelector(".card");
  const input = document.getElementById("task-input");

  console.log(data);

  let inputValue = input.value;

  data.innerHTML += `<p class='input-text'>${inputValue}</p>`;
}
