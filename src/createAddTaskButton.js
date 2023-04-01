import {
  addTaskToProject,
  projects,
  removeTaskFromProject,
  TaskCreator,
} from './projects';

export default function createAddTaskButton(project, tasksContainer) {
  let editingTaskElement = null;
  const taskAndButtonWrapper = document.createElement('div');
  taskAndButtonWrapper.classList.add('taskAndButtonWrapper');
  tasksContainer.appendChild(taskAndButtonWrapper);

  const taskListContainer = document.createElement('div');
  taskListContainer.classList.add('taskListContainer');
  taskAndButtonWrapper.appendChild(taskListContainer);

  const createAddTaskForm = () => {
    const addTaskForm = document.createElement('form');
    addTaskForm.classList.add('taskAdderForm');

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = '+ Add a task';
    addTaskButton.type = 'button';
    addTaskButton.classList.add('taskAdderBtn');
    addTaskForm.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', () => {
      createTaskInputControls(addTaskForm);
      addTaskButton.disabled = true;
    });

    addTaskForm.addEventListener('submit', event => {
      event.preventDefault();
      const taskNameInput = addTaskForm.querySelector('.taskNameInput');
      const taskDescriptionInput = addTaskForm.querySelector(
        '.taskDescriptionInput'
      );
      const taskDateInput = addTaskForm.querySelector('.taskDateInput');
      const taskPriorityInput = addTaskForm.querySelector(
        '.taskPrioritySelector'
      );
      const taskName = taskNameInput.value;
      const taskDescription = taskDescriptionInput.value;
      const taskDueDate = taskDateInput.value;
      const taskPriority = taskPriorityInput.value;

      if (!addTaskForm.editing) {
        const projectTasks = projects.find(
          proj => proj.name === project.name
        ).tasks;
        const isTaskNameAlreadyExists = projectTasks.some(
          task => task.title === taskName
        );

        if (isTaskNameAlreadyExists) {
          alert('A task with the same name already exists in this project.');
          return;
        }

        const newTask = new TaskCreator(
          taskName,
          taskDescription,
          taskDueDate,
          taskPriority
        );
        addTaskToProject(project.name, newTask);
        renderTask(newTask, tasksContainer, project.name);

        resetTaskForm(addTaskForm);
      } else {
        const projectObj = projects.find(proj => proj.name === project.name);
        const taskIndex = projectObj.tasks.findIndex(
          task =>
            task.title ===
            addTaskForm.editingTaskElement.querySelector('.task-name')
              .textContent
        );
        const taskObj = projectObj.tasks[taskIndex];
        const projectTasks = projects.find(
          proj => proj.name === project.name
        ).tasks;
        const isTaskNameAlreadyExists = projectTasks.some(
          task => task.title === taskName
        );
        if (addTaskForm.editing !== true && isTaskNameAlreadyExists) {
          alert('There is already a task with that name');
          return;
        }
        taskObj.title = taskName;
        taskObj.description = taskDescription;
        taskObj.dueDate = taskDueDate;
        taskObj.priority = taskPriority;
        addTaskForm.editingTaskElement.querySelector('.task-name').textContent =
          taskName;
        addTaskForm.editingTaskElement.querySelector(
          '.task-due-date'
        ).textContent = taskDueDate
          ? `Due date: ${taskDueDate}`
          : 'No due date';
        addTaskForm.editingTaskElement.querySelector(
          '.changePriorityButon'
        ).value = taskPriority;
        addTaskForm.editingTaskElement.classList.remove(
          'high',
          'medium',
          'low'
        );
        addTaskForm.editingTaskElement.classList.add(taskPriority);

        resetTaskForm(addTaskForm);
        addTaskForm.editing = false;
        editingTaskElement = null;
      }
    });

    return addTaskForm;
  };
  const addTaskForm = createAddTaskForm();
  taskAndButtonWrapper.appendChild(addTaskForm);
}

function createTaskInputControls(addTaskForm) {
  const taskNameInput = document.createElement('input');
  taskNameInput.placeholder = 'Add a task';
  taskNameInput.required = true;
  taskNameInput.classList.add('taskNameInput');
  addTaskForm.appendChild(taskNameInput);

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.placeholder = 'Add a description';
  taskDescriptionInput.classList.add('taskDescriptionInput');
  addTaskForm.appendChild(taskDescriptionInput);

  const taskDateInput = document.createElement('input');
  taskDateInput.type = 'date';
  taskDateInput.classList.add('taskDateInput');
  addTaskForm.appendChild(taskDateInput);

  const taskPrioritySelect = document.createElement('select');
  taskPrioritySelect.innerHTML = `
    <option value="" disabled selected hidden>Priority:</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  `;

  taskPrioritySelect.classList.add('taskPrioritySelector');
  addTaskForm.appendChild(taskPrioritySelect);

  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('buttonsWrapper');
  addTaskForm.appendChild(buttonsWrapper);

  const confirmInput = document.createElement('button');
  confirmInput.textContent = '✓';
  confirmInput.classList.add('confirmInputBtn');
  confirmInput.type = 'submit';
  buttonsWrapper.appendChild(confirmInput);

  const cancelInput = document.createElement('button');
  cancelInput.textContent = 'X';
  cancelInput.classList.add('cancelInputBtn');
  cancelInput.type = 'button';
  buttonsWrapper.appendChild(cancelInput);

  cancelInput.addEventListener('click', () => {
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    resetTaskForm(addTaskForm);
  });
}

function resetTaskForm(addTaskForm) {
  const addTaskButton = addTaskForm.querySelector('.taskAdderBtn');
  addTaskButton.disabled = false;

  const buttonsWrapper = addTaskForm.querySelector('.buttonsWrapper');
  if (buttonsWrapper) {
    addTaskForm.removeChild(buttonsWrapper);
  }

  addTaskForm.querySelectorAll('input').forEach(element => {
    addTaskForm.removeChild(element);
  });

  const taskPriority = document.querySelector('.taskPrioritySelector');
  addTaskForm.removeChild(taskPriority);
}

export function renderTask(task, container, taskDueDateValue, projectName) {
  const taskElement = document.createElement('button');
  taskElement.classList.add('task');
  const taskName = document.createElement('span');
  taskName.classList.add('task-name');
  taskName.textContent = task.title;
  taskElement.appendChild(taskName);
  const toDoList = document.createElement('div');
  container.querySelector('.taskListContainer').appendChild(toDoList);
  toDoList.appendChild(taskElement);

  const taskDueDate = document.createElement('p');
  taskDueDate.classList.add('task-due-date');
  if (taskDueDateValue) {
    taskDueDate.textContent = `Due date: ${task.dueDate}`;
    console.log(taskDueDateValue);
  } else {
    taskDueDate.textContent = 'No due date';
  }
  taskElement.appendChild(taskDueDate);
  taskElement.appendChild(taskDueDate);

  const taskCompleter = document.createElement('button');
  taskCompleter.classList.add('taskCompleter');
  taskCompleter.addEventListener('click', () => {
    if (task.completed) {
      task.uncompleteTask();
      taskCompleter.textContent = '';
      taskCompleter.classList.remove('completed');
      taskCompleter.classList.add('uncompleted');
      taskElement.classList.remove('completedTask');
    } else {
      task.completeTask();
      taskCompleter.textContent = '✓';
      taskCompleter.classList.remove('uncompleted');
      taskCompleter.classList.add('completed');
      taskElement.classList.add('completedTask');
    }
  });
  if (task.completed) {
    taskCompleter.textContent = '✓';
    taskCompleter.classList.add('completed');
    taskElement.classList.add('completedTask');
  } else {
    taskCompleter.classList.add('uncompleted');
  }

  const changePriority = document.createElement('select');
  changePriority.classList.add('changePriorityButon');
  changePriority.innerHTML = ` 
  <option value="" disabled selected hidden>Priority:</option>
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>';`;
  changePriority.addEventListener('change', () => {
    const oldP = task.priority;
    task.changePriority(changePriority.value);
    taskElement.classList.remove(oldP);
    const newP = task.priority;
    taskElement.classList.add(newP);
  });

  taskElement.appendChild(changePriority);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('editTaskBtn');
  taskElement.appendChild(editButton);

  editButton.addEventListener('click', () => {
    if (document.querySelector('.taskNameInput')) {
      return; // prevent multiple edits and editing while a task is being added
    }
    const addTaskForm = document.querySelector('.taskAdderForm');
    createTaskInputControls(addTaskForm);
    populateForm(addTaskForm, task);
    addTaskForm.editing = true;
    addTaskForm.editingTaskElement = taskElement;
  });

  taskElement.appendChild(taskCompleter);
  if (task.priority) {
    const taskP = task.priority;
    taskElement.classList.add(taskP);
  }

  const taskDescriptionButton = document.createElement('button');
  taskDescriptionButton.textContent = '- Expand task';
  taskDescriptionButton.classList.add('taskDescriptionBtn');
  taskElement.appendChild(taskDescriptionButton);

  let descriptionAdded = false;

  const taskExpander = () => {
    taskDescriptionButton.addEventListener('click', () => {
      if (!descriptionAdded) {
        const taskDescription = document.createElement('p');
        taskDescription.innerText = task.description;
        taskDescription.classList.add('desc');
        taskElement.appendChild(taskDescription);
        descriptionAdded = true;
      } else {
        const taskDescription = taskElement.querySelector('.desc');
        taskElement.removeChild(taskDescription);
        descriptionAdded = false;
      }
    });
  };

  taskExpander();
  const deleteTask = () => {
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.innerText = 'X';
    taskDeleteBtn.classList.add('taskDeleteBtn');
    taskDeleteBtn.addEventListener('click', () => {
      removeTaskFromProject(projectName, task);
      taskElement.parentElement.removeChild(taskElement);
    });
    taskElement.appendChild(taskDeleteBtn);
  };

  deleteTask();

  function populateForm(form, task) {
    form.querySelector('.taskNameInput').value = task.title;
    form.querySelector('.taskDescriptionInput').value = task.description;
    form.querySelector('.taskDateInput').value = task.dueDate;
    form.querySelector('.taskPrioritySelector').value = task.priority;
  }
}
