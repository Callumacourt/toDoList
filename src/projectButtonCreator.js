let selectedProject = null;

export default function projectButtonCreator(
  projects,
  projectContainer,
  tasksContainer,
  createAddTaskButton
) {
  projects.forEach(project => {
    const projectButton = document.createElement('button');
    projectButton.textContent = project.name;
    projectButton.classList.add('projectButton');
    projectContainer.appendChild(projectButton);

    projectButton.addEventListener('click', () => {
      tasksContainer.innerHTML = ''; // Clear previous tasks and input controls
      selectedProject = project;
      console.log(selectedProject);

      project.tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.textContent = task.title;
        tasksContainer.appendChild(taskElement);
      });

      createAddTaskButton(project, tasksContainer);
    });
  });
}
