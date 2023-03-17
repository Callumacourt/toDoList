export const projects = [
  { name: 'Home', tasks: [] },
  { name: 'Health', tasks: [] },
  { name: 'All tasks', tasks: [] },
];

export function createProject(name) {
  projects.push({ name, tasks: [] });
}

export function deleteProject(projectName) {
  const projectIndex = projects.findIndex(p => p.name === projectName);
  if (projectIndex !== -1) {
    const deletedProject = projects.splice(projectIndex, 1)[0];
    // Remove any references to the deleted project from other projects' task lists
    projects.forEach(project => {
      project.tasks = project.tasks.filter(
        task => task.project !== deletedProject
      );
    });
  }
}

export function addTaskToProject(projectName, task) {
  const project = projects.find(p => p.name === projectName);
  if (project) {
    project.tasks.push(task);
  } else {
    projects[0].tasks.push(task);
  }
}
