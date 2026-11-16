"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "sending", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send.");
      form.reset();
      setState({ status: "ok", message: "Enquiry sent. We will reply by email or WhatsApp." });
    } catch (err) {
      setState({ status: "error", message: `${err.message} You can also email enquire@indigraglobal.com directly.` });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input name="name" required maxLength={100} autoComplete="name" /></label>
      <label>Company<input name="company" maxLength={100} autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Phone / WhatsApp<input name="phone" maxLength={30} autoComplete="tel" /></label>
      <label className="wide">I am interested in
        <select name="interest" defaultValue="Headstones">
          {["Headstones", "Sculptures", "Benches", "Slants", "Vases", "Large specials (war memorials, mausoleums)", "IG Black blocks / slabs", "Imported colours", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="wide">Message
        <textarea name="message" rows={5} required maxLength={3000} placeholder="Designs, colours, sizes, quantity, destination port" />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" disabled={state.status === "sending"}>
        {state.status === "sending" ? "Sending" : "Send enquiry"}
      </button>
      <p role="status" className={`note ${state.status}`}>{state.message}</p>
    </form>
  );
}
