import HomeWorkSection from '../components/HomeWorkSection'
import HomeSharingSection from '../components/HomeSharingSection'

/**
 * @param {HTMLElement} mountPoint
 * @param {{ works: [import('../content/works').Work], sharing: [import('../content/sharing').Sharing] }} data
 */
export function loadHomeSections (mountPoint, data) {
  const workSection = HomeWorkSection(data.works)
  const sharingSection = HomeSharingSection(data.sharing)

  mountPoint.replaceChildren(workSection, sharingSection)
}
