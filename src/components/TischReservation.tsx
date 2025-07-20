import { useState } from "react";
import TischReservationLegende from "./TischReservationLegende";
import Terasse from "./Terasse";
import Tables from "./Tables";
import LargeTables from "./LargeTables";
import RestaurantBottom from "./RestaurantBottom";

//--> Fehler war das Importieren von TischReservation.tsx in TischReservation.tsx, was zur Unendliche Render-Schleife

function TischReservation() {
  const arr: boolean[] = new Array(24).fill(false); //a array of false values, the size of the amount of tables

  const [choose, setChoose] = useState<boolean[]>(arr);
  const [OptionMenu, setOptionMenu] = useState(false);

  function OptionMenuShower(index: number) {
    const newChoose: boolean[] = [...choose];
    newChoose[index] = !newChoose[index];
    const Shower = newChoose.some((value) => value === true);
    setOptionMenu(Shower);
  }

  return (
    <>
      <section id="Tisch-Reservierung">
        <h2 className="display-3 fw-light text-center mt-3 border-top border-black">
          Reservierung
        </h2>
        <p className="lead text-center text-muted">
          Klicken Sie auf einen verfügbaren Tisch um zu reservieren
        </p>
        <TischReservationLegende />

        <div className="container mt-5">
          <div className="row m-2 border border-black rounded border-3 p-2 shadow Reservierung-Legende">
            <Terasse
              setChoose={setChoose}
              choose={choose}
              OptionMenuShower={OptionMenuShower}
            />

            <Tables
              setChoose={setChoose}
              choose={choose}
              OptionMenuShower={OptionMenuShower}
            />

            <LargeTables
              setChoose={setChoose}
              choose={choose}
              OptionMenuShower={OptionMenuShower}
            />

            <RestaurantBottom Tags={["Kasse", "WC", "Ausgang"]} />
          </div>
        </div>

        {OptionMenu && (
          <div className="d-flex justify-content-center">
            <button className="btn btn-lg btn-outline-dark justify-content-center m-3 px-4">
              Reserviere
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default TischReservation;
