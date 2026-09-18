document.getElementById("addBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
});