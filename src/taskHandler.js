import currentProject from './index.js';
import { projects } from './projectHandler';

export const allTasks = [];

function TaskCreator(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

export default TaskCreator;
