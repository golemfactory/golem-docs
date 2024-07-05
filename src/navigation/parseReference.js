import { latestJSVersion } from './meta'

export const parseReference = (title, reference, language = 'en') => {
  let targetReference
  reference.forEach((refItem) => {
    if (refItem.title === latestJSVersion) {
      const langLinks = refItem.links.find((link) => link.lang === language)
      if (langLinks) {
        targetReference = {
          title,
          children: langLinks.links,
        }
      }
    }
  })
  return targetReference
}
