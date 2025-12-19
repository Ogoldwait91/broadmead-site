"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type LightboxImage = { src: string; alt: string };

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 80,
          background: "rgba(15,31,38,.92)",
          display: "grid",
          placeItems: "center",
          padding: 18,
        }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          style={{ width: "min(1100px, 100%)" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ color: "rgba(246,240,232,.85)", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase" }}>
              {index + 1} / {images.length}
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{ color: "#f6f0e8", background: "transparent", border: "1px solid rgba(246,240,232,.2)", borderRadius: 10, padding: "8px 10px" }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(246,240,232,.18)" }}>
            <img src={img.src} alt={img.alt} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
            <button
              onClick={onPrev}
              aria-label="Previous image"
              style={{ color: "#f6f0e8", background: "transparent", border: "1px solid rgba(246,240,232,.2)", borderRadius: 10, padding: "8px 10px" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={onNext}
              aria-label="Next image"
              style={{ color: "#f6f0e8", background: "transparent", border: "1px solid rgba(246,240,232,.2)", borderRadius: 10, padding: "8px 10px" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
