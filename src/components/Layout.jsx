import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'

import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { ThemeToggler } from '@/components/ThemeSelector'
import VersionSwitcher from '@/components/VersionSwitcher'

function Heading({ section, isActive }) {
  const isChildActive = section.children.some(isActive)
  return (
    <h3>
      <Link
        href={`#${section.id}`}
        className={clsx(
          isActive(section) && !isChildActive
            ? 'relative text-sm text-primary dark:text-white'
            : 'text-sm font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
        )}
      >
        {isActive(section) && !isChildActive && (
          <div className="absolute -left-[1.35rem] mt-1.5 h-2.5 w-2.5 overflow-visible rounded-full bg-primary text-sm dark:bg-darkprimary"></div>
        )}
        {section.title}
      </Link>
    </h3>
  )
}

function recursiveRender(children, isActive) {
  return children.map((node) => (
    <li className="py-1" key={node.id}>
      <Link
        href={`#${node.id}`}
        className={
          isActive(node)
            ? 'relative text-sm text-primary dark:text-white'
            : 'text-sm hover:text-slate-600 dark:hover:text-slate-300'
        }
      >
        {isActive(node) && (
          <div className="absolute -left-[2.6rem] mt-1.5 h-2.5 w-2.5 overflow-visible rounded-full bg-primary dark:bg-darkprimary"></div>
        )}
        {node.title}
      </Link>
      {node.children && node.children.length > 0 && (
        <ul role="list" className="  pl-5 text-slate-500 dark:text-slate-400">
          {recursiveRender(node.children, isActive)}
        </ul>
      )}
    </li>
  ))
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
          <MobileNavigation />
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
            className="group hidden flex-none items-center gap-x-2 lg:flex"
            aria-label="GitHub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitIcon className="h-6 w-6 fill-black group-hover:fill-primary dark:fill-[#BFC0C5] dark:group-hover:fill-darkprimary" />

            <div>
              <p className="text-sm dark:text-[#BFC0C5]">GitHub</p>

              <div className="grid grid-cols-2 gap-x-2">
                <div className="flex items-center text-sm dark:text-[#BFC0C5] lg:text-xs">
                  <StarIcon className="mr-1 h-3 w-3 fill-black dark:fill-[#BFC0C5]" />
                  {githubInfo.stargazersCount}
                </div>

                <div className="flex items-center text-sm dark:text-[#BFC0C5] lg:text-xs">
                  <ForkIcon className="mr-1 h-3 w-3 fill-black dark:fill-[#BFC0C5]" />
                  {githubInfo.forks}
                </div>
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
    function getNodeIds(nodes) {
      return nodes.flatMap((node) => [node.id, ...getNodeIds(node.children)])
    }

    return getNodeIds(tableOfContents).map((id) => {
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
import { mergednavs } from '@/navigation/mergeNavigation'
import { navigation as JSReference } from '@/navigation/jsreference'
import { Navigation, MenuBar, SideBar } from './Navigation'
import { ForkIcon } from './icons/ForkIcon'
import { StarIcon } from './icons/StarIcon'
import { GitIcon } from './icons/GitIcon'
import { Footer } from './Footer'
import { Feedback } from './Feedback'
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { ArticleType } from './ArticleType'

export function Layout({
  children,
  title,
  tableOfContents,
  tags,
  type = 'guide',
}) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let is404Page = router.pathname === '/404'
  let is500Page = router.pathname === '/500'
  let allLinks = normalNavLinks.flatMap((section) => section.links)
  let LinkIndex = allLinks.findIndex((link) => link.href === router.pathname)

  let previousPage = allLinks[LinkIndex - 1]
  let nextPage = allLinks[LinkIndex + 1]

  let section = normalNavLinks.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  const currentSection = useTableOfContents(isHomePage ? [] : tableOfContents)

  function isActive(section) {
    return section.id === currentSection
  }

  console.log(type)

  return (
    <>
      <VersionSwitcher />
      <Header navigation={JSReference} />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex max-w-8xl justify-center ">
        {type !== 'design' &&
          (!isHomePage || !is404Page || !is500Page ? (
            <div className="hidden lg:relative lg:block lg:flex-none">
              <div className="absolute inset-y-0 right-0 w-[50vw] bg-lightblue dark:hidden" />
              <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
              <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
              <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-64">
                <SideBar navigation={mergednavs} />
              </div>
            </div>
          ) : null)}

        <div className="min-w-0 max-w-5xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            <div className="flex items-center gap-x-4 pb-4">
              {type && <ArticleType type={type} />}
              {tags &&
                tags.split(',').map((tag, index, array) => (
                  <div
                    className="block text-sm text-normalgray dark:text-white/50"
                    key={tag}
                  >
                    {tag}
                  </div>
                ))}
            </div>

            <Prose>{children}</Prose>
          </article>
        </div>
        {type !== 'design' &&
          (!isHomePage || !is404Page || !is500Page ? (
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
                    <ol role="list" className="mt-4  pl-4 text-sm">
                      <div className="border-l">
                        {tableOfContents.map((section) => (
                          <li className="py-0.5 pl-4" key={section.id}>
                            <Heading section={section} isActive={isActive} />
                            {section.children.length > 0 && (
                              <ul
                                role="list"
                                className="  pl-5 text-slate-500 dark:text-slate-400"
                              >
                                {recursiveRender(section.children, isActive)}
                              </ul>
                            )}
                          </li>
                        ))}
                      </div>
                    </ol>
                  </>
                )}
              </nav>
            </div>
          ) : null)}
      </div>
      <Footer />
    </>
  )
}
