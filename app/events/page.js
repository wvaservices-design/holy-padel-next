export default function EventsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Events</h1>
      <p className="text-white/70">
        Clinics, toernooien en clubavonden. Binnenkort meer info en inschrijvingen.
      </p>
      <div className="panel p-4">
        <h2 className="font-semibold mb-1">Aankomende items</h2>
        <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
          <li>Openingsavond Singel Court – Vrijdag 20:00</li>
          <li>Laddercompetitie – Start 1 september</li>
        </ul>
      </div>
    </div>
  );
}
