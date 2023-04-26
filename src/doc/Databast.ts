export interface User {
  name: string
  id: number
}

export class Database {
  private users: User[]
  constructor() {
    this.users = []
  }

  addUser(user: User) {
    this.users.push(user)
  }

  getUser(id: number) {
    return this.users.find((user) => user.id === id)
  }
}
