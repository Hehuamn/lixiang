import Section from './Section'

/**
 * @param {[import('../content/works').Work]} data
 * @returns {HTMLElement}
 */
export default function HomeWorkSection (data) {
  return Section({
    title: '衔华佩实，妙笔生花',
    items: data.slice(0, 3).map(({ title, author, content }) => ({
      type: 'poem',
      title,
      author,
      content
    })),
    moreDestination: 'works.html'
  })
}
