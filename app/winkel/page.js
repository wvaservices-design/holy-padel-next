export default function WinkelPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Winkel</h1>
      <p className="text-white/70">Rackets, ballen, grips en club-merch. Binnenkort beschikbaar.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="panel p-4">
          <div className="h-28 rounded-lg bg-white/5 mb-3" />
          <div className="font-semibold">Padel Racket</div>
          <div className="text-white/60 text-sm">€199</div>
        </div>
        <div className="panel p-4">
          <div className="h-28 rounded-lg bg-white/5 mb-3" />
          <div className="font-semibold">Ballen (3 st.)</div>
          <div className="text-white/60 text-sm">€7</div>
        </div>
      </div>
    </div>
  );
}
