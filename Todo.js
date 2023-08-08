const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteTodo)

function addToDo(event){
    event.preventDefault();
    console.log(input.value);
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-container")

    const todoItem = document.createElement("li")
    todoItem.classList.add("todo-item")
    todoItem.innerText= input.value;
    todoDiv.appendChild(todoItem)

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    todoDiv.appendChild(deleteButton)

    const completeButton = document.createElement("button")
    completeButton.classList.add("complete-btn")
    completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`
    todoDiv.appendChild(completeButton)

    todoList.appendChild(todoDiv)
    input.value = "";

}

function deleteTodo(event)
{
  console.log(event.target);

  const item = event.target;
  if(item.classList[0] === "delete-btn") {
    const delItem = item.parentElement;
    console.log(delItem);
    delItem.remove();
  }

  if(item.classList[0] === "complete-btn") {
    const compItem = item.parentElement;
    console.log(compItem);
    compItem.classList.toggle("completed");
  }
}