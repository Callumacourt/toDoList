import { createProject } from './projects';
import projectButtonCreator from './projectButtonCreator';
import createAddTaskButton from './createAddTaskButton';

function initialiseListeners(
  confirmProjectName,
  cancelAddProject,
  projectNameInput,
  projectContainer,
  tasksContainer,
  addProjectButton
) {
  confirmProjectName.addEventListener('click', () => {
    const newProject = createProject(projectNameInput.value);
    projectNameInput.remove();
    confirmProjectName.remove();
    cancelAddProject.remove();
    projectButtonCreator([newProject], projectContainer, tasksContainer);
    addProjectButton.disabled = false; // Enable the button
  });

  cancelAddProject.addEventListener('click', () => {
    projectNameInput.remove();
    confirmProjectName.remove();
    cancelAddProject.remove();
    addProjectButton.disabled = false; // Enable the button
  });
}

export default function createProjectAdder(projectContainer, tasksContainer) {
  const addProjectButton = document.createElement('button');
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
