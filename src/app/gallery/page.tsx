"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxImage } from "../../components/Lightbox";

const images: LightboxImage[] = [
  { src: "/images/dining.webp", alt: "Dining room" },
  { src: "/images/lounge.webp", alt: "Lounge & fireside" },
  { src: "/images/garden.webp", alt: "Garden" },
  { src: "/images/rear-view.webp", alt: "The house" },
];

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onPrev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const onNext = () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <div className="kicker">Gallery</div>
            <h1 style={{ fontSize: 32, marginTop: 12 }}>A glimpse of Broadmead</h1>
            <p style={{ marginTop: 10, maxWidth: 680, opacity: 0.9 }}>
              Light, texture, and the quiet details that make a stay feel easy.
            </p>
          </div>

          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {images.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setOpenIndex(idx)}
                className="surface"
                style={{ position: "relative", height: 190, overflow: "hidden", padding: 0, cursor: "pointer", background: "transparent" }}
                aria-label={`Open image: ${img.alt}`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1120px) 100vw, 320px" style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
}
