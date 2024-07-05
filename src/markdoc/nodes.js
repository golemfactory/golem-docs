import { nodes as defaultNodes } from '@markdoc/markdoc'

import { Fence } from '@/components/Fence'
import { Heading } from '@/components/Heading'
import { Tag } from '@markdoc/markdoc'
import { LocalizedLink } from '@/components/LocalizedLink'

import { slugifyWithCounter } from '@sindresorhus/slugify'

const slugify = slugifyWithCounter()

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id
  }

  const content = children
    .map((child) =>
      typeof child === 'object' && child.$$mdtype === 'Tag'
        ? child.children.join(' ')
        : child
    )
    .join(' ')
    .replace(/[?]/g, '') // Remove any question marks

  return slugify(content) // Use slugify for the conversion
}

const nodes = {
  document: {
    render: undefined,
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: 'col',
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      content: { type: String, render: true, required: true },
      language: { type: String },
      process: { type: Boolean, render: false, default: true },
    },
  },
  link: {
    render: LocalizedLink,
    attributes: {
      href: { type: String, required: true },
      target: { type: String, default: '_blank' },
      rel: { type: String, default: 'noopener noreferrer' },
    },
  },
  heading: {
    render: Heading,
    children: ['inline'],
    attributes: {
      id: { type: String },
      level: { type: Number, required: true, default: 1 },
    },
    transform(node, config) {
      const attributes = node.transformAttributes(config)
      const children = node.transformChildren(config)
      const id = generateID(children, attributes)

      return new Tag(this.render, { ...attributes, id }, children)
    },
  },
}

export default nodes
