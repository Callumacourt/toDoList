import {
  createProject,
  projects,
  addTaskToProject,
  deleteProject,
} from './projects';
import TaskCreator from './tasks';
import createPageLayout from './domHandler';

createPageLayout();

window.createProject = createProject;
window.projects = projects;
window.TaskCreator = TaskCreator;
window.addTaskToProject = addTaskToProject;
window.deleteProject = deleteProject;
