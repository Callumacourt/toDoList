const defaultProjects = [
  { name: 'Home', tasks: [] },
  { name: 'Important', tasks: [] },
  { name: 'All tasks', tasks: [] },
];

// Load projects from local storage
const storedProjects = localStorage.getItem('projects');
export const projects = storedProjects
  ? JSON.parse(storedProjects)
  : defaultProjects;

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function createProject(name) {
  const newProject = { name, tasks: [] };
  projects.push(newProject);
  saveProjects();

  return newProject;
}

export function deleteProject(projectNameToDelete) {
  const projectIndex = projects.findIndex(p => p.name === projectNameToDelete);
  if (projectIndex !== -1 && projectNameToDelete !== 'All tasks') {
    const deletedProject = projects.splice(projectIndex, 1)[0];

    // Remove the tasks from the deleted project in the 'All Tasks' project
    const allTasksProject = projects.find(p => p.name === 'All tasks');
    deletedProject.tasks.forEach(task => {
      const taskIndex = allTasksProject.tasks.findIndex(t => t === task);
      if (taskIndex !== -1) {
        allTasksProject.tasks.splice(taskIndex, 1);
      }
    });

    saveProjects();
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

export function removeTaskFromProject(projectName, task) {
  const project = projects.find(p => p.name === projectName);
  if (project) {
    const taskIndex = project.tasks.findIndex(t => t.id === task.id);
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1);
    }

    // Remove the task from the 'All Tasks' project as well
    if (projectName !== 'All tasks') {
      const allTasksProject = projects.find(p => p.name === 'All tasks');
      const allTasksIndex = allTasksProject.tasks.findIndex(
        t => t.id === task.id
      );
      if (allTasksIndex !== -1) {
        allTasksProject.tasks.splice(allTasksIndex, 1);
      }
    }
  }
}
