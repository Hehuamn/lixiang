import sharingContent from './content/sharing'
import worksContent from './content/works'
import { loadHomeSections } from './pages/home'

function load () {
  const homeSections = document.getElementById('js-home-sections')
  if (homeSections) {
    loadHomeSections(homeSections, {
      works: worksContent,
      sharing: sharingContent
    })
  }
}

window.jsLoad = load
load()
