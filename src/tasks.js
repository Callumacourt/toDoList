import { addTaskToProject } from './projects';

export default function TaskCreator(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority || 'low';
  this.completed = false;
  addTaskToProject('All tasks', this);

  this.completeTask = function () {
    this.completed = true;
  };

  this.uncompleteTask = function () {
    this.completed = false;
  };

  this.changePriority = function (newPriority) {
    this.priority = newPriority;
  };
}
