import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

const P = "+91 96772 28886", MAIL = "Indigraa@gmail.com";
const img = (n) => `/img/${n}.jpg`;

const headstones = [
  ["design1", "Heart, Imperial Red"], ["design2", "Double heart, Imperial Red"], ["design3", "Triple heart, Imperial Red"], ["design4", "Oval with vase, Hassan Green"],
  ["design5", "Cross, Jet Black"], ["design6", "Heart with panel, Black and Red"], ["design7", "Temple style, Jet Black"], ["design8", "Cross with panel, Grey and Black"],
  ["import1", "Curved top, imported colour"], ["import3", "Long curved top with vase, imported colour"],
];
const sculptures = [
  ["sculpt1", "Heart held by hands"], ["sculpt3", "Jesus medallion, Imperial Red"], ["sculpt5", "Resting angel"], ["sculpt6", "Kneeling angel, Red"],
  ["sculpt7", "Kneeling angel, Black"], ["sculpt8", "Praying angel"], ["sculpt9", "Baby cherub"], ["sculpt10", "Sitting angel with wreath"], ["sculpt12", "Willow tree and two doves"],
];
const more = [
  ["bench1", "Benches", "Black, Paradiso and white sofa sets, polished"],
  ["slant1", "Slant markers", "Polished face, rough-cut sides"],
  ["stock3", "Stock dies and bases", "Ready serpentine and straight-top dies with bases"],
  ["vase1", "Vases", "Round, Regal and square taper, all polish"],
  ["war1", "Very large specials", "50 ft war memorial in Jet Black, assembled in our shed"],
  ["mausoleum", "Mausoleums", "Gray and red granite, built to custom sizes"],
];
const factory = [
  ["factory1", "Factory entrance"], ["factory2", "EOT crane for heavy handling"], ["factory3", "Hand polishing to a mirror finish"],
  ["factory4", "Container loading"], ["factory5", "Polished slabs in ready stock"], ["factory6", "Wooden crates for export"],
];
const quarry = ["quarry1", "quarry2", "quarry3", "quarry4", "quarry5"];

const Grid = ({ items, cls = "" }) => (
  <ul className={`grid ${cls}`}>
    {items.map(([n, t]) => (
      <li key={n}><img src={img(n)} alt={t} loading="lazy" /><span>{t}</span></li>
    ))}
  </ul>
);

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Granite memorials, cut and polished at the source.</h1>
            <p>
              Headstones, sculptures, benches and monuments from a 100% export-oriented factory in Tada, 70 km
              from Chennai Port. Thirty years of making, now with our own black granite quarry.
            </p>
            <div className="cta">
              <a className="btn" href="#contact">Request prices</a>
              <a className="btn ghost" href={`https://wa.me/919677228886`}>WhatsApp {P}</a>
            </div>
          </div>
          <img className="hero-img" src={img("hero")} alt="Granite angel headstone with white roses" />
        </section>

        <section id="quarry" className="sec dark">
          <div className="narrow">
            <h2>We own the quarry behind IG Black.</h2>
            <p>
              IG Black is our own close-grained, deep black granite, selected for American monuments. Because the
              blocks come from our quarry and go straight to our factory and into your container, there is no
              middleman in the price and no gap in supply.
            </p>
          </div>
          <ul className="facts">
            <li><b>Price control</b>No middleman. We own the quarry, so the buyer gets our best price.</li>
            <li><b>Quality control</b>Only the best blocks for monuments: close grain, dark black.</li>
            <li><b>Steady supply</b>Our own blocks are always in stock, so production does not stop.</li>
            <li><b>Quarry owner and factory</b>Not a trader. A permanent company.</li>
          </ul>
          <div className="strip">{quarry.map((q) => <img key={q} src={img(q)} alt="IG Black granite blocks at our quarry" loading="lazy" />)}</div>
        </section>

        <section id="headstones" className="sec">
          <h2>Headstones</h2>
          <p className="lead">Hearts, crosses, temple styles and curved tops. Every design can be made in any colour below.</p>
          <Grid items={headstones} cls="big" />
        </section>

        <section id="sculptures" className="sec stone">
          <h2>Sculpture designs</h2>
          <p className="lead">Hand-carved angels, cherubs, hands and floral work on polished granite.</p>
          <Grid items={sculptures} cls="big" />
        </section>

        <section id="range" className="sec">
          <h2>The full range</h2>
          <ul className="grid big">
            {more.map(([n, t, d]) => (
              <li key={n}><img src={img(n)} alt={t} loading="lazy" /><span><b>{t}</b>{d}</span></li>
            ))}
          </ul>
        </section>

        <section id="colours" className="sec stone">
          <h2>Colours</h2>
          <p className="lead">Fourteen Indian colours in regular production, plus imported colours on request.</p>
          <div className="two">
            <figure><img src={img("colours")} alt="Fourteen Indian granite colours: Bahama Blue, Black Galaxy, Blue Pearl, Cat's Eye, Forest Green, Hassan Green, Indian Aurora, M Grey, Multi Red, Paradiso, Premium Black, Red, Regal, TR Green" loading="lazy" /><figcaption>Indian colours</figcaption></figure>
            <figure><img src={img("imported")} alt="Imported granites: Blue Pearl and Emerald Pearl from Norway, Impala Black from South Africa, Kuru Gray from Finland, Olive Green, Virginia Black" loading="lazy" /><figcaption>Imported rough blocks are cut, polished and carved in our factory.</figcaption></figure>
          </div>
        </section>

        <section id="factory" className="sec dark">
          <h2>Inside the factory</h2>
          <p className="lead">Graddagunta, Tada, on NH16. Factory visits are welcome.</p>
          <Grid items={factory} cls="three" />
        </section>

        <section id="contact" className="sec contact">
          <div>
            <h2>Send us your enquiry</h2>
            <p className="lead">Tell us the designs, colours and quantities you need. We reply by email or WhatsApp.</p>
            <ContactForm />
          </div>
          <aside>
            <h3>Indigra Global Enterprises</h3>
            <p>A 100% export-oriented unit</p>
            <dl>
              <dt>Contact</dt><dd>A Mohanraj</dd>
              <dt>Phone / WhatsApp</dt><dd><a href="tel:+919677228886">{P}</a></dd>
              <dt>Email</dt><dd><a href={`mailto:${MAIL}`}>{MAIL}</a></dd>
              <dt>Address</dt><dd>Akkampeta, Tada, Tirupati District, Andhra Pradesh, India</dd>
              <dt>Shipping</dt><dd>FOB Chennai or Krishnapatnam Port. Chennai Port is 70 km away.</dd>
              <dt>Coordinates</dt><dd>13.643284, 80.014568</dd>
            </dl>
            <a className="btn ghost dk" href="https://www.google.com/maps?q=13.643222,80.016667" target="_blank" rel="noreferrer">Open factory location</a>
          </aside>
        </section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} Indigra Global Enterprises. 30 years of experience, factory direct.</footer>
    </>
  );
}
