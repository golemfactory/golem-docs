import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/context/LocaleContext'

export function LocalizedLink({ href, children, ...props }) {
  const { locale } = useLocale()
  const [localizedHref, setLocalizedHref] = useState(href)

  useEffect(() => {
    if (href.startsWith('/docs/')) {
      const parts = href.split('/')
      if (parts[2] !== 'en' && parts[2] !== 'ja') {
        parts.splice(2, 0, locale)
      } else if (parts[2] !== locale) {
        parts[2] = locale
      }
      setLocalizedHref(parts.join('/'))
    } else {
      setLocalizedHref(href)
    }
  }, [href, locale])

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  )
}
