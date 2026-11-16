import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import { markets } from "../../../lib/markets";

export function generateStaticParams() {
  return Object.keys(markets).map((country) => ({ country }));
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const m = markets[country];
  return m ? { title: `${m.name} monuments | Indigra Global Enterprises`, description: m.blurb } : {};
}

export default async function Market({ params }) {
  const { country } = await params;
  const m = markets[country];
  if (!m) notFound();

  return (
    <>
      <Nav />
      <main>
        <section className="pagehead">
          <h1>{m.name} monuments.</h1>
          <p>{m.blurb}</p>
        </section>

        <section className="sec">
          <ul className="grid big">
            {m.items.map(([n, t]) => (
              <li key={n}>
                <img src={`/img/${n}.jpg`} alt={t} loading="lazy" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "2rem" }}>
            <a className="btn ghost dk" href="/#markets">Back to all countries</a>
          </p>
        </section>

        <section className="endcta">
          <h2>Need {m.name} designs made?</h2>
          <p>Send us your drawings, sizes and preferred colour. Custom designs are welcome.</p>
          <a className="btn" href="/#contact">Send an enquiry</a>
        </section>
      </main>
      <footer className="foot">© {new Date().getFullYear()} Indigra Global Enterprises.</footer>
    </>
  );
}