export function Information({ children, level }) {
  return (
    <div
      className={`rounded-md border  text-xs
    ${level === 'warning' ? '  border-warningborder' : ''}
    `}
    >
      <div
        className={`
      ${level === 'info' ? '  bg-blue-100' : ''}
      ${level === 'warning' ? '  bg-warning' : ''}
      ${level === 'danger' ? ' border-red-300 bg-red-100' : ''}
       py-2`}
      >
        <span className="px-4 font-semibold capitalize">{level}</span>
      </div>
      <div className="px-4">{children}</div>
    </div>
  )
}
