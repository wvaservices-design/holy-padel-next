"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/home", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/winkel", label: "Winkel" },
  { href: "/fotos", label: "Foto's" },
  { href: "/socials", label: "Socials" },
  { href: "/reservisten", label: "Reservisten" },
];

export default function NavTabs(){
  const pathname = usePathname();
  return (
    <nav className="mb-6">
      <ul className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-2xl">
        {tabs.map(t => {
          const active = pathname.startsWith(t.href);
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                className={`px-4 py-2 rounded-xl ${active? "bg-white/15 border border-white/20":"hover:bg-white/10 border border-transparent"}`}
              >
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
