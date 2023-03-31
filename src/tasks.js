import { addTaskToProject, projects } from './projects';
import saveToLocalStorage from './data';

export default function TaskCreator(
  title,
  description,
  dueDate,
  priority,
  projectName,
  id
) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority || 'low';
  this.completed = false;
  this.id = id || new Date().getTime().toString();
  addTaskToProject(projectName || 'All tasks', this);

  this.completeTask = function () {
    this.completed = true;
  };

  this.uncompleteTask = function () {
    this.completed = false;
  };

  this.changePriority = function (newPriority) {
    this.priority = newPriority;
  };

  this.updateTask = function (
    newTitle,
    newDescription,
    newDueDate,
    newPriority
  ) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
  };

  saveToLocalStorage(title, this);
}
