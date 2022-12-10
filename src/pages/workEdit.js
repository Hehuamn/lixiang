import { fetchWorkById, updateWorkById, createWork } from '../lib/datastore'

/**
 * @param {HTMLHeadingElement} titleEl
 * @param {HTMLFormElement} formEl
 * @param {string} workId
 */
export function prepareWorkEditForm (titleEl, formEl, workId) {
  const workData = fetchWorkById(workId)

  const handleFormSubmission = (e) => {
    e.preventDefault()
    const formData = new window.FormData(formEl)
    /** @type {import('../content/works').Work} */
    const newWorkData = {
      title: formData.get('title'),
      author: formData.get('author'),
      content: formData.get('content')?.split('\n'),
      authorDesc: formData.get('author-desc'),
      comments: formData.get('comments')?.split('\n\n'),
      publishedIn: formData.get('published-in')
    }

    if (workData && workData.id) {
      newWorkData.id = workData.id
      updateWorkById(workData.id, newWorkData)
    } else {
      newWorkData.id = Math.random().toString(36).split('.')[1]
      createWork(newWorkData)
    }

    console.log(newWorkData.id)
    window.location.href = `workdetail.html?id=${newWorkData.id}`
  }

  if (workData) {
    document.getElementById('title').value = workData.title ?? ''
    document.getElementById('author').value = workData.author ?? ''
    document.getElementById('content').value = (workData.content ?? []).join(
      '\n'
    )
    document.getElementById('author-desc').value = workData.authorDesc ?? ''
    document.getElementById('comments').value = (workData.comments ?? []).join(
      '\n\n'
    )
    document.getElementById('published-in').value = workData.publishedIn ?? ''
  }

  titleEl.textContent = workData ? '编辑' : '新增'
  formEl.addEventListener('submit', handleFormSubmission)
}
