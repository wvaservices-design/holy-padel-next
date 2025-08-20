import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

// NavTabs is client, dus dynamisch laden in server layout
const NavTabs = dynamic(() => import("../components/NavTabs"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holy Padel Clubhuis",
  description: "Officiële Holy Padel Arnhem app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${inter.className} bg-body text-white`}>
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
          <div className="container flex items-center gap-3 py-3">
            <Link href="/home" className="flex items-center gap-3">
              <Image
                src="/holy-padel-logo.jpg"
                alt="Holy Padel"
                width={60}
                height={60}
                className="rounded-full"
                priority
              />
              <div className="hidden sm:block">
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                  Holy Padel Arnhem
                </div>
                <div className="text-lg font-semibold">Clubhuis</div>
              </div>
            </Link>
            <Link href="/reserveringen" className="ml-auto btn btn-outline">
              Reserveer
            </Link>
          </div>
        </header>

        {/* Tabs bovenin, één keer voor de hele app */}
        <NavTabs />

        {/* Pagina-inhoud */}
        <main className="container py-6 min-h-[70vh]">{children}</main>
      </body>
    </html>
  );
}
