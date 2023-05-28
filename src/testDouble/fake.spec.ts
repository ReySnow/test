import { expect, it, vi } from 'vitest'
import { addListener, initSocket } from './fake'

type Listen = (...args: any[]) => void

class FakeSocket {
  private listeners: { [key: string]: Listen[] } = {}

  on(enven: string, listener: Listen) {
    if (this.listeners[enven] === undefined) {
      this.listeners[enven] = []
    }
    this.listeners[enven].push(listener)
  }

  trigger(enven: string, ...args: any[]) {
    const eventListeners = this.listeners[enven]
    if (eventListeners) {
      eventListeners.forEach((listener) => {
        listener(...args)
      })
    }
  }
}

function io() {
  return new FakeSocket()
}

vi.mock('socket.io-client', () => {
  return {
    default: io
  }
})

it('fake: 伪造对象', () => {
  const listener = vi.fn()
  const socket = initSocket()

  addListener(listener)

  socket.trigger('message', 'hi')
  expect(listener).toBeCalledWith('hi')
})
