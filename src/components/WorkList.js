import { isLoggedIn } from '../lib/datastore'

/**
 * @param {[import('../content/works').Work]} data
 * @param {(string) => void} onWorkRemoval
 * @returns {HTMLElement}
 */
export default function WorkList (data, onWorkRemoval) {
  const ul = document.createElement('ul')
  const items = data.map((work) => {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.href = `workdetail.html?id=${work.id}`
    link.textContent = work.title ?? '未名'
    item.append(link)

    if (isLoggedIn()) {
      const removeButton = document.createElement('button')
      removeButton.textContent = '刪除'
      removeButton.addEventListener('click', (e) => {
        if (window.confirm(`要刪除${work.title}吗？`)) {
          onWorkRemoval(work.id)
        }
      })
      item.append(removeButton)
    }

    return item
  })
  ul.append(...items)

  return ul
}
