import Link from 'next/link'

export const CustomError = ({ errorCode, title, description }) => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 dark:bg-darkbg sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary dark:text-darkprimary">
            {errorCode}
          </p>
          <h1 className="sm:text-5xl mt-4 text-3xl font-bold tracking-tight dark:text-white">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 dark:text-white dark:text-opacity-50">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="not-prose inline-flex cursor-pointer items-center gap-x-2 rounded bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primaryhover dark:bg-darkprimary dark:hover:bg-darkprimary/80"
            >
              Go back home
            </Link>
            <Link
              href="https://chat.golem.network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 dark:text-white dark:text-opacity-50"
            >
              Contact on Discord
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
