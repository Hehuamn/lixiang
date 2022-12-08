import Section from './Section'

/**
 * @param {[import('../content/sharing').Sharing]} data
 * @returns {HTMLElement}
 */
export default function HomeSharingSection (data) {
  return Section({
    title: '曲水流觞，只论风雅',
    items: [
      {
        type: 'list',
        items: data
          .slice(0, 4)
          .map(({ content, workTitle }) => `${content}——${workTitle}`)
      }
    ],
    moreDestination: '/sharing.html'
  })
}
