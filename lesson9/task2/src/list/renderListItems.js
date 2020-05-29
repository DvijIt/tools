import { getItem } from './storage';
import './list.scss';

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');

  return checkboxElem;
};

const createDeleteBtn = () => {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('list-item__delete-btn');

  return deleteBtn;
};

const createListItems = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.setAttribute('data-id', id);
  listItemElem.classList.add('list-item');

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const checkbox = createCheckbox({ done, id });
  const deleteBtn = createDeleteBtn();

  listItemElem.append(checkbox, textElem, deleteBtn);
  return listItemElem;
};

export default () => {
  const taskList = getItem('tasksList') || [];
  const listElem = document.querySelector('.list');
  const listItemsElems = taskList
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => createListItems({ text, done, id }));

  listElem.innerHTML = '';
  listElem.append(...listItemsElems);
};
