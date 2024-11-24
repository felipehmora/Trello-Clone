const mainContainer = document.querySelector(".main-container");
const createCardInput = document.getElementById("card-input");
const cardInput = document.getElementById("card-input");
const addBtn = document.getElementById("add-btn");
const addTask = document.getElementById("add-task");
const newBoard = document.createElement("div");

addBtn.addEventListener("click", () => {
  let title = createCardInput.value;

  newBoard.className = "card";

  newBoard.innerHTML = `
        <h2>${title}</h2>
        <input type="text" placeholder="Add Task" id="task-input" />
        <button id="add-task">+</button>
        `;

  mainContainer.appendChild(newBoard);
  console.log(createCardInput.value);
});
