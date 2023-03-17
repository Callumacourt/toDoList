let selectedProject = null;

export default function projectButtonCreator(
  projects,
  projectContainer,
  tasksContainer
) {
  projects.forEach(project => {
    const projectButton = document.createElement('button');
    projectButton.textContent = project.name;
    projectButton.classList.add('projectButton');
    projectContainer.appendChild(projectButton);

    projectButton.addEventListener('click', () => {
      selectedProject = project;
      console.log(selectedProject);
      tasksContainer.innerText = ''; // clear previous tasks
      selectedProject.tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.textContent = task.title;
        tasksContainer.appendChild(taskElement);
      });
    });
  });
}
