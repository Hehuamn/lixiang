import { createSharing } from '../lib/datastore'

/**
 * @param {() => void} onAddSharing
 * @returns {HTMLElement}
 */
export default function AddSharing (onAddSharing) {
  const form = document.createElement('form')
  form.action = '#'
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new window.FormData(form)
    /** @type {import('../content/sharing').Sharing} */
    const newSharing = {
      id: Math.random().toString(36).split('.')[1],
      content: formData.get('content'),
      workTitle: formData.get('work-title'),
      workId: formData.get('work-id')
    }
    createSharing(newSharing)
    onAddSharing()
  })

  const textarea = document.createElement('textarea')
  textarea.id = 'content'
  textarea.name = 'content'
  textarea.placeholder = '分享风雅'

  const workTitle = document.createElement('input')
  workTitle.type = 'text'
  workTitle.id = 'work-title'
  workTitle.name = 'work-title'
  workTitle.placeholder = '出处'

  const workId = document.createElement('input')
  workId.type = 'text'
  workId.id = 'work-id'
  workId.name = 'work-id'
  workId.placeholder = '关联作品ID'

  const metadataContainer = document.createElement('div')
  metadataContainer.style = 'display: flex; gap: 1em; padding-bottom: 1em;'
  metadataContainer.append(workTitle, workId)

  const submitButton = document.createElement('input')
  submitButton.type = 'submit'
  submitButton.value = '提交'

  form.append(
    textarea,
    document.createElement('br'),
    metadataContainer,
    submitButton
  )

  return form
}
