/**
 * @param {[import('../content/sharing').Sharing]} data
 * @returns {HTMLElement}
 */
export default function SharingList (data) {
  const ul = document.createElement('ul')
  const items = data.map((sharing) => {
    const li = document.createElement('li')
    li.textContent = `${sharing.content}——`
    const link = document.createElement('a')
    link.href = `workdetail.html?id=${sharing.workId}`
    link.textContent = sharing.workTitle
    li.append(link)
    return li
  })
  ul.append(...items)

  return ul
}
