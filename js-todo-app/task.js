const addBtn = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoText");
const todoList = document.querySelector("#list");
let allTodos = [];
class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.completed = false;
    this.id = Date.now();
  }
}

addBtn.addEventListener("click", function () {
  //   console.log(todoInput.value);
  if (todoInput.value != "") {
    const todo = new Todo(todoInput.value);
    allTodos.push(todo);
    //   console.log(allTodos);
    renderTodos(allTodos);
  } else {
    alert("bura boş saxlanıla bilməz!!!");
  }
  resetTodo();
});

function resetTodo() {
  todoInput.value = "";
}
function renderTodos(arr) {
  todoList.innerHTML = "";
  arr.forEach((todo) => {
    const liElem = document.createElement("li");
    liElem.className = `"list-item"`;
    liElem.innerHTML = ` <li class="list-item">
    <div class="list-text">${todo.todoText}</div>
    <div class="list-buttons">
      <button class="complitedBtn manipulationBtn">
        <i class="fa-solid fa-check"></i>
      </button>
      <button class="deleteBtn manipulationBtn">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="updateBtn manipulationBtn">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
    </div>
  </li>`;
    todoList.append(liElem);
  });
  const allDeleteBtns = document.querySelectorAll(".deleteBtn");
  //   console.log(allDeleteBtns);
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      const id = this.getAttribute("data-id");
      deleteTodo(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}

function deleteTodo(id) {
  allTodos = allTodos.filter((q) => q.id != id);
  renderTodos(allTodos);
}
