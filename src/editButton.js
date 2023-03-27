export default function createEditButton(task, taskElement, createAddTaskForm) {
  const editButton = document.createElement('button');
  taskElement.appendChild(editButton);
  editButton.addEventListener('click', () => {
    createAddTaskForm();
  });
}
