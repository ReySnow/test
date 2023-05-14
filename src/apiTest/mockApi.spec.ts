import axios from 'axios'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useTodoStore } from './todoStore'

// 直接 mock axios
vi.mock('axios')

describe('todos mock axios', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('todo create', async () => {
    // vi.mocked(axios.post).mockResolvedValue({
    //   data: { data: { todo: { id: 1, title } }, state: true }
    // })
    vi.mocked(axios.post).mockImplementation((path, { title }: any) => {
      // console.log(path, title)
      return Promise.resolve({
        data: { data: { todo: { id: 1, title } }, state: true }
      })
    })
    const todoStore = useTodoStore()
    const title = '学习'

    await todoStore.addTodo(title)

    expect(todoStore.todos[0].title).toEqual(title)
    // 行为验证
    // expect(axios.post).toBeCalledWith('/api/addTodo', { title })
  })

  it('todo remove', async () => {
    vi.mocked(axios.post).mockImplementationOnce((path, { title }: any) => {
      // console.log(path, title)
      return Promise.resolve({
        data: { data: { todo: { id: 1, title } }, state: true }
      })
    })
    vi.mocked(axios.post).mockImplementationOnce((path, { id }: any) => {
      return Promise.resolve({
        data: { data: { id }, state: true }
      })
    })
    const todoStore = useTodoStore()
    const todo = await todoStore.addTodo('学习')

    await todoStore.removeTodo(todo.id)

    expect(todoStore.todos.length).toBe(0)
  })
})
