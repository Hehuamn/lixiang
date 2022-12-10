import { initStore } from './lib/datastore'

import { loadHomeSections } from './pages/home'
import { loadWorkDetailContent } from './pages/workDetail'

function load () {
  const params = new URLSearchParams(window.location.search)

  const homeSections = document.getElementById('js-home-sections')
  if (homeSections) {
    loadHomeSections(homeSections)
  }

  const workDetailContent = document.getElementById('js-work-detail-content')
  const workId = params.get('id')
  if (workDetailContent && workId) {
    loadWorkDetailContent(workDetailContent, workId)
  }
}

initStore()

window.jsLoad = load
load()
