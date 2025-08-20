export default function FotosPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Foto's</h1>
      <p className="text-white/70">Sfeerbeelden van Holy Padel.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="h-36 rounded-xl bg-white/10" />
        <div className="h-36 rounded-xl bg-white/10" />
        <div className="h-36 rounded-xl bg-white/10" />
        <div className="h-36 rounded-xl bg-white/10" />
        <div className="h-36 rounded-xl bg-white/10" />
        <div className="h-36 rounded-xl bg-white/10" />
      </div>
    </div>
  );
}
