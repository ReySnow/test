import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useTodoStore } from '../stores/todos'

describe('todos', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('todo create', () => {
    const todoStore = useTodoStore()

    todoStore.addTodo('学习')

    expect(todoStore.todos[0].title).toEqual('学习')
  })

  it('todo remove', () => {
    const todoStore = useTodoStore()
    const todo = todoStore.addTodo('学习')

    todoStore.removeTodo(todo.id)

    expect(todoStore.todos.length).toBe(0)
  })

  it('todo with command reverse', () => {
    const todoStore = useTodoStore()

    todoStore.addTodo('reverse: heihei')

    expect(todoStore.todos[0].title).toEqual('iehieh')
  })
})
