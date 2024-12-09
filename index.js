// Elementos del DOM
const mainContainer = document.querySelector(".main-container");
const createCardInput = document.getElementById("card-input");
const addBtn = document.getElementById("add-btn");

// Función para crear un nuevo tablero
const createBoard = (title) => {
  const newBoard = document.createElement("div");
  const boardId = `board-${Math.random().toString(36).substr(2, 9)}`;

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

  // Añadir lógica para agregar tareas
  const addTaskButton = newBoard.querySelector(".add-task-button");
  addTaskButton.addEventListener("click", () => addTask(newBoard));

  return newBoard;
};

// Función para agregar una tarea a un tablero
const addTask = (board) => {
  const taskInput = board.querySelector(".task-input");
  const tasksList = board.querySelector(".tasks-list");
  const inputValue = taskInput.value.trim();

  if (inputValue === "") {
    alert("El campo de tarea no puede estar vacío.");
    return;
  }

  const taskElement = document.createElement("p");
  taskElement.className = "input-text";
  taskElement.textContent = inputValue;

  tasksList.appendChild(taskElement);
  taskInput.value = ""; // Limpiar el input después de agregar la tarea
};

// Evento para agregar un nuevo tablero
addBtn.addEventListener("click", () => {
  const title = createCardInput.value.trim();

  if (title === "") {
    alert("El título del tablero no puede estar vacío.");
    return;
  }

  const newBoard = createBoard(title);
  mainContainer.appendChild(newBoard);
  createCardInput.value = ""; // Limpiar el input después de agregar el tablero
});
