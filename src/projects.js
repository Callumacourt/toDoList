export const projects = [
  { name: 'Home', tasks: [] },
  { name: 'Health', tasks: [] },
];

export function createProject(name) {
  projects.push({ name, tasks: [] });
}

export function selectProject(projectName, callback) {
  callback(projectName);
}

export function addTaskToProject(projectName, task) {
  const project = projects.find(p => p.name === projectName);
  if (project) {
    project.tasks.push(task);
  } else {
    projects[0].tasks.push(task);
  }
}
