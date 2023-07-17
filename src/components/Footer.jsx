import { DiscordIconBlue } from './icons/DiscordIconBlue'
import { GithubIcon } from './icons/GithubIcon'
import { GolemIcon } from './icons/GolemIcon'
import { LinkedInIcon } from './icons/LinkedIn'
import { RedditIcon } from './icons/RedditIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'

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

export const Footer = () => {
  return (
    <footer className="bg-white pt-8 dark:bg-transparent">
      <div className="relative mx-auto ">
        <div className="mx-auto flex max-w-8xl justify-between  px-8 lg:px-8 xl:px-20">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <GolemIcon className="-ml-4 h-12 fill-primary text-primary" />
          </div>
        </div>
      </div>
      <div className=" mx-auto mb-2 max-w-7xl border-t text-center dark:border-t-gray-800">
        <span className="my-4 block text-sm text-gray-500">
          Copyright © 2023 Golem Factory GmbH
        </span>
      </div>
    </footer>
  )
}
