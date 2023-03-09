export const projects = ['home'];

export function ProjectCreator(projectName) {
  this.projectName = projectName;
  projects.push(projectName);
}

export function projectSelector() {
  const currentProject = prompt('Project name');
  return currentProject;
}
