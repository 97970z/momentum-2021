const todoFrom = document.getElementById("todo-form");
const todoInput = todoFrom.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // JSON.stringify() -> 타입을 string으로 바꿔버림.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // li태그 생성
  li.id = newTodo.id;
  const span = document.createElement("span"); // span태그 생성
  span.innerText = newTodo.text;

  const button = document.createElement("button"); // button태그 생성
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span); // li태그에 span태그를 넣어줌.
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

todoFrom.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse() -> array로 변환
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function sexyFilter() {}
