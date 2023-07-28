import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { CTA } from '@/components/CTA'
import { Information } from '../components/Information'
import { Whitespace } from '@/components/Whitespace'
import { Tabs } from '@/components/Tabs'
import { Tab } from '@/components/Tab'
import { Tag } from '@markdoc/markdoc'

import { Link } from '@/components/Link'

const tags = {
  tabs: {
    render: Tabs,
    attributes: {},
    transform(node, config) {
      const labels = node
        .transformChildren(config)
        .filter((child) => child && child.name === 'Tab')
        .map((tab) => (typeof tab === 'object' ? tab.attributes.label : null))

      return new Tag(this.render, { labels }, node.transformChildren(config))
    },
  },
  link: {
    selfClosing: true,
    render: Link,
    attributes: {
      href: { type: String },
      title: { type: String },
    },
  },

  tab: {
    render: Tab,
    attributes: {
      label: {
        type: String,
      },
    },
  },
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
      disabled: { type: Boolean },
      buttonText: { type: String },
    },
  },
  CTA: {
    render: CTA,
    selfClosing: true,
    attributes: {
      title: { type: String },
      description: { type: String },
      imageUrl: { type: String },
      buttonText: { type: String },
      href: { type: String },
    },
  },
  information: {
    render: Information,
    selfClosing: true,
    attributes: {
      level: { type: String },
    },
  },
  whitespace: {
    selfClosing: true,
    render: Whitespace,
  },
}

export default tags
