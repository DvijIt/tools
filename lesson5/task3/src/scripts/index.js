import {setItem} from './storage.js'
import {renderListItems} from './renderListItems.js'
import {} from './createTask.js'
import {} from './updateTask.js'
import { getTasksList } from './taskGateway.js'
import {} from './deleteTask.js'



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
