import {
  createProject,
  projects,
  TaskCreator,
  addTaskToProject,
} from './taskHandler';

createProject('Home');
createProject('My Tasks');

window.createProject = createProject;
window.projects = projects;
window.createTask = TaskCreator;
window.addTaskToProject = addTaskToProject;
