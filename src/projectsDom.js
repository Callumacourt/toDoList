/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import { projects } from './projectHandler';

let currentProject = 'default';

const handleProjectChange = () => {
  const defaultProject = projects[1].name;

  const selectedProject = prompt(
    'Which project do you want to select?'
  ).toLowerCase();

  const projectNames = projects.map(project => project.name);

  if (projectNames.includes(selectedProject)) {
    currentProject = selectedProject;
    console.log(`Current project set to ${selectedProject}`);
  } else {
    currentProject = defaultProject;
    console.log('Invalid project');
  }
};

const getCurrentProject = () => currentProject;

export { handleProjectChange, getCurrentProject };
