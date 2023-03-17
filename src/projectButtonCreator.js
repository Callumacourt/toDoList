let selectedProject = null;

export default function projectButtonCreator(projects, projectContainer) {
  projects.forEach(project => {
    const projectButton = document.createElement('button');
    projectButton.textContent = project.name;
    projectButton.classList.add('projectButton');
    projectContainer.appendChild(projectButton);

    projectButton.addEventListener('click', () => {
      selectedProject = project;
      console.log(selectedProject);
    });
  });
}
