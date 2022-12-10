import { initStore } from './lib/datastore'

import { loadHomeSections } from './pages/home'
import { loadWorkDetailContent } from './pages/workDetail'
import { prepareWorkEditForm } from './pages/workEdit'

function load () {
  const params = new URLSearchParams(window.location.search)
  const workId = params.get('id')

  const homeSections = document.getElementById('js-home-sections')
  if (homeSections) {
    loadHomeSections(homeSections)
    return
  }

  const workDetailContent = document.getElementById('js-work-detail-content')
  if (workDetailContent && workId) {
    loadWorkDetailContent(workDetailContent, workId)
    return
  }

  const workEditTitle = document.getElementById('js-work-edit-title')
  const workEditForm = document.getElementById('js-work-edit-form')
  if (workEditTitle && workEditForm) {
    prepareWorkEditForm(workEditTitle, workEditForm, workId)
  }
}

initStore()

window.jsLoad = load
load()
