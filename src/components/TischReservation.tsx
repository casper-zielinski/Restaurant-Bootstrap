import TischReservationLegende from "./TischReservationLegende";

//--> Fehler war das Importieren von TischReservation.tsx in TischReservation.tsx, was zur Unendliche Render-Schleife

function TischReservation() {
  return (
    <>
      <section id="Tisch-Reservierung">
        <h2 className="display-3 fw-light text-center mt-3 boder-top border-black">
          Reservierung
        </h2>
        <p className="lead text-center text-muted">
          Klicken Sie auf einen verfügbaren Tisch um zu reservieren
        </p>
        <TischReservationLegende />
      </section>
    </>
  );
}

export default TischReservation;
