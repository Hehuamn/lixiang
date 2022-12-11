import works from '../content/works'
import sharingData from '../content/sharing'
import users from '../content/users'

/**
 * @typedef {import('../content/works').Work} Work
 * @typedef {import('../content/sharing').Sharing} Sharing
 * @typedef {import('../content/users').User} User
 */

export function initStore () {
  if (!window.localStorage.getItem('works')) {
    window.localStorage.setItem('works', JSON.stringify(works))
  }
  if (!window.localStorage.getItem('sharing')) {
    window.localStorage.setItem('sharing', JSON.stringify(sharingData))
  }
  if (!window.localStorage.getItem('users')) {
    window.localStorage.setItem('users', JSON.stringify(users))
  }
}

/** @returns {[Work]} */
export function fetchAllWorks () {
  return JSON.parse(window.localStorage.getItem('works'))
}

/** @returns {[Sharing]} */
export function fetchAllSharing () {
  return JSON.parse(window.localStorage.getItem('sharing'))
}

/** @returns {[User]} */
export function fetchAllUsers () {
  return JSON.parse(window.localStorage.getItem('users'))
}

/**
 * @param {string} id
 * @returns {Work}
 */
export function fetchWorkById (id) {
  return fetchAllWorks().find((work) => work.id === id)
}

/**
 * @param {string} id
 * @param {Work} fieldsToUpdate
 */
export function updateWorkById (id, fieldsToUpdate) {
  const allWorks = fetchAllWorks()
  const newWorks = allWorks.map((work) => {
    if (work.id === id) {
      return { ...work, ...fieldsToUpdate }
    } else {
      return work
    }
  })
  window.localStorage.setItem('works', JSON.stringify(newWorks))
}

/** @param {string} id */
export function removeWorkById (id) {
  const allWorks = fetchAllWorks()
  const newWorks = allWorks.filter((work) => work.id !== id)
  window.localStorage.setItem('works', JSON.stringify(newWorks))
}

/**
 * @param {Work} newWork
 */
export function createWork (newWork) {
  const allWorks = fetchAllWorks()
  allWorks.push(newWork)
  window.localStorage.setItem('works', JSON.stringify(allWorks))
}

/**
 * @param {Sharing} newSharing
 */
export function createSharing (newSharing) {
  const allSharing = fetchAllSharing()
  allSharing.push(newSharing)
  window.localStorage.setItem('sharing', JSON.stringify(allSharing))
}

/** @param {string} id */
export function removeSharingById (id) {
  const allSharing = fetchAllSharing()
  const newSharing = allSharing.filter((sharing) => sharing.id !== id)
  window.localStorage.setItem('sharing', JSON.stringify(newSharing))
}

/** @returns {boolean} */
export function isLoggedIn () {
  return window.localStorage.getItem('loggedIn') === 'true'
}

/**
 * @param {string} username
 * @param {string} password
 * @returns {boolean}
 */
export function login (username, password) {
  const users = fetchAllUsers()
  const result = !!users.find(
    (u) => u.username === username && u.password === password
  )
  window.localStorage.setItem('loggedIn', result.toString())
  return result
}

export function logout () {
  window.localStorage.setItem('loggedIn', 'false')
}
