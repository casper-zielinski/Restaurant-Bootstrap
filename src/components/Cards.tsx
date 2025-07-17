import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  colSize: string[];
  cardHeader?: boolean;
}

function Cards({
  title,
  description,
  imageUrl,
  price,
  colSize,
  cardHeader,
}: CardProps) {
  return (
    <>
      <div
        className={
          "col-lg-" +
          colSize[0] +
          " col-md-" +
          colSize[1] +
          " my-3 col-10"
        }
      >
        <div className="card border-black shadow rounded-3">
          {cardHeader && (
            <div className="card-header text-center text-muted">
              <h5 className="card-title fs-3">Most Popular</h5>
            </div>
          )}
          <div className="card-body text-center">
            <h4 className="card-title">{title}</h4>
            <p className="lead card-subtitle">{description}</p>
            <img
              src={imageUrl}
              alt={title}
              className="my-4 w-100 h-100 rounded shadow"
            />
            <p className="display-5 my-4 text-muted fw-bold">{price + "€"}</p>
            <p className="card-text mx-5 text-muted d-none d-lg-block"></p>
            <a href="" className="btn btn-outline-dark btn-lg mt-3">
              Bestell Jetzt!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
