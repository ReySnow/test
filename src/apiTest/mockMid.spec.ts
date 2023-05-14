import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from './api'
import { useTodoStore } from './todoStore'

// mock 中间层
vi.mock('./api')

describe('todos mock api', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('todo create', async () => {
    vi.mocked(fetchAddTodo).mockImplementation((title) => {
      return Promise.resolve({
        data: { todo: { id: 1, title } },
        state: true
      })
    })
    const todoStore = useTodoStore()
    const title = '学习'

    await todoStore.addTodo(title)

    expect(todoStore.todos[0].title).toEqual(title)
  })

  it('todo remove', async () => {
    vi.mocked(fetchAddTodo).mockImplementationOnce((title) => {
      return Promise.resolve({
        data: { todo: { id: 1, title } },
        state: true
      })
    })
    vi.mocked(fetchRemoveTodo).mockImplementationOnce((id) => {
      return Promise.resolve({
        data: { id },
        state: true
      })
    })
    const todoStore = useTodoStore()
    const todo = await todoStore.addTodo('学习')

    await todoStore.removeTodo(todo.id)

    expect(todoStore.todos.length).toBe(0)
  })

  it('todo updateTodo', async () => {
    const todoList = [{ title: '学习', id: 1 }]
    vi.mocked(fetchTodoList).mockResolvedValue({ data: todoList })

    const todoStore = useTodoStore()

    await todoStore.updateTodoList()

    expect(todoStore.todos[0].title).toEqual('学习')
    expect(todoStore.todos.length).toBe(1)
  })
})
