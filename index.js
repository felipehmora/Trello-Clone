// Default SortableJS
import Sortable from "sortablejs";

// Elementos del DOM
const mainContainer = document.querySelector(".main-container");
const createCardInput = document.getElementById("card-input");
const addBtn = document.getElementById("add-btn");

// Función para crear un nuevo tablero
const createBoard = (title) => {
  const newBoard = document.createElement("div");
  const boardId = `board-${Math.random().toString(36).substr(2, 9)}`;

  newBoard.className = "card";
  newBoard.draggable = true;
  newBoard.id = boardId;

  newBoard.innerHTML = `
        <h2>${title}</h2>
        <div class="task-container" id="items">
          <input type="text" placeholder="Add Task" class="task-input" />
          <button class="add-task-button">+</button>
        </div>
        <div class="tasks-list"></div>
  `;

  // Añadir lógica para agregar tareas
  const addTaskButton = newBoard.querySelector(".add-task-button");
  addTaskButton.addEventListener("click", () => addTask(newBoard));

  // Inicializar SortableJS en la lista de tareas
  const tasksList = newBoard.querySelector(".tasks-list");
  Sortable.create(tasksList, {
    group: "tasks",
    animation: 150,
  });

  // Inicializar SortableJS en el contenedor de tareas
  const taskContainer = newBoard.querySelector("#items");
  Sortable.create(taskContainer, {
    group: "tasks",
    animation: 150,
    filter: ".task-input, .add-task-button",
    preventOnFilter: false,
  });

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

  // Re-inicializar SortableJS en todas las listas de tareas para que funcione con la nueva tarea
  document.querySelectorAll(".tasks-list").forEach((tasksList) => {
    Sortable.create(tasksList, {
      group: "tasks",
      animation: 150,
    });
  });
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
