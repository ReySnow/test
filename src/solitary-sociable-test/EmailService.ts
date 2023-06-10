import axios from 'axios'

export function sendEmail() {
  axios.get('http://localhost:3000/api/sendEmail')
}
