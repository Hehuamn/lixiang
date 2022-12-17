import { isLoggedIn, login, logout } from '../lib/datastore'

/**
 * @param {() => void} onLogInStateChange
 * @returns {HTMLElement}
 */
export default function LoginForm (onLogInStateChange) {
  if (isLoggedIn()) {
    const p = document.createElement('p')
    p.textContent = '您已登录。'

    const logoutButton = document.createElement('button')
    logoutButton.textContent = '退出登录'
    logoutButton.addEventListener('click', () => {
      logout()
      onLogInStateChange()
    })

    p.append(logoutButton)
    return p
  } else {
    const form = document.createElement('form')
    form.action = '#'

    const usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.id = 'username'
    usernameInput.name = 'username'
    usernameInput.value = 'test'
    usernameInput.placeholder = '用户名'

    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'password'
    passwordInput.name = 'password'
    passwordInput.value = 'test123'
    passwordInput.placeholder = '密码'

    const loginErrorP = document.createElement('p')
    loginErrorP.textContent = ''

    const loginButton = document.createElement('input')
    loginButton.type = 'submit'
    loginButton.value = '登录'

    form.append(
      usernameInput,
      document.createElement('br'),
      passwordInput,
      loginErrorP,
      loginButton
    )
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const formData = new window.FormData(form)
      const loginResult = login(
        formData.get('username'),
        formData.get('password')
      )
      if (loginResult) {
        onLogInStateChange()
      } else {
        loginErrorP.textContent = '用户名或密码错误。'
        passwordInput.value = ''
        passwordInput.focus()
      }
    })

    return form
  }
}
