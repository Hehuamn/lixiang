/**
 * @param {import('../content/works').Work} data
 * @returns {HTMLElement}
 */
export default function WorkDetailContent (data) {
  const container = document.createElement('article')

  const title = document.createElement('h1')
  title.classList.add('section-title')
  title.textContent = data.title

  const poemContainer = document.createElement('div')
  poemContainer.classList.add('poem')

  const innerTitle = document.createElement('h2')
  innerTitle.textContent = data.title

  const authorLine = document.createElement('p')
  authorLine.textContent = data.author
  authorLine.style = 'color: #4e0894e3;'

  const contentElements = (data.content ?? []).map((c) => {
    const el = document.createElement('p')
    el.textContent = c
    return el
  })

  const commentSection = document.createElement('div')
  commentSection.classList.add('zhushi')

  const authorDescTitle = document.createElement('h4')
  authorDescTitle.textContent = '作者：'

  const authorDesc = document.createElement('p')
  authorDesc.textContent = data.authorDesc

  const commentTitle = document.createElement('h4')
  commentTitle.textContent = '注：'

  const commentContainer = document.createElement('ol')
  const comments = (data.comments ?? []).map((c) => {
    const el = document.createElement('li')
    const pre = document.createElement('pre')
    pre.textContent = c
    pre.style = 'font: inherit; white-space: pre-wrap;'
    el.append(pre)
    return el
  })
  commentContainer.append(...comments)

  const editLine = document.createElement('p')
  const editLink = document.createElement('a')
  editLink.href = `workedit.html?id=${data.id}`
  editLink.textContent = '诗词有误，编辑反馈。'
  editLine.append(editLink)

  commentSection.append(
    authorDescTitle,
    authorDesc,
    commentTitle,
    commentContainer
  )

  poemContainer.append(
    innerTitle,
    document.createElement('br'),
    authorLine,
    document.createElement('br'),
    ...contentElements,
    document.createElement('br'),
    commentSection
  )

  container.append(
    title,
    document.createElement('br'),
    poemContainer,
    document.createElement('br'),
    editLine
  )

  return container
}
