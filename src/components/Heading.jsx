import * as React from 'react'
import { useState } from 'react'
import { LinkIcon } from '@heroicons/react/24/solid'

export function Heading({ id = '', level = 1, children, className }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      const url = window.location.href.split('#')[0] + '#' + id
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div
      className={`flex cursor-pointer flex-col space-y-2 ${
        level !== 1 ? 'pt-4' : ''
      }`}
      onClick={handleCopy}
    >
      <div className="flex items-start space-x-2">
        {React.createElement(
          `h${level}`,
          {
            id,
            className: `${className} leading-normal`, // Adjust the line height
          },
          children
        )}
        <button
          className={`text-xs ${copied ? 'font-semibold text-primary dark:text-darkprimary' : ''}`}
          aria-label={copied ? 'Copied' : 'Copy link'}
        >
          {copied ? (
            'Copied'
          ) : (
            <LinkIcon className="h-3.5 w-3.5 text-primary dark:text-darkprimary" />
          )}
        </button>
      </div>
    </div>
  )
}
