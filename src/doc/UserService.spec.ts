import { describe, expect, it, vi } from 'vitest'
import { Database } from './Databast'
import { UserService } from './UserService'

describe('user service 行为验证', () => {
  it('should create user', () => {
    const database = new Database()
    vi.spyOn(database, 'addUser')
    // console.log(database.addUser)

    const userService = new UserService(database)
    userService.createUser('hh')
    expect(database.addUser).toBeCalled()
    expect(database.addUser).toBeCalledTimes(1)
  })
})
