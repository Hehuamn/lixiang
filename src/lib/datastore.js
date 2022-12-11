import works from '../content/works'
import sharingData from '../content/sharing'

/**
 * @typedef {import('../content/works').Work} Work
 * @typedef {import('../content/sharing').Sharing} Sharing
 */

export function initStore () {
  if (!window.localStorage.getItem('works')) {
    window.localStorage.setItem('works', JSON.stringify(works))
  }
  if (!window.localStorage.getItem('sharing')) {
    window.localStorage.setItem('sharing', JSON.stringify(sharingData))
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
