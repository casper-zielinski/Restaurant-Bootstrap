function TischReservationLegende() {
  return (
    <div className="container">
      <div className="row justify-content-center rounded-2 border border-warning m-2 Reservierung-Legende">
        <div className=" col-12 col-md-6 p-4 mx-3 d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle circle bg-success" />
            <span className="fw-bold fs-5 text-start">Frei</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle circle bg-danger" />
            <span className="fw-bold fs-5 text-center">Belegt</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle circle bg-dark" />
            <span className="fw-bold fs-5 text-end">Ausgewählt</span>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-center align-items-center border-top border-warning border-3 m-2">
          <button className="btn btn-success Table my-2" />
          <span className="fw-bold fs-5 mx-3">
            Tisch für 4<br /> (Frei)
          </span>
          <button className="btn btn-danger Table-Large m-2" />
          <span className="fw-bold fs-5 mx-2">
            Tisch für 10
            <br /> (Belegt)
          </span>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary rounded-circle Table my-2" />
          <span className="fw-bold fs-5 mx-2">
            Tisch für 2<br /> (Ausgewählt)
          </span>
        </div>
      </div>
    </div>
  );
}

export default TischReservationLegende;
