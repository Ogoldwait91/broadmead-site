import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO (full-bleed, proper overlay, readable text) */}
      <section className="fullBleed hero heroBleed" style={{ position: "relative", height: "100svh", minHeight: 680 }}>
        <Image
          src="/images/hero.jpg"
          alt="Broadmead Boutique B&B exterior"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />

        {/* overlay (Pig-style: dark left, lighter right) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,18,22,.88) 0%, rgba(8,18,22,.66) 40%, rgba(8,18,22,.32) 74%, rgba(8,18,22,.12) 100%)",
          }}
        />

        {/* subtle coastal tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1200px 520px at 18% 10%, rgba(47,111,115,.28), rgba(47,111,115,0))",
            mixBlendMode: "screen",
            opacity: 0.9,
          }}
        />

        <div style={{ position: "absolute", inset: 0, display: "grid", alignItems: "end" }}>
          <div className="container" style={{ paddingBottom: 76 }}>
            <div style={{ maxWidth: 640, color: "white", textShadow: "0 2px 28px rgba(0,0,0,0.55)" }}>
              <div className="kicker" style={{ color: "rgba(255,255,255,.86)" }}>
                Boutique B&B Tenby Pembrokeshire
              </div>

              <h1 className="heroTitle">

                A calm,
                <br />
                characterful base
                <br />
                for the coast.
              </h1>

              <p className="heroCopy">
                Thoughtful rooms, warm hospitality, and an easy walk to Tenbys beaches, harbour, and restaurants.
              </p>

              <div className="heroCtas">
                <a className="btn btnSolid" href="#book">Check availability</a>
                <Link className="btn btnGhost" href="#house">Explore the house</Link>
              </div>

              <div style={{ marginTop: 12, fontSize: 13, color: "rgba(255,255,255,.74)" }}>
                Book direct for best value and the simplest experience.
              </div>
            </div>
          </div>
        </div>
        <div className="heroScrollCue" aria-hidden="true">
          <span className="heroScrollLabel">Scroll</span>
          <span className="heroScrollLine" />
        </div>
      </section>

      {/* HOUSE (editorial, not boxy) */}
      <section id="house" className="section">
        <div className="container" style={{ display: "grid", gap: 28, gridTemplateColumns: "1fr" }}>
          <div>
            <div className="kicker">The house</div>
            <h2 style={{ fontSize: 34, marginTop: 12 }}>Boutique comfort, unhurried.</h2>
            <p style={{ marginTop: 18, maxWidth: 520, opacity: 0.9 }}>
              Broadmead is a calm base with Tenby on the doorstep peaceful to return to, easy to settle into.
            </p>
          </div>
        </div>
      </section>

      {/* HOUSE IMAGES (Pig-style: calm, editorial) */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="pigGallery" style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}>
            {/* big tile */}
            <div className="pigTile" style={{ gridColumn: "span 7", height: 360 }}>
              <Image
                src="/images/dining.webp"
                alt="Dining room"
                fill
                sizes="(max-width: 1120px) 70vw, 760px"
                style={{ objectFit: "cover", objectPosition: "center 55%" }}
              />
              <div className="pigCaption">Dining room</div>
            </div>

            {/* right column */}
            <div style={{ gridColumn: "span 5", display: "grid", gap: 16 }}>
              <div className="pigTile" style={{ height: 172 }}>
                <Image
                  src="/images/lounge.webp"
                  alt="Lounge"
                  fill
                  sizes="(max-width: 1120px) 40vw, 520px"
                  style={{ objectFit: "cover", objectPosition: "center 55%" }}
                />
                <div className="pigCaption">Lounge & fireside</div>
              </div>

              <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                <div className="pigTile" style={{ height: 172 }}>
                  <Image
                    src="/images/garden.webp"
                    alt="Garden"
                    fill
                    sizes="(max-width: 1120px) 20vw, 260px"
                    style={{ objectFit: "cover", objectPosition: "center 55%" }}
                  />
                  <div className="pigCaption">Garden</div>
                </div>

                <div className="pigTile" style={{ height: 172 }}>
                  <Image
                    src="/images/rear-view.webp"
                    alt="The house"
                    fill
                    sizes="(max-width: 1120px) 20vw, 260px"
                    style={{ objectFit: "cover", objectPosition: "center 55%" }}
                  />
                  <div className="pigCaption">The house</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pigGalleryFooter">
            <div className="pigGalleryNote">
              Quiet spaces, good light, and the kind of comfort you settle into quickly.
            </div>
            <Link href="/gallery" className="pigGalleryLink">
              View the full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* EAT & DRINK (Pig-style: the experience sells) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1.1fr .9fr", alignItems: "start" }}>
            <div>
              <div className="kicker">Eat & drink</div>
              <h2 style={{ fontSize: 34, marginTop: 12 }}>Breakfast worth getting up for.</h2>
              <p style={{ marginTop: 16, maxWidth: 660, opacity: 0.9, lineHeight: 1.7 }}>
                We keep mornings calm: good coffee, local produce, and a dining room that feels light and unhurried.
                If you’re heading out early for a coastal walk, we’ll help you start well.
              </p>
              <ul style={{ marginTop: 14, paddingLeft: 18, opacity: 0.9, lineHeight: 1.9 }}>
                <li>Seasonal, locally sourced breakfast</li>
                <li>Dietary requirements welcomed with notice</li>
                <li>Recommendations for the best dinner in Tenby</li>
              </ul>
              <div style={{ marginTop: 16 }}>
                <Link href="/contact" className="navLink" style={{ color: "var(--text)" }}>
                  Ask about breakfast, timings, and local recommendations
                </Link>
              </div>
            </div>

            <div className="surface" style={{ padding: 18 }}>
              <div className="kicker">A note from the house</div>
              <h3 style={{ fontSize: 20, marginTop: 10 }}>We’ll point you to the best Tenby.</h3>
              <p style={{ marginTop: 12, fontSize: 14, opacity: 0.9, lineHeight: 1.7 }}>
                Harbour walks, the right beach for the tide, a table that’s worth booking —
                we’ll guide you to what’s best on the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TENBY ITINERARY (Pig-style editorial guidance) */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <div className="kicker">Explore Tenby</div>
            <h2 style={{ fontSize: 34, marginTop: 12 }}>A couple of days, unhurried.</h2>
            <p style={{ marginTop: 16, opacity: 0.9 }}>
              Tenby rewards slowing down. A harbour town best explored on foot, with time for sea air,
              good coffee, and the right table booked for the evening.
            </p>
          </div>

          <div style={{ marginTop: 36, display: "grid", gap: 28, gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="kicker">Day one</div>
              <h3 style={{ fontSize: 22, marginTop: 10 }}>Arrive, settle, breathe.</h3>
              <p style={{ marginTop: 12, opacity: 0.9 }}>
                After you arrive, leave the car and walk. Head down towards the harbour as the light softens,
                take in the boats, and stop wherever feels right for a drink.
              </p>
              <p style={{ marginTop: 10, opacity: 0.9 }}>
                We’re always happy to recommend dinner depending on the night — Tenby is small,
                but the right table makes all the difference.
              </p>
            </div>

            <div>
              <div className="kicker">Day two</div>
              <h3 style={{ fontSize: 22, marginTop: 10 }}>Morning light and open sand.</h3>
              <p style={{ marginTop: 12, opacity: 0.9 }}>
                Start slowly with breakfast, then choose your beach. North Beach for space and breeze,
                South Beach for shelter and swimming — the tide and wind decide.
              </p>
              <p style={{ marginTop: 10, opacity: 0.9 }}>
                If the weather turns, the coastal path still delivers — even a short walk clears the head.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <Link href="/explore" className="pigGalleryLink">
              Our favourite walks, beaches, and places to eat
            </Link>
          </div>
        </div>
      </section>
      {/* THE ROOMS (quiet, not “shopfront”) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gap: 22, gridTemplateColumns: "1fr" }}>
            <div>
              <div className="kicker">The rooms</div>
              <h2 style={{ fontSize: 30, marginTop: 12 }}>Thoughtful, quiet, and made for sleep.</h2>
              <p style={{ marginTop: 14, maxWidth: 700, opacity: 0.9 }}>
                We’ve kept the rooms calm and comfortable — good linens, space to unpack, and the kind of quiet you only notice when it’s there.
              </p>
              <div style={{ marginTop: 14 }}>
                <Link href="/rooms" className="pigGalleryLink">
                  View rooms & details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE TENBY (curated, confident, local) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div className="kicker">Explore</div>
              <h2 style={{ fontSize: 30, marginTop: 12 }}>Tenby, at an unhurried pace.</h2>
              <p style={{ marginTop: 10, maxWidth: 860, opacity: 0.9 }}>
                A few favourites to help you plan a perfect couple of days — beaches, harbour walks, and places we genuinely recommend.
              </p>
            </div>
            <Link href="/explore" className="pigGalleryLink">All recommendations</Link>
          </div>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            }}
          >
            {[
              { title: "Harbour walk", note: "Early light, boats, coffee — the best start to the day." },
              { title: "North Beach", note: "Wide sand, sea air, and a proper reset." },
              { title: "Dinner in town", note: "We’ll point you to the best table depending on the night." },
            ].map((c) => (
              <div key={c.title} className="surface" style={{ padding: 18 }}>
                <div className="kicker">Tenby</div>
                <h3 style={{ fontSize: 18, marginTop: 10 }}>{c.title}</h3>
                <p style={{ marginTop: 10, fontSize: 14, opacity: 0.9 }}>{c.note}</p>
                <div style={{ marginTop: 12 }}>
                  <Link href="/explore" className="pigGalleryLink">
                    See details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNAL (quiet, editorial reassurance) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 16, opacity: 0.9 }}>
              Guests consistently rate Broadmead highly for location, breakfast, and comfort.
            </p>
            <div style={{ marginTop: 10 }}>
              <a
                href="https://www.google.com/search?q=Broadmead+Boutique+B%26B+Tenby+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="pigGalleryLink"
              >
                Read recent reviews →
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* BOOKING CTA */}
      <section id="book" className="section">
        <div className="container">
          <div className="surface" style={{ padding: 22 }}>
            <div className="kicker">Book direct</div>
            <h2 style={{ fontSize: 28, marginTop: 12 }}>Availability & rates.</h2>
            <p style={{ marginTop: 10, maxWidth: 860 }}>
              Quick link to your live booking page. We can embed the booking widget later.
            </p>
            <div style={{ marginTop: 16 }}>
              <a className="btn btnSolid" href="https://broadmeadtenby.wales/availability-tariff">Availability & Rates</a>
            </div>
          </div>

          <div style={{ paddingTop: 28, fontSize: 13, color: "rgba(15,31,38,0.55)" }}>
            <div style={{ maxWidth: 520 }}>
              Broadmead Boutique B&B Tenby, Pembrokeshire
              <br />
              A calm, characterful base for the coast.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



















