import Image from "next/image";
import Link from "next/link";
import type { Place } from "../data/explore";

export default function ExploreCard({ place }: { place: Place }) {
  return (
    <div className="surface" style={{ display: "grid", gap: 12 }}>
      <div style={{ position: "relative", height: 220 }}>
        <Image
          src={place.image}
          alt={place.title}
          fill
          sizes="(max-width: 1120px) 100vw, 360px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h3 style={{ fontSize: 20, marginTop: 4 }}>{place.title}</h3>
        <p style={{ fontSize: 14, opacity: 0.9 }}>{place.description}</p>
        {place.link && (
          <div style={{ marginTop: 10 }}>
            <Link href={place.link} className="pigGalleryLink">
              See details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
