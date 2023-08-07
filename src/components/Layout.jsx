import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { ReferenceNavigation } from '@/components/JSReferenceNavigation'

import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { ThemeToggler } from '@/components/ThemeSelector'
import VersionSwitcher from '@/components/VersionSwitcher'

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
            <Logo className="hidden h-full  fill-slate-700 dark:fill-sky-100 lg:block" />
          </Link>

          <MenuBar navigation={{ normalNavLinks }} />
        </div>

        <div className="relative flex flex-grow basis-0 items-center justify-end gap-6 sm:gap-8">
          <ThemeToggler className="relative z-10" />
          <Search />

          <Link
            href="https://github.com/golemfactory/yagna"
            className=" group hidden items-center gap-x-2 lg:flex "
            aria-label="GitHub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitIcon className="group h-6 w-6 fill-black group-hover:fill-primary dark:fill-[#BFC0C5]  dark:group-hover:fill-darkprimary" />
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
import { navigation as normalNavLinks } from '@/navigation/docs'
import { navigation as JSReference } from '@/navigation/jsreference'
import { Navigation, MenuBar, SideBar } from './Navigation'
import { ForkIcon } from './icons/ForkIcon'
import { StarIcon } from './icons/StarIcon'
import { GitIcon } from './icons/GitIcon'
import { Footer } from './Footer'
import { Feedback } from './Feedback'
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { GuideIcon } from './icons/GuideIcon'

export function Layout({
  children,
  title,
  tableOfContents,
  tags,
  type = 'guide',
}) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let allLinks = normalNavLinks.flatMap((section) => section.links)
  let LinkIndex = allLinks.findIndex((link) => link.href === router.pathname)

  let previousPage = allLinks[LinkIndex - 1]
  let nextPage = allLinks[LinkIndex + 1]

  let section = normalNavLinks.find((section) =>
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
      <VersionSwitcher />
      <Header navigation={JSReference} />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex max-w-8xl justify-center ">
        {!isHomePage && (
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-lightblue dark:hidden" />
            <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
            <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-64 ">
              <SideBar navigation={normalNavLinks} />
              {/* <Navigation links={normalNavLinks} /> */}
              <div className=" mt-9">
                <ReferenceNavigation />
              </div>
            </div>
          </div>
        )}
        <div className="min-w-0 max-w-5xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            <div className="mb-1 flex items-center gap-x-4">
              {type === 'guide' && (
                <div className="inline-flex items-center gap-x-2 rounded-2xl bg-lightbluedarker px-1.5 py-1 font-medium">
                  <GuideIcon className="h-6 w-6  text-white" />
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
                {title && (
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {title}
                  </h1>
                )}
              </header>
            )}

            <Prose>{children}</Prose>
          </article>
         
        </div>
        {!isHomePage && (
          <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
            <nav aria-labelledby="on-this-page-title" className="w-56">
              {tableOfContents.length > 0 && (
                <>
                  <h2
                    id="on-this-page-title"
                    className="font-display pl-4 text-sm font-medium text-slate-900 dark:text-white"
                  >
                    On this page
                  </h2>
                  <ol role="list" className="mt-4 space-y-3 pl-4 text-sm">
                    {tableOfContents.map((section) => {
                      const isChildActive = section.children.some((child) =>
                        isActive(child)
                      )
                      return (
                        <li className="border-l pl-4" key={section.id}>
                          <h3>
                            <a
                              href={`#${section.id}`}
                              className={clsx(
                                isActive(section) && !isChildActive
                                  ? ' relative text-primary dark:text-white'
                                  : ' font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                              )}
                            >
                              {isActive(section) && !isChildActive && (
                                <div className="absolute -left-[1.35rem] mt-1.5 h-2.5  w-2.5 overflow-visible rounded-full bg-primary dark:bg-darkprimary"></div>
                              )}
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
                                        ? 'relative text-primary dark:text-white'
                                        : ' hover:text-slate-600 dark:hover:text-slate-300'
                                    }
                                  >
                                    {isActive(subSection) && (
                                      <div className="absolute -left-[2.6rem] mt-1.5 h-2.5  w-2.5 overflow-visible rounded-full bg-primary"></div>
                                    )}
                                    {subSection.title}
                                  </a>
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      )
                    })}
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
