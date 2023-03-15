/* eslint-disable no-loop-func */
import { projects, selectProject, createProject } from './projects';

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

  function appendProject(project) {
    const projectButton = document.createElement('button');
    projectButton.textContent = project.name;
    projectViewer.appendChild(projectButton);

    projectButton.addEventListener('click', () => {
      selectProject(project, updateSelectedProject);

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

  function appendProjects() {
    for (let i = 0; i < projects.length; i++) {
      appendProject(projects[i]);
    }
  }

  appendProjects();

  let inputAddedFlag = false;

  const addProjectButton = document.createElement('button');
  addProjectButton.innerHTML = '+ Add project';
  addProjectButton.classList.add('inactive');

  addProjectButton.addEventListener('click', () => {
    if (inputAddedFlag === false) {
      addProjectButton.innerHTML = '';
    }
    addProjectButton.classList.remove('inactive');
    addProjectButton.classList.add('active');

    const inputText = document.createElement('input');
    projectViewer.appendChild(inputText);

    const childButtonWrapper = document.createElement('div');
    childButtonWrapper.classList.add('childBtnWrapper');
    projectViewer.appendChild(childButtonWrapper);

    const confirmInput = document.createElement('button');
    confirmInput.classList.add('confirmInputBtn');
    confirmInput.innerHTML = '✓';
    childButtonWrapper.appendChild(confirmInput);

    const cancelInput = document.createElement('button');
    cancelInput.innerHTML = 'X';
    cancelInput.classList.add('cancelInputBtn');
    childButtonWrapper.appendChild(cancelInput);

    confirmInput.addEventListener('click', () => {
      const newProjectName = inputText.value;
      createProject(newProjectName);
      projectViewer.innerHTML = '';
      appendProjects();
      projectViewer.appendChild(addProjectButton);
      inputAddedFlag = true;
      addProjectButton.classList.remove('active');
      addProjectButton.classList.add('inactive');
      addProjectButton.innerHTML = ' + Add project';
    });

    inputAddedFlag = true;
  });

  projectViewer.appendChild(addProjectButton);

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
