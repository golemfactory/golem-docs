import NextLink from 'next/link'
import { UnionIcon } from './icons/UnionIcon'

export function Link({ href, title }) {
  console.log(href, title)
  return (
    <NextLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="not-prose my-6 inline-flex rounded-md border border-primary  px-3 py-2 text-center  text-sm font-semibold capitalize text-primary"
    >
      {title} <UnionIcon className="ml-1 fill-primary" />
    </NextLink>
  )
}
