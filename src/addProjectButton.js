import { createProject, projects } from './projects';
import projectButtonCreator from './projectButtonCreator';

const addProjectButton = document.createElement('button');

function validateProjectName(projectNames, projectName) {
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
}

function initialiseListeners(
  { confirmButton, cancelButton, inputField },
  { projectListElement, taskListElement }
) {
  confirmButton.addEventListener('click', () => {
    const projectNames = projects.map(proj => proj.name);
    const projectName = inputField.value;

    if (validateProjectName(projectNames, projectName)) {
      const newProject = createProject(projectName);
      inputField.remove();
      confirmButton.remove();
      cancelButton.remove();
      projectButtonCreator([newProject], projectListElement, taskListElement);
      addProjectButton.disabled = false; // Enable the button
    }
  });

  cancelButton.addEventListener('click', () => {
    inputField.remove();
    confirmButton.remove();
    cancelButton.remove();
    addProjectButton.disabled = false; // Enable the button
  });
}

export default function createProjectAdder(
  projectListElement,
  taskListElement
) {
  addProjectButton.textContent = '+ Add a project';
  addProjectButton.classList.add('addProjectButton');
  projectListElement.appendChild(addProjectButton);

  addProjectButton.addEventListener('click', () => {
    addProjectButton.disabled = true; // Disable the button
    const inputField = document.createElement('input');
    projectListElement.appendChild(inputField);

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirm';
    projectListElement.appendChild(confirmButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    projectListElement.appendChild(cancelButton);

    initialiseListeners(
      { confirmButton, cancelButton, inputField },
      { projectListElement, taskListElement }
    );
  });
}
