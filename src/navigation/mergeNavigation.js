import { navigation } from './docs'
import { navigation as reference } from './jsreference'

const mergeNavAndRef = (navigation, reference) => {
  let targetReference

  reference.forEach((refItem) => {
    if (refItem.title === 'support-new-docs') {
      targetReference = {
        title: 'JS Task API Reference',
        children: refItem.links,
      }
    }
  })

  return navigation.map((navItem) => {
    if (navItem.title === 'Create on Golem') {
      return {
        ...navItem,
        links: navItem.links.map((link) => {
          if (link.title === 'JavaScript') {
            return {
              ...link,
              children: [...link.children, targetReference],
            }
          }
          return link
        }),
      }
    }
    return navItem
  })
}

export let mergednavs = mergeNavAndRef(navigation, reference)
