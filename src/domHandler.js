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

  const projectsWrapper = document.createElement('div');
  projectsWrapper.classList.add('projectWrapper');
  main.appendChild(projectsWrapper);

  const projectViewer = document.createElement('div');
  projectViewer.classList.add('projectViewer');
  projectsWrapper.appendChild(projectViewer);

  for (let i = 0; i < projects.length; i++) {
    const projectsT = document.createElement('button');
    projectsT.textContent = projects[i].name;
    projectViewer.appendChild(projectsT);

    projectsT.addEventListener('click', () => {
      selectProject(projects[i], updateSelectedProject);

      taskViewer.innerHTML = ''; // Clear previous tasks

      if (selectedProject.tasks !== undefined) {
        for (let j = 0; j < selectedProject.tasks.length; j++) {
          const task = document.createElement('li');
          task.innerHTML = selectedProject.tasks[j].title;
          taskViewer.appendChild(task);
        }
      }
    });
  }

  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('taskWrapper');
  main.appendChild(taskWrapper);

  const taskViewer = document.createElement('div');
  taskViewer.classList.add('taskViewer');
  taskWrapper.appendChild(taskViewer);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  document.body.appendChild(footer);
}
