import { addTaskToProject, projects } from './projects';
import TaskCreator from './tasks';

export default function createAddTaskButton(project, tasksContainer) {
  const taskAndButtonWrapper = document.createElement('div');
  taskAndButtonWrapper.classList.add('taskAndButtonWrapper');
  tasksContainer.appendChild(taskAndButtonWrapper);

  const taskListContainer = document.createElement('div');
  taskListContainer.classList.add('taskListContainer');
  taskAndButtonWrapper.appendChild(taskListContainer);

  const addTaskForm = document.createElement('form');
  addTaskForm.classList.add('taskAdderForm');
  taskAndButtonWrapper.appendChild(addTaskForm);

  const addTaskButton = document.createElement('button');
  addTaskButton.textContent = '+ Add a task';
  addTaskButton.type = 'button';
  addTaskButton.classList.add('taskAdderBtn');
  addTaskForm.appendChild(addTaskButton);

  addTaskButton.addEventListener('click', () => {
    createTaskInputControls(addTaskForm);
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

    const isTaskNameAlreadyExists = projectTasks.some(
      task => task.title === taskName
    );
    if (isTaskNameAlreadyExists) {
      alert('A task with the same name already exists in this project.');
      return;
    }

    const newTask = new TaskCreator(taskName, taskDescription, 'h', 'h', 'h');
    addTaskToProject(project.name, newTask);
    renderTask(newTask, tasksContainer);

    resetTaskForm(addTaskForm);
  });
}

function createTaskInputControls(addTaskForm) {
  const taskNameInput = document.createElement('input');
  taskNameInput.placeholder = 'Add a task';
  taskNameInput.required = true;
  taskNameInput.classList.add('taskNameInput');
  addTaskForm.appendChild(taskNameInput);

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.placeholder = 'Add a description';
  taskDescriptionInput.classList.add('taskDescriptionInput');
  addTaskForm.appendChild(taskDescriptionInput);

  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('buttonsWrapper');
  addTaskForm.appendChild(buttonsWrapper);

  const confirmInput = document.createElement('button');
  confirmInput.textContent = '✓';
  confirmInput.classList.add('confirmInputBtn');
  confirmInput.type = 'submit';
  buttonsWrapper.appendChild(confirmInput);

  const cancelInput = document.createElement('button');
  cancelInput.textContent = 'X';
  cancelInput.classList.add('cancelInputBtn');
  cancelInput.type = 'button';
  buttonsWrapper.appendChild(cancelInput);

  cancelInput.addEventListener('click', () => {
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    resetTaskForm(addTaskForm);
  });
}

function resetTaskForm(addTaskForm) {
  const addTaskButton = addTaskForm.querySelector('.taskAdderBtn');
  addTaskButton.disabled = false;

  const buttonsWrapper = addTaskForm.querySelector('.buttonsWrapper');
  if (buttonsWrapper) {
    addTaskForm.removeChild(buttonsWrapper);
  }

  addTaskForm.querySelectorAll('input').forEach(element => {
    addTaskForm.removeChild(element);
  });
}

export function renderTask(task, container) {
  const taskElement = document.createElement('button');
  taskElement.textContent = task.title;
  const toDoList = document.createElement('div');
  container.querySelector('.taskListContainer').appendChild(toDoList); // Use the taskListContainer
  toDoList.appendChild(taskElement);
}
