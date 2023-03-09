import { projectSelector } from './projectHandler';

export const allTasks = [];

function TaskCreator(title, description, dueDate, priority) {
  const currentProject = projectSelector();
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = currentProject;
}

export default TaskCreator;
