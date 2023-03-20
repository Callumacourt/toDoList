import { addTaskToProject } from './projects';
import TaskCreator from './tasks';

export default function createAddTaskButton(project, tasksContainer) {
  const addTaskButton = document.createElement('button');
  addTaskButton.innerText = '+ Add a task';
  addTaskButton.classList.add('taskAdderBtn');
  tasksContainer.appendChild(addTaskButton);

  addTaskButton.addEventListener('click', () => {
    createTaskInputControls(project, tasksContainer);
    addTaskButton.disabled = true;
  });
}

function createTaskInputControls(project, tasksContainer) {
  const taskNameInput = document.createElement('input');
  tasksContainer.appendChild(taskNameInput);
  taskNameInput.placeholder = 'Add a task';

  const confirmInput = document.createElement('button');
  confirmInput.innerText = '✓';
  tasksContainer.appendChild(confirmInput);

  const cancelInput = document.createElement('button');
  cancelInput.innerText = 'X';
  tasksContainer.appendChild(cancelInput);

  function resetTaskButton() {
    const addTaskButton = document.querySelector('.taskAdderBtn');
    addTaskButton.disabled = false;
    tasksContainer.removeChild(taskNameInput);
    tasksContainer.removeChild(confirmInput);
    tasksContainer.removeChild(cancelInput);
  }

  confirmInput.addEventListener('click', () => {
    const taskName = taskNameInput.value;
    const newTask = new TaskCreator(taskName, 'h', 'h', 'h');
    addTaskToProject(project.name, newTask); // Use the project instance directly
    renderTask(newTask, tasksContainer); // Render the new task immediately
    resetTaskButton();
  });

  cancelInput.addEventListener('click', () => {
    taskNameInput.value = '';
    resetTaskButton();
  });
}

function renderTask(task, container) {
  const taskElement = document.createElement('button');
  taskElement.textContent = task.title;
  container.appendChild(taskElement);
}
