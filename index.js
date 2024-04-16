document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("todo__add__btn");
  const todoInput = document.getElementById("todo__add__inp");
  const todoList = document.getElementById("todo__list");

  addButton.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
      alert("Please enter a todo!");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox">
            <p>${todoText}</p>
            <button><i class="fa-solid fa-trash-can"></i></button>
        `;
    todoList.appendChild(li);

    todoInput.value = "";

    const deleteButton = li.querySelector("button");
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    const checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", function () {
      const todoText = li.querySelector("p");
      if (checkbox.checked) {
        todoText.style.textDecoration = "line-through";
      } else {
        todoText.style.textDecoration = "none";
      }
    });
  });

  const todoItems = document.querySelectorAll("#todo__list li");
  todoItems.forEach(function (item) {
    item.style.display = "flex";
  });
});
