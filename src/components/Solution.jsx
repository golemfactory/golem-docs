export function Solution({ children }) {
  return (
    <>
      <div className="mt-4 border-t pb-2 pt-4">
        <h3 className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-base  font-medium text-green-700">
          Solution
        </h3>
        <div className="-mt-4 text-gray-500 dark:text-gray-400">
          {children}
        </div>
      </div>
    </>
  )
}
