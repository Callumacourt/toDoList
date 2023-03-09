import TaskCreator from './taskHandler';
import { ProjectCreator, projects } from './projectHandler';

const chores = new ProjectCreator('chores');
const annoying = new ProjectCreator('bad project');
console.log(projects);
