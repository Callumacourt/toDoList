import TaskCreator from './taskHandler';
import { ProjectCreator, projects, projectSelector } from './projectHandler';

const wash = new TaskCreator('wash self', 'washing self', 'now', 'severe');
console.log(wash);
