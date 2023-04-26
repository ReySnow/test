import { clogin } from 'tlogin'

export function login(username: string) {
  clogin(username)
}

const state = {
  string: ''
}

export function loginV2(username: string) {
  const isLogin = clogin(username)
  if (isLogin) {
    state.string = '登录成功'
  }
}

export function getTip() {
  return state.string
}
