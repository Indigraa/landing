import Nav from "../../components/Nav";

export const metadata = {
  title: "About us | Indigra Global Enterprises",
  description:
    "Granite manufacturer and exporter since 2000, with 1000+ shipments worldwide. Custom and stock monuments, sculptures, markers, slants, benches, vases, urns, slabs and tiles.",
};

const stats = [
  ["2000", "Year founded"],
  ["26+", "Years of exporting"],
  ["1000+", "Shipments worldwide"],
];

const products = [
  "Custom designs and stock shapes of monuments",
  "Sculpted monuments",
  "Markers and slants",
  "Bench sets",
  "Flower vases and urns",
  "Slabs and tiles",
];

const colours = [
  ["Blue Pearl", "Norway"],
  ["Emerald Pearl", "Norway"],
  ["Virginia Black", "USA"],
  ["Balmoral Red", "Finland"],
  ["Nero Impala", "South Africa"],
  ["Olive Green", "South Africa"],
];

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <section className="pagehead">
          <h1>Granite manufacturers, exporting worldwide.</h1>
          <p>
            Indigra Global Enterprises was founded in 2000. We are renowned manufacturers of granite with more than
            26 years of exporting experience.
          </p>
        </section>

        <section className="sec">
          <ul className="facts light">
            {stats.map(([n, l]) => (
              <li key={l}><b>{n}</b>{l}</li>
            ))}
          </ul>
          <div className="two" style={{ marginTop: "3rem" }}>
            <div>
              <h2>Seamless shipments across the globe</h2>
              <p>
                We have seamlessly executed over 1000 shipments around the world. Our factory is 100% export oriented,
                so every part of our work, from cutting to crating, is built around getting monuments to you safely.
              </p>
              <p>
                We offer custom designs as well as stock shapes, so you can order exactly what your customers ask for
                or fill your yard from ready stock.
              </p>
            </div>
            <div>
              <h3>What we make</h3>
              <ul className="plain">
                {products.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="sec stone">
          <h2>Materials from around the world</h2>
          <p className="lead">
            We work with granite sourced globally, including South Africa, Angola, USA, Brazil, Norway and Finland. Our
            specialist colours:
          </p>
          <ul className="grid">
            {colours.map(([c, o]) => (
              <li key={c}><span><b>{c}</b>{o}</span></li>
            ))}
          </ul>
          <p style={{ marginTop: "1.5rem" }}>
            <a className="btn" href="/#colours">See all colours</a>
          </p>
        </section>

        <section className="endcta">
          <h2>Talk to us about your next order</h2>
          <p>Custom designs, stock shapes and imported colours.</p>
          <a className="btn" href="/#contact">Send an enquiry</a>
        </section>
      </main>
      <footer className="foot">© {new Date().getFullYear()} Indigra Global Enterprises.</footer>
    </>
  );
}