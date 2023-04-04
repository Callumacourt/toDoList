import projectButtonCreator from './projectButtonCreator';
import { projects } from './logicHandler';
import createProjectAdder from './addProjectButton';
import createAddTaskButton from './createAddTaskButton';

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

  createProjectAdder(projectContainer, tasksContainer);

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

export default function createPageLayout() {
  createHeader();
  createMain();
  createFooter();
}
