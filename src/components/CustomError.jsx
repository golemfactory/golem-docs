import Link from 'next/link'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Search } from '@/components/Search'
import { Footer } from '@/components/Footer'
import {
  ArrowLeftIcon,
  BookmarkSquareIcon,
  BookOpenIcon,
  QueueListIcon,
  RssIcon,
} from '@heroicons/react/24/solid'

const links = [
  {
    name: 'How to install the Golem Provider',
    href: '/docs/providers/provider-installation',
    description: 'Earn GLM tokens by renting out your computer.',
    icon: BookOpenIcon,
  },
  {
    name: 'Compute using the JS SDK',
    href: '/docs/creators/javascript/quickstarts/quickstart',
    description:
      'Dive straight into the Golem JS SDK using the Node.js Quickstar.',
    icon: QueueListIcon,
  },
  {
    name: 'Parallelize Python code with Ray on Golem',
    href: '/docs/creators/ray/quickstart',
    description:
      'Head into the quickstart and learn how to scale the execution of your Python code on Golem',
    icon: BookmarkSquareIcon,
  },
]

export const CustomError = ({ errorCode, title, description }) => {
  return (
    <div className="grid max-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="bg-white dark:bg-darkbg ">
        <main className="mx-auto w-full max-w-2xl px-6 pt-10  lg:pl-12">
          <div className="mx-auto max-w-2xl text-center ">
            <p className="text-base font-semibold leading-8 text-primary dark:text-[#3961fb]">
              {errorCode}
            </p>
            <h1 className="sm:text-5xl mt-4 text-2xl font-bold tracking-tight dark:text-white">
              {title}
            </h1>
            <p className="mt-4 text-base text-gray-600 dark:text-white/70  sm:mt-6">
              {description}
            </p>
          </div>

          <div className="mt-16 flow-root max-w-2xl sm:mt-10">
            <h2 className="sr-only">Popular pages</h2>
            <div className="w-full sm:mb-10">
              {/* Center search */}
              <div className="flex justify-center">
                <Search fullWidth={true} />
              </div>
            </div>
            <ul
              role="list"
              className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5 dark:divide-slate-800 dark:border-slate-800 "
            >
              {links.map((link, linkIdx) => (
                <li key={linkIdx} className="group relative flex gap-x-6 py-6">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10 dark:ring-slate-800">
                    <link.icon
                      className="h-6 w-6 text-primary dark:text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                      <Link href={link.href}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {link.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/70">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-none self-center">
                    <ArrowRightIcon
                      className="h-4 transform px-4 text-gray-400 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-primary dark:group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="group mt-5 flex justify-center">
              <Link
                href="/"
                className="relative flex items-center text-sm font-semibold leading-6  text-gray-600 group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
              >
                <ArrowLeftIcon
                  className="absolute right-24 h-4 text-gray-600 transition-all duration-300 ease-in-out group-hover:translate-x-[-4px] group-hover:text-primary dark:text-white/70 dark:group-hover:text-white "
                  aria-hidden="true"
                />
                Back to home
              </Link>
            </div>
          </div>
        </main>
      </div>
      <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block lg:max-h-screen">
        <img
          src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
