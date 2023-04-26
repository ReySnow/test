import { Database, User } from './Databast'

export class UserService {
  constructor(private database: Database) {}

  createUser(name: string) {
    let id = Math.floor(Math.random() * 1000)
    const user: User = { id, name }
    this.database.addUser(user)
    return user
  }
  findUser(id: number) {
    return this.database.getUser(id)
  }
}
