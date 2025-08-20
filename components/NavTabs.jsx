"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/home", label: "Home" }, // Dashboard + Nieuws
  { href: "/reserveringen", label: "Reserveringen" },
  { href: "/trainingen", label: "Trainingen" },
  { href: "/events", label: "Events" },
  { href: "/winkel", label: "Winkel" },
  { href: "/fotos", label: "Foto's" },
  { href: "/socials", label: "Socials" },
];

export default function NavTabs() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-white/10 mb-6">
      <ul className="container flex flex-wrap gap-2 bg-white/5 p-1 rounded-2xl mt-4">
        {tabs.map((t) => {
          const active =
            pathname === t.href || pathname.startsWith(t.href + "/");
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                className={`px-4 py-2 rounded-xl border transition
                  ${
                    active
                      ? "border-[#F5C463] text-[#F5C463] bg-[#1a1a1a] shadow-[0_0_0_2px_rgba(245,196,99,0.15)]"
                      : "border-[#F5C463]/50 text-white hover:text-[#F5C463] hover:border-[#F5C463] hover:bg-white/5"
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#F5C463]/40`}
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
