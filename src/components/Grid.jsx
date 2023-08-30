export function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">{children}</div>
  );
}
