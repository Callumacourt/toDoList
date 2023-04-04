import {
  createProject,
  projects,
  addTaskToProject,
  deleteProject,
  removeTaskFromProject,
  TaskCreator,
} from './logicHandler';

import createPageLayout from './domHandler';

import './style.css';

createPageLayout();

window.createProject = createProject;
window.projects = projects;
window.TaskCreator = TaskCreator;
window.addTaskToProject = addTaskToProject;
window.deleteProject = deleteProject;
window.removeTaskFromProject = removeTaskFromProject;
