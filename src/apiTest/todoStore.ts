import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from './api'

interface Todo {
  id: number
  title: string
}

function createTodo(id: number, title: string): Todo {
  const todo = {
    id,
    title
  }
  return todo
}

export const useTodoStore = defineStore('todoApi', () => {
  const todos = ref<Todo[]>([])

  async function updateTodoList() {
    const { data } = await fetchTodoList()
    todos.value = data
  }

  async function addTodo(title: string) {
    const { data, state } = await fetchAddTodo(title)
    const todo = createTodo(data.todo.id, data.todo.title)
    if (state) {
      todos.value.push(todo)
    }
    return todo
  }

  async function removeTodo(id: Todo['id']) {
    const { data, state } = await fetchRemoveTodo(id)
    console.log('data', data)

    const todoItem = findTodoItem(data.id)
    if (state) {
      if (todoItem) {
        todos.value = todos.value.filter((item) => item.id !== id)
      }
    }
    return todoItem
  }

  function findTodoItem(id: Todo['id']) {
    return todos.value.find((item) => item.id === id)
  }

  return { todos, addTodo, removeTodo, updateTodoList }
})
