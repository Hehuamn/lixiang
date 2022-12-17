import { isLoggedIn } from '../lib/datastore'

/**
 * @param {[import('../content/sharing').Sharing]} data
 * @param {(string) => void} onSharingRemoval
 * @returns {HTMLElement}
 */
export default function SharingList (data, onSharingRemoval) {
  const ul = document.createElement('ul')
  const items = data.map((sharing) => {
    const li = document.createElement('li')
    li.style = 'color: rgba(0, 0, 0, 0.5);'

    const p = document.createElement('p')
    p.textContent = `${sharing.content}`
    p.style = 'color: black;'

    const dash = document.createElement('span')
    dash.style = 'margin-left: 1em; color: rgba(0, 0, 0, 0.5);'
    dash.textContent = '——'

    const link = document.createElement('a')
    link.href = `workdetail.html?id=${sharing.workId}`
    link.textContent = sharing.workTitle
    p.append(dash, link)

    li.append(p)

    if (isLoggedIn()) {
      const removeButton = document.createElement('button')
      removeButton.textContent = '刪除'
      removeButton.addEventListener('click', (e) => {
        if (window.confirm(`要刪除吗？\n${sharing.content}`)) {
          onSharingRemoval(sharing.id)
        }
      })
      li.append(removeButton)
    }

    return li
  })
  ul.append(...items)

  return ul
}
