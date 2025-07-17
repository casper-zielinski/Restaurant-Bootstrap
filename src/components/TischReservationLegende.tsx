function TischReservationLegende() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="Reservierung-Legende border border-black rounded-2 shadow border-3 col-4 p-4 m-3 d-flex justify-content-between align-items-center">
          <div className="rounded-circle circle bg-success mx-2" />
          <span className="fs-4 fw-bold">Frei</span>
          <div className="rounded-circle circle bg-danger mx-2" />
          <span className="fs-4 fw-bold">Belegt</span>
          <div className="rounded-circle circle bg-dark mx-2" />
          <span className="fs-4 fw-bold">Ausgewählt</span>
        </div>
      </div>
    </div>
  );
}

export default TischReservationLegende;
