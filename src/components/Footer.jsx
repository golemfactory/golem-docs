import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { DiscordIconBlue } from './icons/DiscordIconBlue'
import { GithubIcon } from './icons/GithubIcon'
import { GolemIcon } from './icons/GolemIcon'
import { LinkedInIcon } from './icons/LinkedIn'
import { RedditIcon } from './icons/RedditIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'
import { javascript, python, ray, dapps } from '@/navigation/footer'
import { ArrowRightIcon } from './icons/ArrowRightIcon'
import Link from 'next/link'

const links = [...javascript, ...python]

const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/golemfactory',
    icon: GithubIcon,
  },
  {
    name: 'Discord',
    href: 'https://chat.golem.network',
    icon: DiscordIconBlue,
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/r/GolemProject/',
    icon: RedditIcon,
  },

  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@GolemNetwork',
    icon: YoutubeIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/golem-network/',
    icon: LinkedInIcon,
  },
]

const LinkSection = ({ title, links }) => (
  <section className="ml-4 mt-6">
    <h2 className="-ml-4 text-base font-medium text-primary dark:text-white">
      {title}
    </h2>
    <ul role="list" className="list-disc">
      {links.map(({ title, href }) => (
        <li key={href + title}>
          <Link
            href={href}
            className="text-sm font-medium leading-6 text-primary dark:text-[#858CA2] dark:hover:text-white"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </section>
)

const DocSection = ({ title, description, link, data }) => (
  <div>
    <DocHeader
      classes={'text-xl'}
      title={title}
      description={description}
      link={link}
    />
    <div role="list" className="grid-rows mb-12 grid">
      {data.map(({ type, links }) =>
        links.length > 0 ? (
          <LinkSection key={type} title={type} links={links} />
        ) : null
      )}
    </div>
  </div>
)

const DocHeader = ({ title, description, link, classes }) => (
  <>
    <h5 className={`${classes}  font-semibold dark:text-white`}>{title}</h5>
    <p className="text-sm text-gray-500 dark:text-white/70">{description}</p>
    <NavLink link={link} />
  </>
)

const NavLink = ({ link }) => (
  <Link
    href={link}
    aria-label="Overview"
    className="group" // Define a group for hover state
  >
    <div className="relative flex items-center gap-x-1 text-base font-medium leading-6 text-primary dark:text-[#858CA2] dark:hover:text-white">
      Overview{' '}
      <ArrowRightIcon className="h-3 w-3 transform fill-primary transition-transform duration-300 ease-in-out group-hover:translate-x-1 dark:group-hover:fill-white dark:fill-[#858CA2]" />
    </div>
  </Link>
)

export const Footer = () => (
  <footer className="bg-white pt-8 dark:bg-transparent">
    <div className="mb-4 border-y border-y-lightbluedarker bg-lightblue dark:border-y-slate-800 dark:bg-darkbg">
      <div className="sm:pt-18 mx-auto grid max-w-7xl grid-cols-1 px-6 pb-8 pt-16 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <DocSection
          title="JS Docs"
          data={javascript}
          description={''}
          link={'/docs/creators/javascript'}
        />
        <DocSection
          title="Ray on Golem Docs"
          data={ray}
          description={''}
          link={'/docs/creators/ray'}
        />
        <DocSection
          title="Learn Dapps"
          data={dapps}
          description={''}
          link={'/docs/creators/dapps'}
        />

        {/* <DocSection title="Python" data={python} /> */}
      </div>
    </div>
    <LowerFooter />
  </footer>
)

const LowerFooter = () => (
  <div>
    <div className="relative mx-auto ">
      <div className="mx-auto flex max-w-8xl flex-wrap justify-center  gap-x-12 gap-y-12 px-8  pb-6 pt-2 md:justify-between lg:px-8 xl:px-20">
        <FooterNav />
        <div className="flex flex-wrap items-center justify-center md:justify-normal">
          <GolemIcon className="-ml-2 h-12 dark:fill-white fill-primary" />
          <span className=" -mt-2 text-sm text-normalgray dark:text-white dark:opacity-50">
            Copyright © {new Date().getFullYear()} Golem Factory GmbH
          </span>
        </div>
      </div>
    </div>
  </div>
)

const FooterNav = () => (
  <div className="flex items-center justify-center space-x-6 md:order-2">
    {navigation.map((item, index) => (
      <Link
        key={item.name + index}
        href={item.href}
        className="text-gray-400 hover:text-gray-500 "
      >
        <span className="sr-only">{item.name}</span>
        <item.icon
          className="h-6 w-6 fill-primary text-primary dark:fill-white dark:text-white dark:opacity-70 dark:hover:opacity-100"
          aria-hidden="true"
        />
      </Link>
    ))}
  </div>
)
