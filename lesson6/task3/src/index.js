import {setItem} from './list/storage.js'
import {renderListItems} from './list/renderListItems.js'
import {} from './list/createTask.js'
import {} from './list/updateTask.js'
import { getTasksList } from './list/taskGateway.js'
import {} from './list/deleteTask.js'
import './index.scss';


document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then(tasksList => {
      setItem('tasksList', tasksList);
      renderListItems()
    })
})

const onStorageChange = e => {
  if (e.key === "tasksList") renderListItems()
}

window.addEventListener('storage', onStorageChange);
