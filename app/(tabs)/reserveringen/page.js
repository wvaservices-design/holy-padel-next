import Link from "next/link";

export default function ReserveringenTab(){
  return (
    <div className="space-y-6">
      <section className="panel p-5">
        <h2 className="text-2xl font-semibold">Reserveringen</h2>
        <p className="text-white/70 mt-1">
          Live boeken en je bestaande boekingen beheren doe je via Playtomic.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://playtomic.com/clubs/holy-padel-club"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open in Playtomic (web)
          </a>
          <a
            href="https://apps.apple.com/app/playtomic-padel-pickleball/id1242321076"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            iOS App
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.playtomic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Android App
          </a>
        </div>
      </section>

      <section className="panel p-5">
        <h3 className="text-xl font-semibold">Jouw geplande wedstrijden</h3>
        <p className="text-white/60 text-sm">
          (Placeholder) Hier komt straks een overzicht van je komende boekingen. Voor nu verwijzen we door naar Playtomic.
        </p>
      </section>
    </div>
  );
}
