import { addTaskToProject, projects } from './projects';
import TaskCreator from './tasks';

export default function createAddTaskButton(project, tasksContainer) {
  const addTaskForm = document.createElement('form');
  addTaskForm.classList.add('taskAdderForm');
  tasksContainer.appendChild(addTaskForm);

  const addTaskButton = document.createElement('button');
  addTaskButton.innerText = '+ Add a task';
  addTaskButton.type = 'button';
  addTaskButton.classList.add('taskAdderBtn');
  addTaskForm.appendChild(addTaskButton);

  addTaskButton.addEventListener('click', () => {
    createTaskInputControls(project, tasksContainer);
    addTaskButton.disabled = true;
  });

  addTaskForm.addEventListener('submit', event => {
    event.preventDefault();

    const taskNameInput = addTaskForm.querySelector('.taskNameInput');
    const taskDescriptionInput = addTaskForm.querySelector(
      '.taskDescriptionInput'
    );
    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;

    const projectTasks = projects.find(
      proj => proj.name === project.name
    ).tasks;

    // Check if a task with the same name already exists in the project
    if (projectTasks.some(task => task.title === taskName)) {
      alert('A task with the same name already exists in this project.');
      return;
    }

    const newTask = new TaskCreator(taskName, taskDescription, 'h', 'h', 'h');
    addTaskToProject(project.name, newTask);
    renderTask(newTask, tasksContainer);

    resetTaskButton(addTaskForm);
  });
}

function createTaskInputControls() {
  const addTaskForm = document.querySelector('.taskAdderForm');

  const taskNameInput = document.createElement('input');
  taskNameInput.placeholder = 'Add a task';
  taskNameInput.setAttribute('required', '');
  taskNameInput.classList.add('taskNameInput');
  addTaskForm.appendChild(taskNameInput);

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.placeholder = 'Add a description';
  taskDescriptionInput.classList.add('taskDescriptionInput');
  addTaskForm.appendChild(taskDescriptionInput);

  const confirmInput = document.createElement('button');
  confirmInput.innerText = '✓';
  confirmInput.type = 'submit';
  addTaskForm.appendChild(confirmInput);

  const cancelInput = document.createElement('button');
  cancelInput.innerText = 'X';
  cancelInput.type = 'button';
  addTaskForm.appendChild(cancelInput);

  cancelInput.addEventListener('click', () => {
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    resetTaskButton(addTaskForm);
  });
}

function resetTaskButton(addTaskForm) {
  const addTaskButton = document.querySelector('.taskAdderBtn');
  addTaskButton.disabled = false;

  addTaskForm
    .querySelectorAll('input, button:not(.taskAdderBtn)')
    .forEach(element => {
      addTaskForm.removeChild(element);
    });
}

function renderTask(task, container) {
  const taskElement = document.createElement('button');
  taskElement.textContent = task.title;
  container.appendChild(taskElement);
}
