// const todoInput = document.getElementById('todo-input');
// const addBtn = document.getElementById('add-btn');
// const todoList = document.getElementById('todo-list');

// // Add a new task
// addBtn.addEventListener('click', () => {
//   const taskText = todoInput.value.trim();
//   if (taskText === '') {
//     alert('Please enter a task!');
//     return;
//   }

//   const listItem = document.createElement('li');
//   listItem.className = 'todo-item';

//   const taskSpan = document.createElement('span');
//   taskSpan.textContent = taskText;
//   taskSpan.addEventListener('click', () => {
//     listItem.classList.toggle('completed');
//   });

//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = 'Delete';
//   deleteBtn.className = 'delete-btn';
//   deleteBtn.addEventListener('click', () => {
//     todoList.removeChild(listItem);
//   });

//   listItem.appendChild(taskSpan);
//   listItem.appendChild(deleteBtn);
//   todoList.appendChild(listItem);

//   todoInput.value = '';
// });

// // Allow pressing Enter to add a task
// todoInput.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     addBtn.click();
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');
  const clearAllBtn = document.getElementById('clearAll');

  addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          const li = document.createElement('li');
          li.textContent = taskText;

          li.addEventListener('click', () => {
              li.classList.toggle('completed');
          });

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.classList.add('delete-btn');
          deleteBtn.addEventListener('click', () => {
              li.remove();
          });

          li.appendChild(deleteBtn);
          taskList.appendChild(li);

          taskInput.value = '';
      }
  });

  clearAllBtn.addEventListener('click', () => {
      taskList.innerHTML = '';
  });
});