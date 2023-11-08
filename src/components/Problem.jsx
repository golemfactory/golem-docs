export function Problem({ children }) {
  return (
    <div>
      <div className=" pt-6">
        <h3 className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 dark:bg-red-200 px-2 py-1 text-base  font-medium text-red-700">
          Problem
        </h3>
      </div>
      <div className="-mt-4 text-xs text-gray-500">{children}</div>
    </div>
  )
}
