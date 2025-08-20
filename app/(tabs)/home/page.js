"use client";
import Link from "next/link";

export default function HomeTab(){
  return (
    <div className="space-y-6">
      <section className="panel p-5">
        <h2 className="text-xl font-semibold">Jouw volgende wedstrijd</h2>
        <p className="text-white/70 mt-1">Morgen • 15:30 – 17:00 • Court Roland • Holy Padel club</p>
        <div className="mt-3 flex gap-2">
          <Link href="/reserve" className="btn btn-primary">Wijzig / Nieuwe reservering</Link>
          <button className="btn btn-outline">Deel</button>
        </div>
      </section>

      <section className="panel p-5">
        <h3 className="font-semibold">Clubnieuws</h3>
        <ul className="mt-2 space-y-2 text-white/80 text-sm">
          <li>• Openingsavond Singel Court – vrijdag 20:00</li>
          <li>• Laddercompetitie start 1 september – schrijf je in</li>
        </ul>
      </section>

      <section className="panel p-5">
        <h3 className="font-semibold">Jouw speelsterkte (Playtomic)</h3>
        <p className="text-white/70 text-sm mt-1">Hier tonen we je rating via de Playtomic-API (placeholder).</p>
      </section>
    </div>
  );
}
