let tareas = [
    { nombre: 'Tarea 1', descripcion: 'Descripción 1', completada: false },
    { nombre: 'Tarea 2', descripcion: 'Descripción 2', completada: false },
    { nombre: 'Tarea 3', descripcion: 'Descripción 3', completada: false }
];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = `task ${tarea.completada ? 'completed' : ''}`;
        taskElement.innerHTML = `
            <div>
                <strong>${tarea.nombre}</strong>
                <p>${tarea.descripcion}</p>
            </div>
            <div>
                <button onclick="toggleTask(${index})">${tarea.completada ? 'Desmarcar' : 'Completar'}</button>
                <button onclick="deleteTask(${index})">Borrar</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });

    document.getElementById('total-tasks').innerText = tareas.length;
    document.getElementById('completed-tasks').innerText = tareas.filter(tarea => tarea.completada).length;
}

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;

    if (taskName && taskDesc) {
        tareas.push({ nombre: taskName, descripcion: taskDesc, completada: false });
        renderTasks();
        document.getElementById('task-name').value = '';
        document.getElementById('task-desc').value = '';
    } else {
        alert('Por favor, completa todos los campos');
    }
}

function deleteTask(index) {
    tareas.splice(index, 1);
    renderTasks();
}

function toggleTask(index) {
    tareas[index].completada = !tareas[index].completada;
    renderTasks();
}

// Renderizar tareas iniciales al cargar la página
renderTasks();