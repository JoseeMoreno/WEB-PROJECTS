const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("complete-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        completeBtn.addEventListener("click", function() {
            taskSpan.classList.toggle("completed");
        });

        deleteBtn.addEventListener("click", function() {
            li.remove(); // Remove the task item
        });

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("task-buttons");
        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(buttonContainer);

        taskList.appendChild(li);

        taskInput.value = "";
    }
});
