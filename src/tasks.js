export function TaskCreator(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;

  this.completeTask = function () {
    this.completed = true;
  };

  this.changePriority = function (newPriority) {
    this.priority = newPriority;
  };
}
