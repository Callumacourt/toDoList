import createAddTaskButton from './createAddTaskButton';
import { deleteProject } from './projects';

const selectedProject = null;

export function createProjectButton(project) {
  const projectButton = document.createElement('button');
  projectButton.textContent = project.name;
  projectButton.classList.add('projectButton');

  return projectButton;
}

function clearTasksContainer(tasksContainer) {
  tasksContainer.innerHTML = '';
}

function renderTasks(project, tasksContainer) {
  project.tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.textContent = task.title;
    tasksContainer.appendChild(taskElement);
  });
}

function setupProjectButtonEventListener(
  projectButton,
  project,
  tasksContainer
) {
  projectButton.addEventListener('click', () => {
    clearTasksContainer(tasksContainer);
    renderTasks(project, tasksContainer);
    createAddTaskButton(project, tasksContainer);
  });
}

function removeProject() {
  const deleteProjectButton = document.createElement('button');
  deleteProjectButton.innerText = 'X';
  deleteProjectButton.addEventListener('click', () => {
    deleteProject(project.name);
    projectContainer.removeChild(projectButton);
  });
  projectButton.appendChild(deleteProjectButton);
}

export default function projectButtonCreator(
  projects,
  projectContainer,
  tasksContainer
) {
  projects.forEach(project => {
    const projectButton = createProjectButton(project);
    projectContainer.appendChild(projectButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.innerText = 'X';
    deleteProjectButton.addEventListener('click', () => {
      deleteProject(project.name);
      projectContainer.removeChild(projectButton);
    });
    projectButton.appendChild(deleteProjectButton);

    setupProjectButtonEventListener(projectButton, project, tasksContainer);
  });
}
