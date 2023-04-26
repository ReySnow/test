import { describe, expect, it, vi } from 'vitest'
import { Database } from './Databast'
import { UserService } from './UserService'

describe('user service 状态验证', () => {
  it('should create user 状态验证', () => {
    const database = new Database()
    const userService = new UserService(database)
    const user = userService.createUser('hh')

    expect(userService.findUser(user.id)?.name).toBe('hh')
  })

  it.skip('should create user 行为验证', () => {
    const database = new Database()
    vi.spyOn(database, 'addUser')
    // console.log(database.addUser)

    const userService = new UserService(database)
    userService.createUser('hh')
    expect(database.addUser).toBeCalled()
    expect(database.addUser).toBeCalledTimes(1)
  })
})
