import { it } from 'vitest'
import { Message, Recipient, sendMessage } from './dummy'

it('dummy: 占位符, 解决类型报错', () => {
  const message: Message = {
    name: 'asdfas',
    message: 'asdfas'
  }
  // const  dummyRecipient: Recipient = {
  //   name: '',
  //   email: ''
  // }
  const dummyRecipient = {} as Recipient
  sendMessage(message, dummyRecipient)
})
