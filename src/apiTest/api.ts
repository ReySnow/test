import axios from 'axios'

export function fetchTodoList() {
  return axios.get('/api/todoList').then((res) => {
    return res.data
  })
}

export function fetchAddTodo(title: string) {
  return axios
    .post('/api/addTodo', {
      title
    })
    .then((res) => {
      return res.data
    })
}

export function fetchRemoveTodo(id: number) {
  return axios
    .post('/api/removeTodo', {
      id
    })
    .then((res) => {
      return res.data
    })
}
