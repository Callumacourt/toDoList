import { createProject, projects } from './projects';
import projectButtonCreator from './projectButtonCreator';

const addProjectButton = document.createElement('button');

function initialiseListeners(
  confirmProjectName,
  cancelAddProject,
  projectNameInput,
  projectContainer,
  tasksContainer
) {
  const validateProjectName = (projectNames, projectName) => {
    for (let i = 0; i < projectNames.length; i += 1) {
      if (projectNames[i] === projectName) {
        alert('A project with that name already exists');
        return false;
      }
      if (projectName.length <= 0) {
        alert('Project name cannot be empty');
        return false;
      }
    }
    return true;
  };

  confirmProjectName.addEventListener('click', () => {
    const projectNames = projects.map(proj => proj.name);
    const projectName = projectNameInput.value;

    if (validateProjectName(projectNames, projectName)) {
      const newProject = createProject(projectName);
      projectNameInput.remove();
      confirmProjectName.remove();
      cancelAddProject.remove();
      projectButtonCreator([newProject], projectContainer, tasksContainer);
      addProjectButton.disabled = false; // Enable the button
    }
  });

  cancelAddProject.addEventListener('click', () => {
    projectNameInput.remove();
    confirmProjectName.remove();
    cancelAddProject.remove();
    addProjectButton.disabled = false; // Enable the button
  });
}

export default function createProjectAdder(projectContainer, tasksContainer) {
  addProjectButton.innerText = '+ Add a project';
  projectContainer.appendChild(addProjectButton);

  addProjectButton.addEventListener('click', () => {
    addProjectButton.disabled = true; // Disable the button
    const projectNameInput = document.createElement('input');
    projectContainer.appendChild(projectNameInput);

    const confirmProjectName = document.createElement('button');
    confirmProjectName.innerText = 'Confirm';
    projectContainer.appendChild(confirmProjectName);

    const cancelAddProject = document.createElement('button');
    cancelAddProject.innerText = 'Cancel';
    projectContainer.appendChild(cancelAddProject);

    initialiseListeners(
      confirmProjectName,
      cancelAddProject,
      projectNameInput,
      projectContainer,
      tasksContainer,
      addProjectButton
    );
  });
}
