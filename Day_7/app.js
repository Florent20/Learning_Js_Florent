const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create the list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Complete task when clicked
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to the list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add list item to the page
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});