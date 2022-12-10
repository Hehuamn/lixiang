import WorkDetailContent from '../components/WorkDetailContent'

import { fetchWorkById } from '../lib/datastore'

/**
 * @param {HTMLElement} mountPoint
 * @param {string} id
 */
export function loadWorkDetailContent (mountPoint, id) {
  const content = WorkDetailContent(fetchWorkById(id))

  mountPoint.replaceChildren(content)
}
