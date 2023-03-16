export default function projectButtonCreator(
  projects,
  selectProject,
  projectContainer
) {
  projects.forEach(project => {
    const projectButton = document.createElement('button');
    projectButton.textContent = project.name;
    projectButton.addEventListener('click', () => {
      selectProject(project);
    });
    projectContainer.appendChild(projectButton);
  });
}
