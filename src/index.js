import TaskCreator from './taskHandler';
import { ProjectCreator, projects, projectSelector } from './projectHandler';
import { projectChangeButton } from './projectsDom';

projectChangeButton();
projectSelector();

const wash = new TaskCreator('wash self', 'washing self', 'now', 'severe');
console.log(wash);
