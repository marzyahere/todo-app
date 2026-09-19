function renderEmptyMessage() {
    const taskList = document.getElementById("taskList");
    const existingMessage = document.querySelector(".empty-message");

    if (taskList.children.length === 0) {
        if (!existingMessage) {
            const message = document.createElement("p");
            message.className = "empty-message";
            message.textContent = "No tasks yet";
            taskList.after(message);
        }
    } else if (existingMessage) {
        existingMessage.remove();
    }
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        const li = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.className = "task-text";

        taskSpan.addEventListener("click", function() {
            li.classList.toggle("done");
        });

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", function(event) {
            event.stopPropagation();

            if (editBtn.textContent === "Edit") {
                const currentText = taskSpan.textContent;
                taskSpan.innerHTML = `<input type="text" class="edit-input" value="${currentText}">`;
                editBtn.textContent = "Save";
            } else {
                const newValue = taskSpan.querySelector(".edit-input").value;
                taskSpan.textContent = newValue.trim() !== "" ? newValue : taskSpan.textContent;
                editBtn.textContent = "Edit";
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function() {
            li.remove();
            renderEmptyMessage();
        });

        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(btnGroup);
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
        renderEmptyMessage();
    }
}

document.getElementById("addBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

renderEmptyMessage();