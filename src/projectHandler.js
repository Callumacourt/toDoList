export const projects = ['home', 'important', 'health'];

export function ProjectCreator(projectName) {
  this.projectName = projectName;
  projects.push(projectName);
}

export function projectSelector() {
  const defaultProject = projects[0];
  const currentProject = defaultProject;

  return () => currentProject;
}
