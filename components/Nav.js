"use client";
import { useState } from "react";

const links = [
  ["/#quarry", "Premium Black quarry"],
  ["/#markets", "By country"],
  ["/#headstones", "Headstones"],
  ["/#sculptures", "Sculptures"],
  ["/#colours", "Colours"],
  ["/process", "How we make it"],
  ["/about", "About us"],
  ["/#contact", "Enquire"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <a href="/" className="brand">Indigra Global Enterprises</a>

      <button
        className={`burger ${open ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      <nav id="menu" className={open ? "open" : ""}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={close} className={href === "/#contact" ? "pill" : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}