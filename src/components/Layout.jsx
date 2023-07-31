import { useCallback, useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { ReferenceNavigation } from '@/components/JSReferenceNavigation'

import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { ThemeSelector, ThemeToggler } from '@/components/ThemeSelector'
import VersionSwitcher from '@/components/VersionSwitcher'

function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  )
}

function Header({ navigation }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [githubInfo, setGithubInfo] = useState({ stargazersCount: 0, forks: 0 })

  useEffect(() => {
    fetch('https://api.github.com/repos/golemfactory/yagna')
      .then((response) => response.json())
      .then((data) => {
        setGithubInfo({
          stargazersCount: data.stargazers_count,
          forks: data.forks,
        })
      })
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50   border-b border-b-lightbluedarker bg-lightblue px-4 py-5 transition duration-500 dark:border-b-[#161721] sm:px-6 lg:px-8',
        isScrolled ? 'dark:bg-darkbg ' : 'dark:bg-transparent'
      )}
    >
      <div className="relative mx-auto  flex max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <div className="mr-6 flex lg:hidden">
          <MobileNavigation navigation={navigation} />
        </div>
        <div className="relative flex flex-grow  items-center">
          <Link href="/" aria-label="Home page">
            <Logomark className="h-9 w-9 lg:hidden" />
            <Logo className="hidden h-full  fill-slate-700 dark:fill-sky-100 lg:block" />
          </Link>

          <div className="ml-4 hidden gap-x-6 lg:flex">
            <a href="/" className="text-sm text-primary dark:text-lightergray">
              Home
            </a>

            <span className="text-sm text-primary dark:text-lightergray">
              Quickstart
            </span>
            <span className="text-sm text-primary dark:text-lightergray">
              Create
            </span>
            <span className="text-sm text-primary dark:text-lightergray">
              Share and earn
            </span>
          </div>
        </div>

        <div className="relative flex flex-grow basis-0 items-center justify-end gap-6 sm:gap-8">
          <ThemeToggler className="relative z-10" />
          <Search />

          <Link
            href="https://github.com/golemfactory/yagna"
            className=" hidden items-center gap-x-2 lg:flex "
            aria-label="GitHub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitIcon className=" h-6 w-6 fill-black group-hover:fill-primary dark:fill-[#BFC0C5]  dark:group-hover:fill-slate-300" />
            <div className="">
              <p className="text-sm font-medium dark:text-[#BFC0C5]">GitHub</p>
              <div className="grid grid-cols-2 gap-x-2 ">
                <span className="flex items-center text-sm  dark:text-[#BFC0C5] lg:text-xs">
                  <StarIcon className="mr-1 h-3 w-3 fill-black dark:fill-[#BFC0C5] " />{' '}
                  {githubInfo.stargazersCount}
                </span>
                <span className="flex items-center fill-black text-xs dark:text-[#BFC0C5]">
                  <ForkIcon className="mr-1 h-3 w-3 fill-black  dark:fill-[#BFC0C5] " />{' '}
                  {githubInfo.forks}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}
import { navigation as JSReference } from '@/navigation/jsreference'
import { Navigation } from './Navigation'
import { ForkIcon } from './icons/ForkIcon'
import { StarIcon } from './icons/StarIcon'
import { GitIcon } from './icons/GitIcon'
import { Footer } from './Footer'
import { Feedback } from './Feedback'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { GuideIcon } from './icons/GuideIcon'

export function Layout({
  children,
  title,
  tableOfContents,
  tags,
  type = 'guide',
}) {
  const [currentVersion, setCurrentVersion] = useState('b0.7')
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let allLinks = JSReference.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]
  let section = JSReference.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  const currentSection = useTableOfContents(isHomePage ? [] : tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <VersionSwitcher
        navigation={JSReference}
        currentVersion={currentVersion}
        onVersionChange={setCurrentVersion}
      />
      <Header navigation={JSReference} />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex max-w-8xl justify-center ">
        {!isHomePage && (
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-lightblue dark:hidden" />
            <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
            <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 ">
              <Navigation />
              <div className="ml-3.5 mt-9">
                <ReferenceNavigation
                  currentVersion={currentVersion}
                  items={JSReference}
                />
              </div>
            </div>
          </div>
        )}
        <div className="min-w-0 max-w-5xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            <div className="mb-1 flex items-center gap-x-4">
              {type === 'guide' && (
                <div className="inline-flex items-center gap-x-1 rounded-2xl bg-lightbluedarker px-2 py-1 font-medium">
                  <GuideIcon className="h-6 w-6 text-white" />
                  <span className="text-sm text-dark ">Guide</span>
                </div>
              )}
              {tags && (
                <div className="flex gap-x-4 ">
                  {tags.split(',').map((tag, index, array) => (
                    <span
                      className="text-sm text-normalgray dark:text-white/50"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="font-display text-sm font-medium text-primary dark:text-white">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {title}
                  </h1>
                )}
              </header>
            )}

            <Prose>{children}</Prose>
          </article>
          {!isHomePage && (
            <>
              <Feedback />
              <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
                {previousPage && (
                  <div>
                    <dt className="font-display text-sm font-medium text-slate-900 dark:text-white/50">
                      <ArrowLeftIcon className="inline-block h-4 w-4" />
                      Return
                    </dt>
                    <dd className="mt-1">
                      <Link
                        href={previousPage.href}
                        className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                      >
                        <span aria-hidden="true">&larr;</span>{' '}
                        {previousPage.title}
                      </Link>
                    </dd>
                  </div>
                )}
                {nextPage && (
                  <div className="ml-auto text-right">
                    <dt className="font-display text-sm font-medium text-primary dark:text-white/50">
                      Continue{' '}
                      <ArrowRightIcon className="inline-block h-4 w-4" />
                    </dt>
                    <dd className="mt-1">
                      {/* <Link
                    href={nextPage.href}
                    className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    {nextPage.title} <span aria-hidden="true">&rarr;</span>
                  </Link> */}
                    </dd>
                  </div>
                )}
              </dl>
            </>
          )}
        </div>
        {!isHomePage && (
          <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
            <nav aria-labelledby="on-this-page-title" className="w-56">
              {tableOfContents.length > 0 && (
                <>
                  <h2
                    id="on-this-page-title"
                    className="font-display text-sm font-medium text-slate-900 dark:text-white"
                  >
                    On this page
                  </h2>
                  <ol role="list" className="mt-4 space-y-3 border-l text-sm">
                    {tableOfContents.map((section) => (
                      <li key={section.id}>
                        <h3>
                          <a
                            href={`#${section.id}`}
                            className={clsx(
                              isActive(section)
                                ? 'border-l border-l-red-400 text-primary dark:text-white'
                                : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                            )}
                          >
                            {section.title}
                          </a>
                        </h3>
                        {section.children.length > 0 && (
                          <ol
                            role="list"
                            className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                          >
                            {section.children.map((subSection) => (
                              <li key={subSection.id}>
                                <a
                                  href={`#${subSection.id}`}
                                  className={
                                    isActive(subSection)
                                      ? 'text-primary dark:text-white'
                                      : 'hover:text-slate-600 dark:hover:text-slate-300'
                                  }
                                >
                                  {subSection.title}
                                </a>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
