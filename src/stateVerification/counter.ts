export class Counter {
  private count: number
  constructor() {
    this.count = 0
  }
  increment() {
    this.count++
  }
  getCounter() {
    return this.count
  }
}

let count = 0

export function increment() {
  count++
}

export function getCounter() {
  return count
}

export function reset() {
  count = 0
}
