import Image from "next/image";
import Link from "next/link";

/**
 * The homepage introduces The Broadmead in the simplest possible way:
 * a concise hero, a sense of feeling, a glimpse of the house itself
 * and curated insight into Tenby. Each section stays calm and invitational.
 */
export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="fullBleed hero heroBleed"
        style={{ position: "relative" }}
      >
        <Image
          src="/images/hero.jpg"
          alt="The Broadmead Boutique B&B exterior"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />

        {/* Gradient overlays remain defined in globals.css via the .hero class */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            alignItems: "center",
          }}
        >
          <div className="container editorialCenter" style={{ paddingTop: 72, paddingBottom: 48 }}>
            <div
              style={{
                maxWidth: 640, margin: "0 auto", textAlign: "center",
                color: "white",
                textShadow: "0 2px 28px rgba(0,0,0,0.55)",
              }}
            >
              <h1 className="heroTitle">The Broadmead<br />in Tenby.</h1>

              {/* A single line of copy conveys the feeling without overselling */}
              {/* Primary call-to-action only */}
              <div className="heroCtas" style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
                <a className="btn btnSolid" href="#book" style={{ background: "rgba(15,53,64,0.92)", border: "1px solid rgba(255,255,255,0.22)", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>Check availability</a>
              </div>

              {/* Quiet reassurance about booking direct */}
            </div>
          </div>
        </div>


        <div
          className="heroScrollCue"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            bottom: 28,
            transform: "translateX(-50%)",
            display: "grid",
            gap: 10,
            placeItems: "center",
            opacity: 0.95,
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 10px 22px rgba(0,0,0,0.45)",
            pointerEvents: "none",
          }}
        >
          <span
            className="heroScrollLabel"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              opacity: 0.85,
            }}
          >
            SCROLL
          </span>
          <span
            className="heroScrollLine"
            style={{
              width: 1,
              height: 44,
              background: "rgba(255,255,255,0.85)",
              borderRadius: 999,
            }}
          />
        </div>
      </section>

      {/* Editorial intro with ghost logo (Pig-style) */}
      <section className="section ghostSection">
        <div className="container">
          <div className="ghostCopy">
            <h2 className="kicker">The House</h2>
            <p>
              Set in a quiet, leafy corner of Tenby, <strong>The Broadmead</strong> is an 18th-century country house surrounded by gardens, sky and space, just a short walk from the harbour, beaches and walled town.
            </p>

            <p>
              Inside, it’s unhurried and welcoming: individually designed rooms, comfortable places to linger, and mornings that begin slowly over a generous breakfast. Days drift between sea air and garden light; evenings return to soft corners, a quiet drink, and the feeling of being exactly where you’re meant to be.
            </p>

          </div>
        </div>
      </section>



      {/* Existing first editorial content stays here */}


      {/* THE FEELING (short, editorial) */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="editorialCenter">
            <h2 style={{ fontSize: 34, marginTop: 12 }}>
              Comfortable, considered, quietly confident.
            </h2>
            <p
              style={{
                marginTop: 14,
                opacity: 0.9,
                maxWidth: 660,
                lineHeight: 1.7,
              }}
            >Soft light, open space, and rooms that feel easy to settle into.</p>
</div>
        </div>

      </section>

      <section className="section reviewSection">
        <div className="container">
          <blockquote className="editorialReview">
            <p>
              “A beautifully calm place to stay — thoughtful, welcoming, and perfectly placed for exploring Tenby.”
            </p>
            <cite>— Recent guest at The Broadmead</cite>
          </blockquote>
        </div>
      </section>


      {/* WATERMARK EDITORIAL SECTION */}
      <section className="section watermarkSection">
        <div className="container watermarkInner">
          <div className="kicker">A house for unhurried stays</div>
          <h2>Quiet, design-led, and close to the sea.</h2>
          <p>
            The Broadmead is a calm base for Tenby  light rooms, thoughtful details, and breakfasts that follow the season.
            Nothing loud. Everything considered.
          </p>
        </div>
      </section>
      {/* EDITORIAL IMAGE GRID (kept to sell the vibe) */}
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          <div
            className="pigGallery"
            style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}
          >
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

              <div
                style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
              >
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

      <section className="section reviewSection">
        <div className="container">
          <blockquote className="editorialReview">
            <p>
              “A beautifully calm place to stay — thoughtful, welcoming, and perfectly placed for exploring Tenby.”
            </p>
            <cite>— Recent guest at The Broadmead</cite>
          </blockquote>
        </div>
      </section>


      {/* WATERMARK EDITORIAL SECTION */}

      {/* HOUSE NARRATIVE  evokes the feeling of living here */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="editorialCenter">
            <h2 style={{ fontSize: 32, marginTop: 12 }}>A place to exhale.</h2>
            <p style={{ marginTop: 12, maxWidth: 720, opacity: 0.9 }}>
              The Broadmead feels less like a hotel and more like the house you wish you owned
              quiet, gentle and designed for lingering.
            </p>
            <p style={{ marginTop: 10, maxWidth: 720, opacity: 0.9 }}>
              Arrive, drop your shoulders and let the day unfold at your own pace.
            </p>
            <div style={{ marginTop: 12 }}>
              <Link href="/about" className="pigGalleryLink">Learn more about the house</Link>
            </div>
          </div>
        </div>

      </section>

      <section className="section reviewSection">
        <div className="container">
          <blockquote className="editorialReview">
            <p>
              “A beautifully calm place to stay — thoughtful, welcoming, and perfectly placed for exploring Tenby.”
            </p>
            <cite>— Recent guest at The Broadmead</cite>
          </blockquote>
        </div>
      </section>


      {/* WATERMARK EDITORIAL SECTION */}

      {/* CURATED TENBY  a taste of whats beyond the door */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="editorialCenter">
            <h2 style={{ fontSize: 32, marginTop: 12 }}>Our favourite Tenby moments.</h2>
            <p style={{ marginTop: 12, maxWidth: 720, opacity: 0.9 }}>
              Whether it&apos;s the right beach for the wind, a harbour walk at dusk or the table you can&apos;t miss,
              we curate a few local favourites just for you.
            </p>
            <div style={{ marginTop: 12 }}>
              <Link href="/explore" className="pigGalleryLink">See our Tenby recommendations</Link>
            </div>
          </div>
        </div>

      </section>

      <section className="section reviewSection">
        <div className="container">
          <blockquote className="editorialReview">
            <p>
              “A beautifully calm place to stay — thoughtful, welcoming, and perfectly placed for exploring Tenby.”
            </p>
            <cite>— Recent guest at The Broadmead</cite>
          </blockquote>
        </div>
      </section>


      {/* WATERMARK EDITORIAL SECTION */}

      {/* TWO JOURNEY CARDS (stay / explore) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            <div className="surface" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/rooms/placeholder.jpg"
                  alt="Rooms"
                  fill
                  sizes="(max-width: 1120px) 100vw, 520px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 18 }}>
                <h3 style={{ fontSize: 20, marginTop: 10 }}>Rooms made for sleep.</h3>
                <p style={{ marginTop: 10, fontSize: 14, opacity: 0.9 }}>
                  Calm interiors and quiet nights.
                </p>
                <div style={{ marginTop: 12 }}>
                  <Link href="/rooms" className="pigGalleryLink">
                    View rooms
                  </Link>
                </div>
              </div>
            </div>

            <div className="surface" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/explore/placeholder.jpg"
                  alt="Explore Tenby"
                  fill
                  sizes="(max-width: 1120px) 100vw, 520px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 18 }}>
                <h3 style={{ fontSize: 20, marginTop: 10 }}>Tenby, at an unhurried pace.</h3>
                <p style={{ marginTop: 10, fontSize: 14, opacity: 0.9 }}>
                  Harbour walks, the right beach for the tide and the best tables.
                </p>
                <div style={{ marginTop: 12 }}>
                  <Link href="/explore" className="pigGalleryLink">
                    Our recommendations
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 12, fontSize: 13, opacity: 0.75 }}>
            Tip: replace the two placeholder images with your best room and Tenby shots.
          </div>
        </div>

      </section>

      <section className="section reviewSection">
        <div className="container">
          <blockquote className="editorialReview">
            <p>
              “A beautifully calm place to stay — thoughtful, welcoming, and perfectly placed for exploring Tenby.”
            </p>
            <cite>— Recent guest at The Broadmead</cite>
          </blockquote>
        </div>
      </section>


      {/* WATERMARK EDITORIAL SECTION */}

      {/* TRUST (single line, quiet) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="editorialCenter">
            {/* Use a short review quote instead of generic wording */}
            <p style={{ fontSize: 16, opacity: 0.9 }}>
              The perfect base for exploring Tenby  calm rooms, thoughtful hosts.
            </p>
            <div style={{ marginTop: 10 }}>
              <a
                href="https://www.google.com/search?q=The Broadmead+Boutique+B%26B+Tenby+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="pigGalleryLink"
              >
                Read recent reviews ?
              </a>
            </div>
          </div>
        </div>

      </section>

      <section className="section reviewSection">
        <div className="container">
          <blockquote className="editorialReview">
            <p>
              “A beautifully calm place to stay — thoughtful, welcoming, and perfectly placed for exploring Tenby.”
            </p>
            <cite>— Recent guest at The Broadmead</cite>
          </blockquote>
        </div>
      </section>


      {/* WATERMARK EDITORIAL SECTION */}

      {/* BOOKING CTA */}
      <section id="book" className="section">
        <div className="container">
          <div className="surface" style={{ padding: 22 }}>
            <h2 style={{ fontSize: 28, marginTop: 12 }}>Availability & rates.</h2>
            <p style={{ marginTop: 10, maxWidth: 860 }}>
              Quick link to your live booking page. We can embed the booking widget later.
            </p>
            <div style={{ marginTop: 16 }}>
              <a
                className="btn btnSolid"
                href="https://broadmeadtenby.wales/availability-tariff"
              >
                Availability & Rates
              </a>
            </div>
          </div>

          <div
            style={{ paddingTop: 28, fontSize: 13, color: "rgba(15,31,38,0.55)" }}
          >
            <div className="editorialCenter">
              The Broadmead Boutique B&B  Tenby, Pembrokeshire
              <br />
              A calm, characterful base for the coast.
            </div>
          </div>
        </div>

      </section>

      {/* WATERMARK EDITORIAL SECTION */}

    </div>
  );
}









