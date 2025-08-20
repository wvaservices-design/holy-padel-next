
export function Select({ value, onValueChange, children }) {
  return children;
}
export function SelectTrigger({ className = "", children }) {
  return <div className={"px-3 py-2 rounded-xl border bg-white/10 border-white/10 " + className}>{children}</div>;
}
export function SelectValue() { return <span>Selecteer</span>; }
export function SelectContent({ children }) { return <div className="mt-2 space-y-1">{children}</div>; }
export function SelectItem({ value, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
    >
      {children}
    </button>
  );
}
