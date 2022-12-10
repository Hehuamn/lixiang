import works from '../content/works'
import sharingData from '../content/sharing'

export function initStore () {
  if (!window.localStorage.getItem('works')) {
    window.localStorage.setItem('works', JSON.stringify(works))
  }
  if (!window.localStorage.getItem('sharing')) {
    window.localStorage.setItem('sharing', JSON.stringify(sharingData))
  }
}

/** @returns {[import('../content/works').Work]} */
export function fetchAllWorks () {
  return JSON.parse(window.localStorage.getItem('works'))
}

/** @returns {[import('../content/sharing').Sharing]} */
export function fetchAllSharing () {
  return JSON.parse(window.localStorage.getItem('sharing'))
}

/**
 * @param {string} id
 * @returns {import('../content/works').Work}
 */
export function fetchWorkById (id) {
  return fetchAllWorks().find((work) => work.id === id)
}
