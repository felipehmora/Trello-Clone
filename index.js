import Sortable from "sortablejs";
import Swal from "sweetalert2";

// Elementos del DOM
const mainContainer = document.querySelector(".main-container");
const createCardInput = document.getElementById("card-input");
const addBtn = document.getElementById("add-btn");

// Función para crear un nuevo tablero
const createBoard = (title) => {
  const newBoard = document.createElement("div");
  const boardId = `board-${Math.random().toString(36).substr(2, 9)}`;
  const taskContainerId = `tasks-${Math.random().toString(36).substr(2, 9)}`;

  newBoard.className = "card";
  newBoard.draggable = true;
  newBoard.id = boardId;

  newBoard.innerHTML = `
        <h2>${title}</h2>
        <div class="task-container" id="${taskContainerId}">
          <input type="text" placeholder="Add Task" class="task-input" />
          <button class="add-task-button">+</button>
        </div>
        <div class="tasks-list" id="tasks-list-${boardId}"></div>
  `;

  // Añadir lógica para agregar tareas
  const addTaskButton = newBoard.querySelector(".add-task-button");
  addTaskButton.addEventListener("click", () => addTask(newBoard));

  // Guardar el nuevo tablero en el local storage
  localStorage.setItem(boardId, newBoard.outerHTML);

  return newBoard;
};

// Función para agregar una tarea a un tablero
const addTask = (board) => {
  const taskInput = board.querySelector(".task-input");
  const tasksList = board.querySelector(".tasks-list");
  const inputValue = taskInput.value.trim();

  if (inputValue === "") {
    Swal.fire({
      title: "El campo tarea no puede estar vacío",
      icon: "error",
      confirmButtonColor: "#cf513d",
      confirmButtonText: "Entendido",
      allowOutsideClick: false,
    });
    return;
  }

  const taskElement = document.createElement("p");
  taskElement.className = "input-text";
  taskElement.textContent = inputValue;

  tasksList.appendChild(taskElement);
  taskInput.value = ""; // Limpiar el input después de agregar la tarea

  Sortable.create(tasksList, {
    group: {
      name: "nested",
      pull: true,
    },
  });

  taskElement.addEventListener("click", () => {
    Swal.fire({
      title: "Editar",
      confirmButtonColor: "#0079bf",
      input: "text",
      inputPlaceholder: `${taskElement.textContent}`,
      confirmButtonText: "Guardar",
      denyButton: true,
      showCancelButton: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Se editó la tarea correctamente",
        });
      }
    });
  });
};

// Evento para agregar un nuevo tablero
addBtn.addEventListener("click", () => {
  const boardTitle = createCardInput.value.trim();
  if (boardTitle === "") {
    Swal.fire({
      title: "El título del tablero no puede estar vacío",
      icon: "error",
      confirmButtonColor: "#cf513d",
      confirmButtonText: "Entendido",
      allowOutsideClick: false,
    });
    return;
  }
  const newBoard = createBoard(boardTitle);
  mainContainer.appendChild(newBoard);
  createCardInput.value = ""; // Limpiar el input después de agregar el tablero
});

// Inicializar SortableJS en el contenedor principal para permitir mover tableros
Sortable.create(mainContainer, {
  group: {
    name: "shared",
    pull: true,
  },
});
