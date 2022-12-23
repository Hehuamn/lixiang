import SectionItem from './SectionItem'

/** @typedef {{ title: string, items: [import('./SectionItem').SectionItemData], moreDestination: string }} SectionData */

/**
 * @param {SectionData} data
 * @returns {HTMLElement}
 */
export default function Section (data) {
  const container = document.createElement('section')
  container.classList.add('section')
  container.classList.add('fade-in')

  const title = document.createElement('h2')
  title.classList.add('section-title')
  title.textContent = data.title

  const items = data.items.map((item) => SectionItem(item))

  const moreLink = document.createElement('a')
  moreLink.href = data.moreDestination
  moreLink.textContent = 'more'
  const moreP = document.createElement('p')
  moreP.appendChild(moreLink)

  container.append(title, ...items, moreP)
  return container
}
