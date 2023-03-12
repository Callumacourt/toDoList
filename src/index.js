import { createProject, projects, addTaskToProject } from './projects';
import { TaskCreator } from './tasks';

createProject('Home');
createProject('My Tasks');

window.createProject = createProject;
window.projects = projects;
window.createTask = TaskCreator;
window.addTaskToProject = addTaskToProject;
