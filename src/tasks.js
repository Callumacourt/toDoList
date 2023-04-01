import { addTaskToProject, projects } from './projects';
import saveToLocalStorage from './data';

export default function TaskCreator(
  title,
  description,
  dueDate,
  priority,
  projectName,
  id,
  completed
) {
  const task = {
    title,
    description,
    dueDate,
    priority: priority || 'low',
    completed: completed || false,
    id: id || new Date().getTime().toString(),

    completeTask() {
      this.completed = true;
    },

    uncompleteTask() {
      this.completed = false;
    },

    changePriority(newPriority) {
      this.priority = newPriority;
    },

    updateTask(newTitle, newDescription, newDueDate, newPriority) {
      this.title = newTitle;
      this.description = newDescription;
      this.dueDate = newDueDate;
      this.priority = newPriority;
    },
  };

  addTaskToProject(projectName || 'All tasks', task);
  return task;
}
