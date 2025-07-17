import Cards from "./Cards";

function Speisekarte() {
  return (
    <section id="Speisekarte-Sektion">
      <h2 className="display-3 fw-light text-center mt-3">Speisekarte</h2>
      <p className="lead text-center text-muted">
        Unsere Speißen aus der ganzen Welt
      </p>
      <p className="text-center manufacturing-consent fs-3">
        Hier finden Sie eine Auswahl der beliebtesten und am besten bewerteten
        Gerichte unserer Speisekarte
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
        </div>
        <div className="row mt-5 pt-4 align-items-center justify-content-around border-top border-black shadow">
          <div className="col-12 lead text-center fs-1 p-2 mb-3">
            Italienisch
          </div>
          <Cards
            title="Penne all’Arrabbiata"
            description="Al dente Penne in einer pikanten Knoblauch-Chili-Tomatensauce – feurig, frisch, unwiderstehlich"
            imageUrl="penne-all-arrabbiata.jpg"
            price={14.99}
            colSize={["3", "5"]}
          />
          <Cards
            title="Pizza Diavolo"
            description="Knuspriger Teig, würzige Tomatensauce und feurig-scharfe Salami – pure Leidenschaft auf deinem Teller"
            imageUrl="pizza-diavolo.jpg"
            price={19.99}
            colSize={["4", "5"]}
            cardHeader={true}
          />
          <Cards
            title="Ossobuco"
            description="Zart geschmorte Kalbshaxe in aromatischer Gemüse-Weißwein-Soße – ein Fest für alle Sinne"
            imageUrl="Ossobuco-alla-mialnse.jpg"
            price={22.99}
            colSize={["3", "5"]}
          />
        </div>
        <div className="row pt-4 align-items-center justify-content-around border-top border-black">
          <div className="col-12 lead text-center fs-1 p-2 mb-3">
            Mexikanisch
          </div>
          <Cards
            title="Tamales"
            description="Gedämpfter Maisteig, gefüllt mit Fleisch, Chili oder süßen Zutaten, eingewickelt in Maisblätter – ein traditionelles Festtagsessen"
            imageUrl="portada-tamales.jpg"
            price={20.99}
            colSize={["3", "5"]}
          />
          <Cards
            title="Tacos al pastor"
            description="Saftig marinierte Schweinefleischscheiben vom Drehspieß, serviert auf Maistortillas mit Ananas, Zwiebeln und Koriander"
            imageUrl="tacos-al-pastor.jpg"
            price={18.99}
            colSize={["4", "5"]}
            cardHeader={true}
          />
          <Cards
            title="Pozole Rojo"
            description="Herzhafte Suppe aus weißem Mais (Hominy), Schweinefleisch und roter Chili-Sauce, garniert mit Rettich, Salat, Zwiebeln und Limette"
            imageUrl="original-pozole-rojo.jpg"
            price={19.99}
            colSize={["3", "5"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Speisekarte;
