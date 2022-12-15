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
    li.textContent = `${sharing.content}——`

    const link = document.createElement('a')
    link.href = `workdetail.html?id=${sharing.workId}`
    link.textContent = sharing.workTitle
    li.append(link)

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
