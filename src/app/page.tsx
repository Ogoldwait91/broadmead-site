export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Broadmead Boutique B&B in Tenby
        </h1>
        <p className="max-w-2xl text-lg text-gray-700">
          A calm, stylish base for exploring Tenby and the Pembrokeshire coast. Book direct for best value and availability.
        </p>
        <div className="flex gap-3">
          <a
            href="#book"
            className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Check Availability
          </a>
          <a
            href="/rooms"
            className="rounded-md border px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            View Rooms
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Central Tenby location", text: "Walk to beaches, harbour, and restaurants." },
          { title: "Boutique rooms", text: "Individually styled, comfortable, and quiet." },
          { title: "Book direct", text: "Simple booking flow with clear policies and support." },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border p-6">
            <h2 className="text-base font-semibold">{c.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{c.text}</p>
          </div>
        ))}
      </section>

      <section id="book" className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Book Direct</h2>
        <p className="mt-2 text-sm text-gray-700">
          We’ll embed the booking experience here in Phase 3. For now, this section will link to your booking provider.
        </p>
        <div className="mt-4">
          <a
            href="https://broadmeadtenby.wales/availability-tariff"
            className="inline-flex rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Go to Availability & Rates
          </a>
        </div>
      </section>
    </div>
  );
}
