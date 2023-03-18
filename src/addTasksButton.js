export default function addTaskButton(tasksContainer) {
  const taskAdderBtn = document.createElement('button');
  taskAdderBtn.classList.add('taskAdderBtn');
  taskAdderBtn.innerText = '+ Add a task';
  tasksContainer.appendChild(taskAdderBtn);

  taskAdderBtn.addEventListener('click', () => {
    const taskNameInput = document.createElement('input');
    taskNameInput.classList.add('taskNameInput');
    tasksContainer.appendChild(taskNameInput);

    return { addTaskButton, taskNameInput };
  });
}
