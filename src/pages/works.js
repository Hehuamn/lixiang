import { fetchAllWorks, removeWorkById } from '../lib/datastore'
import WorkList from '../components/WorkList'

/** @param {HTMLElement} mountPoint */
export function loadWorkList (mountPoint) {
  const works = fetchAllWorks()
  const workList = WorkList(works, (id) => {
    removeWorkById(id)
    loadWorkList(mountPoint)
  })
  mountPoint.replaceChildren(workList)
}
