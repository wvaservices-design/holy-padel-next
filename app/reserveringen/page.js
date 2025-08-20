import Image from "next/image";

export default function ReserveringenPage() {
  return (
    <div className="container py-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Reserveringen</h1>
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="https://playtomic.io/assets/img/logos/playtomic-logo.png"
          alt="Playtomic"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <p className="text-lg">
          Hier vind je al je padelreserveringen via Playtomic.
        </p>
      </div>
    </div>
  );
}
