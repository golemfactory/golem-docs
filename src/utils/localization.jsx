export function getLocalizedNavigation(navigation, locale) {
  return navigation[locale] || navigation['en']
}

export function localizeHref(href, locale) {
  if (href.startsWith('http') || href.startsWith('#')) return href
  return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`
}
