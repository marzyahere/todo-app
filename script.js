function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", function() {
            li.classList.toggle("done");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
}

document.getElementById("addBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});