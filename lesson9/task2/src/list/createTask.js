import { setItem } from './storage';
import renderListItems from './renderListItems';
import { getTasksList, createTask } from './taskGateway';

const taskCreateBtn = document.querySelector('.create-task-btn');

const onCreateTask = () => { // eslint-disable-line consistent-return
  const taskInput = document.querySelector('.task-input');
  const text = taskInput.value;

  if (!text) return false;
  taskInput.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
};

taskCreateBtn.addEventListener('click', onCreateTask);

// 1. Prepare data
// 2. Write data in db
// 3. Read new data from server
// 4. Save new data to fron-end storage
// 5. Update UI based on new data
