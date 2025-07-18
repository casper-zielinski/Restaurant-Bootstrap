import { useState } from "react";

//Used for smaller screens

interface CardCarouselProps {
  img: string[];
  title: string[];
  id: string;
}

function CardsCarousel({ img, title, id }: CardCarouselProps) {
  const [hovered, setHovered] = useState(false);

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
            <img
              src={img[0]}
              className="d-block Carousel-Image rounded border border-black"
              alt={title[0]}
            />
            <div className="carousel-caption d-block">
              <button
                className="btn btn-light btn-text-hover border border-black btn-sm"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? (
                  <span className="alfaSlabOneRegular">{"Bestell jetzt!"}</span>
                ) : (
                  <span className="alfaSlabOneRegular">{title[0]}</span>
                )}
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img[1]}
              className="d-block Carousel-Image rounded border border-black"
              alt={title[1]}
            />
            <div className="carousel-caption d-block">
              <button
                className="btn btn-light btn-text-hover border border-black btn-sm"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? (
                  <span className="alfaSlabOneRegular">{"Bestell jetzt!"}</span>
                ) : (
                  <span className="alfaSlabOneRegular">{title[1]}</span>
                )}
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img[2]}
              className="d-block Carousel-Image rounded border border-black"
              alt={title[2]}
            />
            <div className="carousel-caption d-block">
              <button
                className="btn btn-light btn-text-hover border border-black btn-sm"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? (
                  <span className="alfaSlabOneRegular">{"Bestell jetzt!"}</span>
                ) : (
                  <span className="alfaSlabOneRegular">{title[2]}</span>
                )}
              </button>
            </div>
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
