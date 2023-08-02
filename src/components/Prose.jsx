import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none text-dark dark:prose-invert dark:text-slate-400',
        // headings
        'prose-headings:font-display text-dark prose-headings:scroll-mt-28 prose-headings:font-semibold lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-primary dark:prose-lead:text-slate-400',
        // links
        'prose-a:font-semibold dark:prose-a:text-darkprimary',
        // link underline
        'prose-a:text-primary prose-a:no-underline',
        // pre
        // 'prose-pre:rounded-xl prose-pre:bg-white prose-pre:border prose-pre:border-lightbluedarker dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // hr
        'dark:prose-hr:border-slate-800',
      )}
      {...props}
    />
  )
}
