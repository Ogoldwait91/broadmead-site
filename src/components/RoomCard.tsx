import Image from "next/image";
import Link from "next/link";
import type { Room } from "../data/rooms";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="surface" style={{ display: "grid", gap: 16 }}>
      <div style={{ position: "relative", height: 260 }}>
        <Image
          src={room.image}
          alt={room.title}
          fill
          sizes="(max-width: 1120px) 100vw, 360px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div>
        <h3 style={{ fontSize: 22, marginBottom: 8 }}>{room.title}</h3>
        <p style={{ opacity: 0.9 }}>{room.description}</p>
        <div style={{ marginTop: 12 }}>
          <Link href="#book" className="pigGalleryLink">
            Check availability
          </Link>
        </div>
      </div>
    </div>
  );
}
