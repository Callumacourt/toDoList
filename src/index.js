import { createProject, projects, addTaskToProject } from './projects';
import { TaskCreator } from './tasks';

window.createProject = createProject;
window.projects = projects;
window.TaskCreator = TaskCreator;
window.addTaskToProject = addTaskToProject;
