export const projects = [{ name: 'Home', tasks: [] }];

export function createProject(name) {
  projects.push({ name, tasks: [] });
}

export function addTaskToProject(projectName, task) {
  const project = projects.find(p => p.name === projectName);
  if (project) {
    project.tasks.push(task);
  } else {
    projects[0].tasks.push(task);
  }
}
