import { expect, it, vi } from 'vitest'
import { user } from './spy'

it('spy', () => {
  vi.spyOn(user, 'getUserName')
  user.getUserName()
  expect(user.getUserName).toBeCalled()
  expect(user.getUserName()).toBe('aa')
})
