const selectedProject = null;

function createProjectButton(project) {
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
  tasksContainer,
  createAddTaskButton
) {
  projectButton.addEventListener('click', () => {
    clearTasksContainer(tasksContainer);
    renderTasks(project, tasksContainer);
    createAddTaskButton(project, tasksContainer);
  });
}

export default function projectButtonCreator(
  projects,
  projectContainer,
  tasksContainer,
  createAddTaskButton
) {
  projects.forEach(project => {
    const projectButton = createProjectButton(project);
    projectContainer.appendChild(projectButton);

    setupProjectButtonEventListener(
      projectButton,
      project,
      tasksContainer,
      createAddTaskButton
    );
  });
}
