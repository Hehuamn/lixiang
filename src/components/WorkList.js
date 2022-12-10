/**
 * @param {[import('../content/works').Work]} data
 * @returns {HTMLElement}
 */
export default function WorkList (data) {
  const ul = document.createElement('ul')
  const items = data.map((work) => {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.href = `workdetail.html?id=${work.id}`
    link.textContent = work.title ?? '未名'
    item.append(link)
    return item
  })
  ul.append(...items)

  return ul
}
