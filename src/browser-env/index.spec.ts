import { it } from 'vitest'

it('should browser env', () => {
  console.log(localStorage.getItem('name'))
})
