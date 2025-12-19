"use client";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function Img({ src, alt, className }: Props) {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          el.style.display = "none";
          const parent = el.parentElement as HTMLDivElement | null;
          if (parent) {
            parent.style.background =
              "radial-gradient(900px 280px at 30% 0%, rgba(47,111,115,0.20), rgba(47,111,115,0.00)), linear-gradient(135deg, rgba(15,31,38,0.10), rgba(15,31,38,0.03))";
          }
        }}
      />
    </div>
  );
}
