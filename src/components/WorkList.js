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
      removeButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 1.25em; height: 1.25em;"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" /></svg>' // Trash can icon.
      removeButton.style =
        'appearance: none; color: #ef4444; border: none; background: transparent;'
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
