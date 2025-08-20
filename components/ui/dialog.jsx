
import { useEffect } from "react";

export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onOpenChange(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onOpenChange]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/70" onClick={() => onOpenChange(false)} />
      {children}
    </div>
  );
}

export function DialogContent({ className = "", children }) {
  return <div className={"relative z-10 rounded-2xl p-5 " + className}>{children}</div>;
}
export function DialogHeader({ children }) { return <div className="mb-3">{children}</div>; }
export function DialogTitle({ children }) { return <div className="text-lg font-semibold">{children}</div>; }
export function DialogFooter({ children }) { return <div className="mt-4 flex justify-end gap-2">{children}</div>; }
