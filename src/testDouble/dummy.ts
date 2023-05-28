export interface Message {
  name: string
  message: string
}

export interface Recipient {
  name: string
  email: string
}

export function sendMessage(message: Message, recipient: Recipient) {
  console.log(message.name + message.message)
}
