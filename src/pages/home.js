import HomeWorkSection from '../components/HomeWorkSection'
import HomeSharingSection from '../components/HomeSharingSection'

import { fetchAllWorks, fetchAllSharing } from '../lib/datastore'

/**
 * @param {HTMLElement} mountPoint
 */
export function loadHomeSections (mountPoint) {
  const workSection = HomeWorkSection(fetchAllWorks())
  const sharingSection = HomeSharingSection(fetchAllSharing())

  mountPoint.replaceChildren(workSection, sharingSection)
}
