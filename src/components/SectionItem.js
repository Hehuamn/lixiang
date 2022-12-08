/**
 * @typedef {{ type: 'poem', title: string, author: string, content: [string] }} SectionItemPoem
 * @typedef {{ type: 'list', items: [string] }} SectionItemList
 * @typedef {SectionItemPoem | SectionItemList} SectionItemData
 */

/** @param {HTMLElement} container */
function setupContainerStyle (container) {
  container.classList.add('section-item')
}

/**
 * @param {SectionItemData} data
 * @returns {HTMLElement}
 */
export default function SectionItem (data) {
  switch (data.type) {
    case 'poem': {
      const container = document.createElement('article')
      setupContainerStyle(container)

      const title = document.createElement('h3')
      title.textContent = data.title

      const author = document.createElement('p')
      author.classList.add('author')
      author.textContent = data.author

      const content = data.content.map((line) => {
        const lineElement = document.createElement('p')
        lineElement.textContent = line
        return lineElement
      })

      container.append(title, author, ...content)
      return container
    }
    case 'list': {
      const container = document.createElement('ul')
      setupContainerStyle(container)

      const content = data.items.map((item) => {
        const itemElement = document.createElement('li')
        itemElement.textContent = item
        return itemElement
      })

      container.append(...content)
      return container
    }
  }
}
