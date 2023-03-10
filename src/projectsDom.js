/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import { projects, projectSelector, ProjectCreator } from './projectHandler';

export const projectChangeButton = () => {
  const changeProjectButton = document.createElement('button');
  changeProjectButton.addEventListener('click', () => {
    let currentProject;
    const defaultProject = projects[1];
    const selectedProject = prompt(
      'Which project do you want to select?'
    ).toLowerCase();
    if (projects.includes(selectedProject)) {
      currentProject = selectedProject;
      console.log(`Current project set to ${selectedProject}`);
    } else {
      currentProject = defaultProject;
      console.log('Invalid project');
    }
  });
  changeProjectButton.innerHTML = 'Change current project';
  changeProjectButton.classList.add('changeProject');
  document.body.appendChild(changeProjectButton);
};
