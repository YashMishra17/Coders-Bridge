function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="edit-button" onclick="editTask(this)">Edit</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('.task').textContent;
    const newTaskText = prompt('Edit task', taskText);

    if (newTaskText) {
        taskItem.querySelector('.task').textContent = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
