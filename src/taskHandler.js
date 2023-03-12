export function TaskCreator(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

export const projects = [];

export function createProject(name) {
  projects.push({ name, tasks: [] });
}

export function addTaskToProject(projectName, task) {
  const project = projects.find(p => p.name === projectName);
  if (project) {
    project.tasks.push(task);
  }
}
