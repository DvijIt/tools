import { setItem } from './list/storage';
import renderListItems from './list/renderListItems';
import {} from './list/createTask';
import {} from './list/updateTask';
import { getTasksList } from './list/taskGateway';
import {} from './list/deleteTask';
import './index.scss';


document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderListItems();
    });
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') renderListItems();
};

window.addEventListener('storage', onStorageChange);
