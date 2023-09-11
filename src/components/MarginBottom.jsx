export function MarginBottom({ children, amount }) {
  return <div className={`mb-${amount}`}>{children}</div>
}
