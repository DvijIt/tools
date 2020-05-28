import { setItem } from './storage.js';
import { getTasksList, deleteTask } from './taskGateway.js';
import { renderListItems } from './renderListItems.js'

const listItem = document.querySelector('.list');

const onDeleteTask = e => {

  if (!e.target.classList.contains('list-item__delete-btn')) return;
   const taskId = e.target.parentNode.dataset.id;

   return deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderListItems();
    });

}

listItem.addEventListener('click', onDeleteTask)

// 1. Prepare data
// 2. Update data in db
// 3. Read new data from server
// 4. Save new data to fron-end storage
// 5. Update UI based on new data