import { projects } from './projects';

export default function createPageLayout() {
  const header = document.createElement('div');
  header.classList.add('header');
  document.body.appendChild(header);

  const headerText = document.createElement('h2');
  headerText.innerHTML = 'Todo List';
  header.appendChild(headerText);

  const main = document.createElement('div');
  main.classList.add('main');
  document.body.appendChild(main);

  const projectViewer = document.createElement('div');
  projectViewer.classList.add('projectViewer');
  main.appendChild(projectViewer);

  for (let i = 0; i < projects.length; i++) {
    const projectsT = document.createElement('li');
    projectsT.textContent = projects[i].name;
    projectViewer.appendChild(projectsT);
  }

  const taskViewer = document.createElement('div');
  taskViewer.classList.add('taskViewer');
  main.appendChild(taskViewer);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  document.body.appendChild(footer);
}
