let input = document.getElementById("todoText");
let addBtn = document.getElementById("addBtn");
let errorMsg = document.querySelector(".error-msg");
let ulElement = document.getElementById("list");
let resutMessage = document.querySelector(".result-text p");
let clearAllBtn = document.getElementById("clearBtn");

class ToDo {
  static id = 1;
  constructor(task) {
    this.id = ToDo.id++;
    this.task = task;
    this.isComplited = false;
  }
}

let toDoArray = [];

addBtn.addEventListener("click", function () {
  errorMessage();
  fillToDoArray(toDoArray);

  createTaskList();

  resultMsg();
});

function errorMessage() {
  if (input.value.trim() === "") {
    errorMsg.style.display = "block";
    input.classList.add("error");
  } else {
    errorMsg.style.display = "none";
    input.classList.remove("error");
  }
}

function fillToDoArray(array) {
  let newTodo = new ToDo(input.value);
  array.push(newTodo);
  resetInput();
}

// function for reset input
function resetInput() {
  input.value = "";
}

function createTaskList() {
  emptyUl();

  if (toDoArray.length > 0) {
    toDoArray.forEach(function (element) {
      let liElement = document.createElement("li");
      liElement.setAttribute("class", "list-item");
      ulElement.append(liElement);
      liElement.innerHTML = `
            <div class="list-text">
                ${element.task}
            </div>
            <div class="list-buttons">
                <button class="complitedBtn manipulationBtn">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="deleteBtn manipulationBtn" id="${element.id}">  
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button class="updateBtn manipulationBtn">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
            </div>`;
    });
  }

  selectBtn();
}

function emptyUl() {
  ulElement.innerHTML = "";
}

function selectBtn() {
  let items = document.querySelectorAll(".manipulationBtn");

  items.forEach((btn) => {
    if (btn.classList.contains("deleteBtn")) {
      btn.addEventListener("click", function () {
        let index = btn.getAttribute("id");
        deleteItem(index);
        btn.parentElement.parentElement.remove();
        resultMsg();
      });
    }
  });
}

function deleteItem(id) {
  toDoArray = toDoArray.filter((item) => item.id != id);
  console.log(toDoArray);
}

function resultMsg() {
  if (toDoArray.length > 0) {
    resutMessage.innerHTML = `You have ${toDoArray.length} pending tasks`;
  } else {
    resutMessage.innerHTML = `You have no pending tasks`;
  }
}

clearAllBtn.addEventListener("click", function () {
  toDoArray.length = 0;
  emptyUl();
  resultMsg();
});
