import LoginForm from '../components/LoginForm'

/** @param {HTMLElement} mountPoint */
export function loadLoginForm (mountPoint) {
  const el = LoginForm(() => {
    loadLoginForm(mountPoint)
  })
  mountPoint.replaceChildren(el)
}
