"use client";
import { useEffect, useState } from "react";

const SEL = ".grid img, .strip img, .two img, .step-img img";

export default function Lightbox() {
  const [gallery, setGallery] = useState(null);
  const [zoom, setZoom] = useState(null);

  // Open when a photo is clicked
  useEffect(() => {
    const onClick = (e) => {
      const img = e.target.closest?.(SEL);
      if (!img || img.closest("a")) return;
      const group = img.closest(".grid, .strip, .two, .steps") || img.parentElement;
      const imgs = [...group.querySelectorAll(SEL)];
      setGallery({
        items: imgs.map((el) => ({ src: el.src, alt: el.alt })),
        i: imgs.indexOf(img),
      });
      setZoom(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = () => { setGallery(null); setZoom(null); };
  const go = (d) => {
    setGallery((g) => ({ ...g, i: (g.i + d + g.items.length) % g.items.length }));
    setZoom(null);
  };

  // Keyboard and page scroll lock while open
  useEffect(() => {
    if (!gallery) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [gallery]);

  if (!gallery) return null;
  const { items, i } = gallery;
  const cur = items[i];

  const toggleZoom = (e) => {
    e.stopPropagation();
    if (zoom) return setZoom(null);
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={cur.alt} onClick={close}>
      <button className="lb-x" aria-label="Close" onClick={close}>×</button>
      {items.length > 1 && (
        <>
          <button className="lb-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
          <button className="lb-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
        </>
      )}
      <img
        src={cur.src}
        alt={cur.alt}
        className={zoom ? "zoomed" : ""}
        style={zoom ? { transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined}
        onClick={toggleZoom}
      />
      <p className="lb-cap">{cur.alt}{items.length > 1 ? `  (${i + 1} of ${items.length})` : ""}</p>
    </div>
  );
}