import { removeFromLocalStorage } from './data';

function updateTaskInAllTasks(task) {
  const allTasksProject = projects.find(p => p.name === 'All tasks');
  const allTasksIndex = allTasksProject.tasks.findIndex(t => t.id === task.id);
  if (allTasksIndex !== -1) {
    allTasksProject.tasks[allTasksIndex] = task;
  }
}

export function TaskCreator(
  title,
  description,
  dueDate,
  priority,
  projectName,
  id,
  completed,
  skipAdding = false
) {
  const task = {
    title,
    description,
    dueDate,
    priority: priority || 'low',
    completed: completed || false,
    id: id || new Date().getTime().toString(),

    completeTask() {
      this.completed = true;
      updateTaskInAllTasks(this);
      saveProjects();
    },

    uncompleteTask() {
      this.completed = false;
      updateTaskInAllTasks(this);
      saveProjects();
    },

    changePriority(newPriority) {
      this.priority = newPriority;
      updateTaskInAllTasks(this);
      saveProjects();
    },

    updateTask(newTitle, newDescription, newDueDate, newPriority) {
      this.title = newTitle;
      this.description = newDescription;
      this.dueDate = newDueDate;
      this.priority = newPriority;
      updateTaskInAllTasks(this);
      saveProjects();
    },
  };

  if (!skipAdding) {
    addTaskToProject(projectName || 'All tasks', task);
  }
  return task;
}

const defaultProjects = [
  { name: 'Home', tasks: [] },
  { name: 'Important', tasks: [] },
  { name: 'All tasks', tasks: [] },
];

const storedProjects = localStorage.getItem('projects');

function recreateTasks() {
  projects.forEach(project => {
    project.tasks = project.tasks.map(task =>
      TaskCreator(
        task.title, // Pass the updated title
        task.description,
        task.dueDate,
        task.priority,
        project.name,
        task.id,
        task.completed,
        true
      )
    );
  });
}

export const projects =
  storedProjects && storedProjects !== 'undefined'
    ? JSON.parse(storedProjects)
    : defaultProjects;

if (storedProjects && storedProjects !== 'undefined') {
  recreateTasks();
}

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
      const taskIndex = allTasksProject.tasks.findIndex(t => t.id === task.id);
      if (taskIndex !== -1) {
        allTasksProject.tasks.splice(taskIndex, 1);
      }
      removeFromLocalStorage(task.id); // Remove the task from local storage
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
  saveProjects();
}
export function removeTaskFromProject(projectName, task) {
  console.log('Removing task from project:', projectName);
  console.log('Task to remove:', task);

  const project = projects.find(p => p.name === projectName);
  console.log('Found project:', project);

  if (project) {
    const taskIndex = project.tasks.findIndex(t => t.id === task.id);
    console.log('Task index:', taskIndex);

    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1);
      console.log('Task removed from project', project);
      saveProjects();
    }

    // Remove the task from the 'All Tasks' project as well
    if (projectName !== 'All tasks') {
      const allTasksProject = projects.find(p => p.name === 'All tasks');
      const allTasksIndex = allTasksProject.tasks.findIndex(
        t => t.id === task.id
      );
      if (allTasksIndex !== -1) {
        allTasksProject.tasks.splice(allTasksIndex, 1);
        saveProjects();
      }
    }
  }
}
