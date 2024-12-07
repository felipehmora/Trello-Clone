const mainContainer = document.querySelector(".main-container");
const createCardInput = document.getElementById("card-input");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  const newBoard = document.createElement("div");
  const boardId = `board-${Math.random().toString(36).substr(2, 9)}`;
  let title = createCardInput.value;

  newBoard.className = "card";
  newBoard.id = boardId;

  newBoard.innerHTML = `
        <h2>${title}</h2>
        <div class="task-container">
          <input type="text" placeholder="Add Task" class="task-input" />
          <button class="add-task-button">+</button>
        </div>
        <div class="tasks-list"></div>
  `;

  mainContainer.appendChild(newBoard);

  // Agregar lógica al botón de añadir tareas
  const addTaskButton = newBoard.querySelector(".add-task-button");
  addTaskButton.addEventListener("click", () => {
    const taskInput = newBoard.querySelector(".task-input");
    const tasksList = newBoard.querySelector(".tasks-list");
    const inputValue = taskInput.value;

    if (inputValue.trim() !== "") {
      const taskElement = document.createElement("p");
      taskElement.className = "input-text";
      taskElement.textContent = inputValue;

      tasksList.appendChild(taskElement);
      taskInput.value = ""; // Limpiar el input después de agregar la tarea
    }
  });
});
