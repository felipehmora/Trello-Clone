const mainContainer = document.querySelector(".main-container");
const input = document.getElementById("task-input");
const cardInput = document.getElementById("card-input");
const addBtn = document.getElementById("add-btn");
const addTask = document.getElementById("add-task");
const newBoard = document.createElement("div");

addBtn.addEventListener("click", () => {
  newBoard.className = "card";

  newBoard.innerHTML = `
        <h2>Untitled card 1</h2>
        <input type="text" placeholder="Add Task" id="task-input" />
        <button id="add-task">+</button>
        `;

  mainContainer.appendChild(newBoard);
});
