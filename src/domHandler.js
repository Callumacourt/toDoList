/* eslint-disable no-loop-func */
import { projects, selectProject } from './projects';

let selectedProject = null;

function updateSelectedProject(project) {
  selectedProject = project;
}

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
    const projectsT = document.createElement('button');
    projectsT.textContent = projects[i].name;
    projectViewer.appendChild(projectsT);

    projectsT.addEventListener('click', () => {
      selectProject(projects[i], updateSelectedProject);

      taskViewer.innerHTML = ''; // Clear previous tasks

      for (let j = 0; j < selectedProject.tasks.length; j++) {
        const task = document.createElement('li');
        task.innerHTML = selectedProject.tasks[j].title;
        taskViewer.appendChild(task);
      }
    });
  }

  const taskViewer = document.createElement('div');
  taskViewer.classList.add('taskViewer');
  main.appendChild(taskViewer);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  document.body.appendChild(footer);
}
