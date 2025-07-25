import Cards from "./Cards";

//Used for smaller screens

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  colSize: [string, string];
  cardHeader?: boolean;
}

interface CardCarouselProps {
  cards: CardData[];
  id: string;
}

function CardsCarousel({ cards, id }: CardCarouselProps) {
  return (
    <>
      <div
        id={id}
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={"#" + id}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={"#" + id}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={"#" + id}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Cards
              title={cards[0].title}
              description={cards[0].description}
              imageUrl={cards[0].imageUrl}
              price={cards[0].price}
              colSize={cards[0].colSize}
              cardHeader={true}
            />
          </div>
          <div className="carousel-item">
            <Cards
              title={cards[1].title}
              description={cards[1].description}
              imageUrl={cards[1].imageUrl}
              price={cards[1].price}
              colSize={cards[1].colSize}
            />
          </div>
          <div className="carousel-item">
            <Cards
              title={cards[2].title}
              description={cards[2].description}
              imageUrl={cards[2].imageUrl}
              price={cards[2].price}
              colSize={cards[2].colSize}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#" + id}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#" + id}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CardsCarousel;
