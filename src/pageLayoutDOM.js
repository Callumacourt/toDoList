import projectButtonCreator from './projectButtonCreator';
import { addTaskToProject, projects } from './projects';
import TaskCreator from './tasks';

function createHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  document.body.appendChild(headerContainer);

  const header = document.createElement('h2');
  header.classList.add('header');
  header.innerText = 'Todo List';
  headerContainer.appendChild(header);
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  document.body.appendChild(main);

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projectsContainer');
  main.appendChild(projectContainer);

  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('tasksContainer');
  main.appendChild(tasksContainer);

  projectButtonCreator(
    projects,
    projectContainer,
    tasksContainer,
    createAddTaskButton
  );
}

function createFooter() {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footerContainer');
  document.body.appendChild(footerContainer);

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footerContainer.appendChild(footer);
}

export function createAddTaskButton(project, tasksContainer) {
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
    console.log(project);
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
  const taskElement = document.createElement('div');
  taskElement.textContent = task.title;
  container.appendChild(taskElement);
}

export default function createPageLayout() {
  createHeader();
  createMain();
  createFooter();
}
