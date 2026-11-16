import { markets } from "../lib/markets";

export default function MarketTiles() {
  return (
    <section id="markets" className="sec stone">
      <h2>Monuments by country</h2>
      <p className="lead">Choose your market to see the styles we make for it.</p>
      <div className="tiles">
        {Object.entries(markets).map(([slug, m]) => (
          <a key={slug} href={`/markets/${slug}`} className="tile">
            <img src={`/img/${m.tile}.jpg`} alt="" loading="lazy" />
            <span><b>{m.name}</b>{m.items.length} designs</span>
          </a>
        ))}
      </div>
    </section>
  );
}