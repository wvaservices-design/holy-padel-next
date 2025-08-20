
export function Button({ className = "", children, onClick, disabled, variant }) {
  const base = "px-4 py-2 rounded-2xl transition focus:outline-none focus:ring disabled:opacity-50";
  let styles = "bg-white/10 hover:bg-white/20 text-white";
  if (variant === "ghost") styles = "bg-white/10 text-white hover:bg-white/20";
  if (variant === "secondary") styles = "bg-white text-black hover:opacity-90";
  if (!variant) styles = "bg-[color:var(--gold)] text-black hover:brightness-110";
  return (
    <button className={base + " " + styles + " " + className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
