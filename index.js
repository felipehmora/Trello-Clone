const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const addTask = document.getElementById("add-task");
const task = document.createElement("span");

addTask.addEventListener("click", () => {
  console.log(input.value);
});
