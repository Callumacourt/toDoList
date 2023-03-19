export const projects = [
  { name: 'Home', tasks: [] },
  { name: 'Health', tasks: [] },
  { name: 'All tasks', tasks: [] },
];

export function createProject(name) {
  const newProject = { name, tasks: [] };
  projects.push(newProject);
  return newProject;
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
  const allTasksProject = projects.find(p => p.name === 'All tasks');

  if (project && project.name !== 'All tasks') {
    project.tasks.push(task);
    if (!allTasksProject.tasks.includes(task)) {
      allTasksProject.tasks.push(task);
    }
  } else if (project && project.name === 'All tasks') {
    if (!allTasksProject.tasks.includes(task)) {
      allTasksProject.tasks.push(task);
    }
  } else {
    projects[0].tasks.push(task);
  }
}
