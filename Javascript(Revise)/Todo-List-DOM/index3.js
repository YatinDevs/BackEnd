// javascript code goes here
const addBtn = document.querySelector(".todo-button");
const todoListUL = document.querySelector(".todo-list");
const inputBox = document.querySelector(".todo-input");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const containerDivLi = document.createElement("div");
  containerDivLi.innerHTML += `
    <li class='todo-item'>${inputBox.value}</li>
    <button class='complete-btn' class="" ">Done</button>
    <button class='trash-btn' ">Delete</button>
    `;
  todoListUL.appendChild(containerDivLi);
});

todoListUL.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete-btn")) {
    e.target.previousElementSibling.classList.toggle("line");
  }
  if (e.target.classList.contains("trash-btn")) {
    e.target.parentElement.remove();
  }
});
