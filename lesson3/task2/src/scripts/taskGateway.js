const baseUrl = 'https://5ec377e28ebdcc0016a5a8e4.mockapi.io/api/v1/taskList'

export const getTasksList = () => {
  return fetch(baseUrl).then(responce => responce.json())
}

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  })
}

export const updateTaskData = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedTaskData)
  })
}

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
}