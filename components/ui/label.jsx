
export function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor} className="block text-sm mb-1 text-white/80">{children}</label>;
}
