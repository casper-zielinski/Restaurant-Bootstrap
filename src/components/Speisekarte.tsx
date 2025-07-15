import Cards from "./Cards";

function Speisekarte() {
  return (
    <section id="Speisekarte-Sektion">
      <h2 className="display-3 fw-light text-center mt-3">Speisekarte</h2>
      <p className="lead text-center text-muted">
        Unsere Speißen aus der ganzen Welt
      </p>
      <div className="border-top border-black shadow-lg container-fluid">
        <div className="row my-5 pt-4 align-items-center justify-content-around ">
          <div className="col-12 lead text-center fs-1 p-2 mb-3">
            Asiatisches
          </div>
          <Cards
            title="Sushi"
            description="Frischer Fisch und Hochwertige Zutaten"
            imageUrl="Shusi.jpg"
            price={17.99}
            colSize={["3", "5"]}
          />
          <Cards
            title="Chicken-Teriyaki"
            description="Zartes, saftiges Hähnchenfleisch mit Herzhaft-süßlicher Teriyaki-Sauce"
            imageUrl="Chicken-Teriyaki-Gaumenfreundin.webp"
            price={15.99}
            colSize={["4", "5"]}
            cardHeader={true}
          />
          <Cards
            title="Soba mit Garnelen"
            description="Frische, saftige Garnelen mit zarter Süße"
            imageUrl="sobamitgarnelen.jpg"
            price={16.99}
            colSize={["3", "5"]}
          />
          <Cards
            title="Ramen"
            description=""
            imageUrl="Ramen.jpg"
            price={9.99}
            colSize={["3", "5"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Speisekarte;
