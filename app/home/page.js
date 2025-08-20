import Image from "next/image";
import Link from "next/link";

function ActionButton({ children }) {
  return (
    <button className="px-4 py-2 rounded-xl bg-gold/90 text-black font-medium hover:bg-gold transition">
      {children}
    </button>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Jouw volgende wedstrijd */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center">🔔</div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Jouw volgende wedstrijd</h1>
            <p className="text-white/80 mt-1">
              Morgen <span className="font-medium">15:30 – 17:00</span> • <span className="font-medium">Court Roland</span> • Holy Padel Club
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <ActionButton>Verplaats</ActionButton>
              <button className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10 transition">Annuleer</button>
              <button className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10 transition">Deel via WhatsApp</button>
            </div>
          </div>
        </div>
      </section>

      {/* Twee kolommen */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clubnieuws */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Clubnieuws</h2>
            <Link href="#" className="text-gold text-sm hover:underline">Alle nieuws</Link>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/10">
                <Image src="/news-singel.svg" alt="" fill className="object-cover" sizes="80px" />
              </div>
              <div className="min-w-0">
                <div className="font-medium">Openingsavond Singel Court – vrijdag 20:00</div>
                <div className="text-white/60 text-sm">02 sep</div>
                <Link href="#" className="text-gold text-sm hover:underline">Inschrijven</Link>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/10">
                <Image src="/news-ladder.svg" alt="" fill className="object-cover" sizes="80px" />
              </div>
              <div className="min-w-0">
                <div className="font-medium">Laddercompetitie — start 1 september</div>
                <div className="text-white/60 text-sm">01 sep</div>
                <Link href="#" className="text-gold text-sm hover:underline">Inschrijven</Link>
              </div>
            </li>
          </ul>
        </div>

        {/* Speelsterkte / Playtomic */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Jouw speelsterkte</h2>
            <Image src="/playtomic.svg" alt="Playtomic" width={28} height={28} />
          </div>
          <div className="flex items-end gap-4">
            <div>
              <div className="text-5xl font-bold">4.2</div>
              <div className="text-white/70 mt-1 text-sm">Bovengemiddeld <span className="text-white/50">(Clubgemiddelde: 3.8)</span></div>
            </div>
            {/* mini chart */}
            <svg className="flex-1 h-20" viewBox="0 0 200 80" preserveAspectRatio="none">
              <polyline fill="none" stroke="currentColor" strokeOpacity="0.25" points="0,70 200,70"/>
              <path d="M0 60 L35 62 L70 55 L105 58 L140 42 L175 50 L200 38" stroke="#F5C463" fill="none" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <Link href="/trainingen" className="inline-block mt-4 px-4 py-2 rounded-xl bg-gold/90 text-black font-medium hover:bg-gold">Inschrijven</Link>
        </div>
      </section>
    </div>
  );
}
