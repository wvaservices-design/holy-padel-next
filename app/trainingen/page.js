export default function TrainingenPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Trainingen</h1>
      <p>
        Verbeter je padelspel met professionele begeleiding van <strong>RL Padel Academy</strong>.
      </p>
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <h2 className="text-xl font-semibold mb-2">Aanbod</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Privélessen</li>
          <li>Duo-training</li>
          <li>Groepstraining</li>
          <li>Jeugdclinics</li>
        </ul>
      </div>
      <a
        href="https://www.rlpadelacademy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-yellow-400"
      >
        Bezoek RL Padel Academy
      </a>
    </div>
  );
}

