export class User {
  id: number
  constructor(id: number) {
    this.id = id
  }
  fetchData(callback: (data: string) => void, delay: number): void {
    setTimeout(() => {
      const data = `id: ${this.id}`
      callback(data)
    }, delay)
  }
  fetchDataV2(callback: (data: string) => void): void {
    setTimeout(() => {
      const data = `id: ${this.id}`
      callback(data)
    }, 1000)
  }
}
