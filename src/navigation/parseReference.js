import { latestJSVersion } from './meta'

export const parseReference = (title, reference) => {
  let targetReference
  reference.forEach((refItem) => {
    if (refItem.title === latestJSVersion) {
      targetReference = {
        title,
        children: refItem.links,
      }
    }
  })
  return targetReference
}
