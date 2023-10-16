export function Troubleshooting({ children }) {
  return (
    <div className="py-8">
      <div className="shadow-xs rounded-md border border-gray-200 bg-white dark:bg-darkbg dark:border-gray-600 px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="mb-2 pb-2 ml-4 text-gray-500 dark:text-gray-400  overflow-auto">{children}</div>
          <div className="ml-4 "></div>
        </div>
      </div>
    </div>
  )
}
