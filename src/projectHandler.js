export const projects = [];

export function ProjectCreator(projectName) {
  this.projectName = projectName;
  projects.push(projectName);
}
