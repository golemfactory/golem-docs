import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-sm bg-primary text-white py-2 px-4 text-sm font-semibold hover:bg-primary/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    'rounded-sm bg-white py-2 px-4 text-sm font-medium text-primary border border-gray-100 hover:bg-gray-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
