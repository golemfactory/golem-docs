import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { CTA } from '@/components/CTA'
import { Alert } from '../components/Alert'
import { Whitespace } from '@/components/Whitespace'
import { Tabs } from '@/components/Tabs'
import { Tab } from '@/components/Tab'
import { Tag } from '@markdoc/markdoc'
import { DocNavigation } from '@/components/DocNavigation'
import { Link } from '@/components/Link'
import { Highlight } from '@/components/Highlight'
import { SelectionCard } from '@/components/SelectionCard'
import { SelectionContent } from '@/components/SelectionContent'
import { Grid } from '@/components/Grid'
import { Padding } from '@/components/Padding'
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
  padding: {
    render: Padding,
    attributes: {
      padding: { type: Number },
    },
    selfClosing: true,
  },
  grid: {
    render: Grid,
    attributes: {},
  },
  highlight: {
    render: Highlight,
    attributes: {
      text: { type: String },
    },
    selfClosing: true,
  },
  docnavigation: {
    render: DocNavigation,
    attributes: {
      title: { type: String },
    },
  },
  link: {
    selfClosing: true,
    render: Link,
    attributes: {
      href: { type: String },
      title: { type: String },
      icon: { type: String },
      hideunion: { type: Boolean },
    },
  },
  selectioncard: {
    render: SelectionCard,
    attributes: {
      icon: { type: String },
      title: { type: String },
      buttonText: { type: String },
      href: { type: String },
    },
  },
  selectioncontent: {
    render: SelectionContent,
    attributes: {
      label: { type: String },
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
  alert: {
    render: Alert,
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
