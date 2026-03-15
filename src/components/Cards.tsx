import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

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
          "col-lg-" + colSize[0] + " col-md-" + colSize[1] + " my-3 col-12 rounded-3"
        }
      >
        <div
          className={cardHeader ? "card Cards CardHeader border-warning h-100" : "card Cards border-warning h-100"}
        >
          <div className="card-body text-center d-flex flex-column" >
            <h4 className="card-title mt-4 fw-bold fs-1">{title}</h4>
            <p className="lead card-subtitle">{description}</p>
            <img
              src={imageUrl}
              alt={title}
              className="my-4 w-100 h-100 rounded shadow"
            />
            <p className="display-5 my-4 text-warning fw-bold">{price + "€"}</p>
            <p className="card-text mx-5 text-muted d-none d-lg-block"></p>
            <a href="" className="btn Gold-Button btn-lg mt-auto mb-4">
              Bestell Jetzt!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
