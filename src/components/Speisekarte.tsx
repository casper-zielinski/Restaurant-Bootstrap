import { useEffect, useState } from "react";
import Cards from "./Cards";
import CardsCarousel from "./CardsCarousel";

function Speisekarte() {
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); //to set the Variable to true if its Smartphone Size

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile; // ← du gibst hier den Zustand zurück
  }

  const isMobile = useIsMobile();

  return (
    <section id="Speisekarte-Sektion" className="Sektion">
      <h2 className="display-3 fw-light text-center p-3 border-top">
        Speisekarte
      </h2>
      <p className="lead text-center text-light">
        Unsere Speisen aus der ganzen Welt
      </p>
      <p className="text-center manufacturing-consent fs-3">
        Hier finden Sie eine Auswahl der beliebtesten und am besten bewerteten
        Gerichte unserer Speisekarte
      </p>
      <div className="border-top border-bottom border-secondary container-fluid">
        {!isMobile ? (
          <div className="row my-3 pt-4 align-items-center justify-content-around d-none d-md-flex">
            <div className="col-12 lead text-center fs-1 p-2 mb-3">
              Asiatisches
            </div>
            <Cards
              title="Sushi"
              description="Frischer Fisch und Hochwertige Zutaten"
              imageUrl="Shusi.webp"
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
              imageUrl="sobamitgarnelen.webp"
              price={16.99}
              colSize={["3", "5"]}
            />
          </div>
        ) : (
          <div className="d-flex d-md-none justify-content-center row">
            <div className="col-12 lead text-center fs-1 p-2">Asiatisches</div>
            <div className="col-12 mb-3">
              <CardsCarousel
                id="Asia-Card-Carousel"
                cards={[
                  {
                    title: "Chicken-Teriyaki",
                    description:
                      "Zartes, saftiges Hähnchenfleisch mit Herzhaft-süßlicher Teriyaki-Sauce",
                    imageUrl: "Chicken-Teriyaki-Gaumenfreundin.webp",
                    price: 15.99,
                    colSize: ["3", "12"],
                    cardHeader: true,
                  },
                  {
                    title: "Sushi",
                    description: "Frischer Fisch und Hochwertige Zutaten",
                    imageUrl: "Shusi.webp",
                    price: 17.99,
                    colSize: ["3", "12"],
                  },
                  {
                    title: "Soba mit Garnelen",
                    description: "Frische, saftige Garnelen mit zarter Süße",
                    imageUrl: "sobamitgarnelen.webp",
                    price: 16.99,
                    colSize: ["3", "12"],
                  },
                ]}
              />
            </div>
          </div>
        )}

        {!isMobile ? (
          <div className="row mt-5 pt-4 align-items-center d-none d-md-flex justify-content-around border-top border-secondary">
            <div className="col-12 lead text-center fs-1 p-2 mb-3">
              Italienisch
            </div>
            <Cards
              title="Penne all’Arrabbiata"
              description="Al dente Penne in einer pikanten Knoblauch-Chili-Tomatensauce – feurig, frisch, unwiderstehlich"
              imageUrl="penne-all-arrabbiata.webp"
              price={14.99}
              colSize={["3", "5"]}
            />
            <Cards
              title="Pizza Diavolo"
              description="Knuspriger Teig, würzige Tomatensauce und feurig-scharfe Salami – pure Leidenschaft auf deinem Teller"
              imageUrl="pizza-diavolo.webp"
              price={19.99}
              colSize={["4", "5"]}
              cardHeader={true}
            />
            <Cards
              title="Ossobuco"
              description="Zart geschmorte Kalbshaxe in aromatischer Gemüse-Weißwein-Soße – ein Fest für alle Sinne"
              imageUrl="Ossobuco-alla-mialnse.webp"
              price={22.99}
              colSize={["3", "5"]}
            />
          </div>
        ) : (
          <div className="d-flex d-md-none justify-content-center row mt-3 border-top border-secondary">
            <div className="col-12 lead text-center fs-1 p-1 mb-3">
              Italienisch
            </div>
            <div className="col-12 mb-3">
              <CardsCarousel
                id="Italien-Card-Carousel"
                cards={[
                  {
                    title: "Pizza Diavolo",
                    description:
                      "Knuspriger Teig, würzige Tomatensauce und feurig-scharfe Salami – pure Leidenschaft auf deinem Teller",
                    imageUrl: "pizza-diavolo.webp",
                    price: 19.99,
                    colSize: ["3", "12"],
                    cardHeader: true,
                  },
                  {
                    title: "Penne all’Arrabbiata",
                    description:
                      "Al dente Penne in einer pikanten Knoblauch-Chili-Tomatensauce – feurig, frisch, unwiderstehlich",
                    imageUrl: "penne-all-arrabbiata.webp",
                    price: 14.99,
                    colSize: ["3", "5"],
                  },
                  {
                    title: "Ossobuco",
                    description:
                      "Zart geschmorte Kalbshaxe in aromatischer Gemüse-Weißwein-Soße – ein Fest für alle Sinne",
                    imageUrl: "Ossobuco-alla-mialnse.webp",
                    price: 22.99,
                    colSize: ["3", "5"],
                  },
                ]}
              />
            </div>
          </div>
        )}

        {!isMobile ? (
          <div className="row pt-4 align-items-center justify-content-around border-top border-secondary d-none d-md-flex">
            <div className="col-12 lead text-center fs-1 p-2 mb-3">
              Mexikanisch
            </div>
            <Cards
              title="Tamales"
              description="Gedämpfter Maisteig, gefüllt mit Fleisch, Chili oder süßen Zutaten, eingewickelt in Maisblätter – ein traditionelles Festtagsessen"
              imageUrl="portada-tamales.webp"
              price={20.99}
              colSize={["3", "5"]}
            />
            <Cards
              title="Tacos al pastor"
              description="Saftig marinierte Schweinefleischscheiben vom Drehspieß, serviert auf Maistortillas mit Ananas, Zwiebeln und Koriander"
              imageUrl="tacos-al-pastor.webp"
              price={18.99}
              colSize={["4", "5"]}
              cardHeader={true}
            />
            <Cards
              title="Pozole Rojo"
              description="Herzhafte Suppe aus weißem Mais (Hominy), Schweinefleisch und roter Chili-Sauce, garniert mit Rettich, Salat, Zwiebeln und Limette"
              imageUrl="original-pozole-rojo.webp"
              price={19.99}
              colSize={["3", "5"]}
            />
          </div>
        ) : (
          <div className="d-flex d-md-none justify-content-center row mt-3 border-top border-secondary">
            <div className="col-12 lead text-center fs-1 p-2 mb-3">
              Mexikanisch
            </div>
            <div className="col-12 mb-3">
              <CardsCarousel
                id="Mexican-Card-Carousel"
                cards={[
                  {
                    title: "Tacos al pastor",
                    description:
                      "Saftig marinierte Schweinefleischscheiben vom Drehspieß, serviert auf Maistortillas mit Ananas, Zwiebeln und Koriander",
                    imageUrl: "tacos-al-pastor.webp",
                    price: 18.99,
                    colSize: ["4", "5"],
                    cardHeader: true,
                  },
                  {
                    title: "Tamales",
                    description:
                      "Gedämpfter Maisteig, gefüllt mit Fleisch, Chili oder süßen Zutaten, eingewickelt in Maisblätter – ein traditionelles Festtagsessen",
                    imageUrl: "portada-tamales.webp",
                    price: 20.99,
                    colSize: ["3", "12"],
                  },
                  {
                    title: "Pozole Rojo",
                    description:
                      "Herzhafte Suppe aus weißem Mais (Hominy), Schweinefleisch und roter Chili-Sauce, garniert mit Rettich, Salat, Zwiebeln und Limette",
                    imageUrl: "original-pozole-rojo.webp",
                    price: 19.99,
                    colSize: ["3", "12"],
                  },
                ]}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Speisekarte;
