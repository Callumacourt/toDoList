export const projects = [
  { name: 'home' },
  { name: 'important' },
  { name: 'health' },
];

export function ProjectCreator(projectName) {
  this.projectName = projectName;
  projects.push(projectName);
}
