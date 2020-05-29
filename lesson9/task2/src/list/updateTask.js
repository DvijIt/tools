import { setItem, getItem } from './storage';
import renderListItems from './renderListItems';
import { getTasksList, updateTaskData } from './taskGateway';

const listItem = document.querySelector('.list');

export const changeStatus = (e) => { // eslint-disable-line
  if (!e.target.classList.contains('list-item__checkbox')) return;

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList') || [];

  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done
      ? new Date().toISOString() : null,
  };
  updateTaskData(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
};
listItem.addEventListener('click', changeStatus);


// 1. Prepare data
// 2. Update data in db
// 3. Read new data from server
// 4. Save new data to fron-end storage
// 5. Update UI based on new data
