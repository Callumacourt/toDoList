import createAddTaskButton, { renderTask } from './createAddTaskButton';
import { deleteProject } from './logicHandler';

export function createProjectButton(project) {
  const projectButton = document.createElement('button');
  projectButton.textContent = project.name;
  projectButton.classList.add('projectButton');

  return projectButton;
}

function clearTasksContainer(tasksContainer) {
  tasksContainer.innerHTML = '';
}

function renderProjectTasks(project, tasksContainer) {
  const taskListContainer = tasksContainer.querySelector('.taskListContainer');
  project.tasks.forEach(task => {
    renderTask(task, tasksContainer, task.dueDate, project.name);
  });
}

const appendAProjectName = (project, tasksContainer) => {
  const projectNameContainer = document.createElement('div');
  projectNameContainer.classList.add('projectNameContainer');

  const projectName = document.createElement('h2');
  projectName.classList.add('projectName');
  projectName.textContent = project.name;
  projectNameContainer.appendChild(projectName);

  tasksContainer.insertBefore(projectNameContainer, tasksContainer.firstChild);
};

function setupProjectButtonEventListener(
  projectButton,
  project,
  tasksContainer
) {
  projectButton.addEventListener('click', () => {
    clearTasksContainer(tasksContainer);
    createAddTaskButton(project, tasksContainer);
    appendAProjectName(project, tasksContainer);
    renderProjectTasks(project, tasksContainer);
  });
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
      if (project.name !== 'All tasks') {
        deleteProject(project.name);
        projectContainer.removeChild(projectButton);
      } else {
        alert('Cannot delete this project!');
      }
    });
    projectButton.appendChild(deleteProjectButton);

    setupProjectButtonEventListener(projectButton, project, tasksContainer);
  });
}
