import { addTaskToProject } from './projects';
import TaskCreator from './tasks';

export default function createAddTaskButton(project, tasksContainer) {
  const addTaskButton = document.createElement('button');
  addTaskButton.innerText = '+ Add a task';
  addTaskButton.classList.add('taskAdderBtn');
  tasksContainer.appendChild(addTaskButton);

  addTaskButton.addEventListener('click', () => {
    createTaskInputControls(project, tasksContainer);
  });
}

function createTaskInputControls(project, tasksContainer) {
  const taskNameInput = document.createElement('input');
  tasksContainer.appendChild(taskNameInput);

  const confirmInput = document.createElement('button');
  confirmInput.innerText = '✓';
  tasksContainer.appendChild(confirmInput);

  const cancelInput = document.createElement('button');
  cancelInput.innerText = 'X';
  tasksContainer.appendChild(cancelInput);

  confirmInput.addEventListener('click', () => {
    const taskName = taskNameInput.value;
    const newTask = new TaskCreator(taskName, 'h', 'h', 'h');
    addTaskToProject(project.name, newTask); // Use the project instance directly
    renderTask(newTask, tasksContainer); // Render the new task immediately
  });

  cancelInput.addEventListener('click', () => {
    taskNameInput.value = '';
  });
}

function renderTask(task, container) {
  const taskElement = document.createElement('button');
  taskElement.textContent = task.title;
  container.appendChild(taskElement);
}
