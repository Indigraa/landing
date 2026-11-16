import Nav from "../../components/Nav";

export const metadata = {
  title: "How we make your monument | Indigra Global Enterprises",
  description: "From our own IG Black quarry to the factory, polishing, carving and export packing in wooden crates.",
};

const steps = [
  ["quarry1", "Choosing and marking the block", "Our own quarry gives us first pick. We mark each block of IG Black where it will be cut, selecting only close-grained, deep black stone for monuments.", ["Own quarry, no middleman", "Only the best blocks are chosen for monument work"]],
  ["quarry2", "Cutting blocks at the quarry", "Blocks are cut to size at the quarry and stacked in our quarry yard, ready to move to the factory.", ["Freshly cut blocks ready for the factory", "Full stock, so production never waits for material"]],
  ["block-cutting", "Sawing blocks to size", "A large circular saw, cooled with a constant flow of water, cuts the rough granite block into the sizes needed for slabs and monument parts.", ["Water-cooled cutting for a clean, accurate cut", "Blocks are cut to the sizes marked for each monument"]],
  ["factory2", "Heavy handling in the factory", "At the factory, our EOT crane lifts blocks and heavy slabs safely onto the cutting and polishing lines. Imported rough blocks from Norway, South Africa and Finland are handled the same way.", ["Overhead crane for large monuments", "Imported colours made in the same factory"]],
  ["factory3", "Cutting and mirror polishing", "Stone is cut to the monument sizes and polished by hand to a mirror finish. Polished faces can be paired with rough-cut sides, as on our slants and stock dies.", ["Hand polishing for a mirror finish", "Polished or rough-cut sides as the design needs"]],
  ["sculpt6", "Carving and shaping", "Hearts, crosses, angels, cherubs and floral work are carved into the stone, then fitted to the polished panels and bases.", ["Sculptures carved in our factory", "Custom designs welcome"]],
  ["design6", "Assembly and checking", "Each monument is assembled with its base and fittings and checked. For very large work such as our 50 ft war memorial, the full curve is trial-assembled in the shed, with parts marked A, B, C so site fitting is easy.", ["Sizes and part marks written on every piece", "Trial assembly for large specials"]],
  ["factory6", "Packing in wooden crates", "Finished pieces and polished slabs are packed in strong wooden crates, labelled and ready for export.", ["Export-grade wooden crates", "Packed for long sea journeys"]],
  ["factory4", "Container loading and shipping", "Crates are loaded into the container at our factory. We ship FOB Chennai or Krishnapatnam Port, with Chennai Port about 70 km away.", ["FOB Chennai or Krishnapatnam", "Quarry to factory to container, in our control"]],
];

export default function Process() {
  return (
    <>
      <Nav />
      <main>
        <section className="pagehead">
          <h1>From our quarry to your container.</h1>
          <p>
            We own the quarry, the factory and the packing line, so every monument is made under our control from the first
            cut to the last crate.
          </p>
        </section>
        <section className="sec">
          <ol className="steps">
            {steps.map(([n, t, d, pts]) => (
              <li key={n} className="step">
                <div className="step-img"><img src={`/img/${n}.jpg`} alt={t} loading="lazy" /></div>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <ul>{pts.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="endcta">
          <h2>Ready to place an order?</h2>
          <p>Send us your designs, colours and quantities.</p>
          <a className="btn" href="/#contact">Send an enquiry</a>
        </section>
      </main>
      <footer className="foot">© {new Date().getFullYear()} Indigra Global Enterprises. 30 years of experience, factory direct.</footer>
    </>
  );
}
