import { fetchAllSharing, removeSharingById } from '../lib/datastore'

import SharingList from '../components/SharingList'
import AddSharing from '../components/AddSharing'

/** @param {HTMLElement} mountPoint */
export function loadSharingList (mountPoint) {
  const allSharing = fetchAllSharing()
  const el = SharingList(allSharing, (id) => {
    removeSharingById(id)
    loadSharingList(mountPoint)
  })
  mountPoint.replaceChildren(el)
  mountPoint.appendChild(AddSharing(() => loadSharingList(mountPoint)))
}
