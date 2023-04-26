import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
  id: number
  title: string
}

let id = 1

function createTodo(title: string): Todo {
  const todo = {
    id: id++,
    title
  }
  return todo
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])

  function addTodo(title: string) {
    if (title.startsWith('reverse:')) {
      title = title.slice(8).split('').reverse().join('').trim()
    }
    const todo = createTodo(title)
    todos.value.push(todo)
    return todo
  }

  function removeTodo(id: Todo['id']) {
    todos.value = todos.value.filter((item) => item.id !== id)
  }
  return { todos, addTodo, removeTodo }
})
