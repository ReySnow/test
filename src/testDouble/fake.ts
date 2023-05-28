import io from 'socket.io-client'

type Listen = (...arg: any[]) => void

const listeners: Listen[] = []

export function initSocket() {
  const socket = new io('localhost:8000')

  socket.on('message', (msg: any) => {
    listeners.forEach((listener) => {
      listener(msg)
    })
  })

  return socket
}

export function addListener(listen: Listen) {
  listeners.push(listen)
}
