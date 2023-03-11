import TaskCreator from './taskHandler';
import { getCurrentProject, handleProjectChange } from './projectsDom';

handleProjectChange();

const currentProject = getCurrentProject();
export default currentProject;

const wash = new TaskCreator('wash self', 'washing self', 'now', 'severe');
