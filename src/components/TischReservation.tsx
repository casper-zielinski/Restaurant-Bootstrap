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

  //Die ganzen Tisch Counter zum Zählen aller ausgewählten Tische
  const [TerasseTableCounter, setTerasseTableCounter] = useState(0);
  const [TableCounter, setTableCounter] = useState(0);
  const [LargeTableCounter, setLargeTableCounter] = useState(0);

  function OptionMenuShower(index: number) {
    const newChoose: boolean[] = [...choose];
    newChoose[index] = !newChoose[index];
    const Shower = newChoose.some((value) => value === true);
    setOptionMenu(Shower);
  }

  // Zählt alle Tische die ausgewählt worden sind
  function allTableCounter() {
    choose.forEach((value, index) => {
      if (index < 8 && value) {
        setTerasseTableCounter((prevTable) => prevTable + 1);
      } else if (index < 20 && value) {
        setTableCounter((prevTable) => prevTable + 1);
      } else if (index < 24 && value) {
        setLargeTableCounter((prevTable) => prevTable + 1);
      }
    });
  }

  //setzt alle Tische auf null
  function zeroTables() {
    setTerasseTableCounter(0);
    setTableCounter(0);
    setLargeTableCounter(0);
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
            <button
              className="btn btn-lg btn-outline-dark justify-content-center m-3 px-4"
              data-bs-toggle="modal"
              data-bs-target="#Reservierungs-Modal"
              onClick={() => {
                zeroTables();
                allTableCounter();
              }}
            >
              Reserviere
            </button>
            <div
              className="modal fade"
              id="Reservierungs-Modal"
              tabIndex={-1}
              aria-labelledby="Reservierungs-ModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id="Reservierungs-ModalLabel"
                    >
                      Tische reservieren
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        zeroTables();
                      }}
                    ></button>
                  </div>
                  <div className="modal-body">
                    Diese Tische werden Reserviert:
                    {TerasseTableCounter > 0 &&
                      (TerasseTableCounter > 1 ? (
                        <p>
                          {TerasseTableCounter +
                            " Tische an der Terasse für zwei wurden reserviert"}
                        </p>
                      ) : (
                        <p>
                          {TerasseTableCounter +
                            "Tisch an der Terasse für zwei wurde reserviert"}
                        </p>
                      ))}
                    {TableCounter > 0 &&
                      (TableCounter > 1 ? (
                        <p>
                          {TableCounter + " Tische für 4 wurden reserviert"}
                        </p>
                      ) : (
                        <p>{TableCounter + " Tisch für 4 wurde reserviert"}</p>
                      ))}
                    {LargeTableCounter > 0 &&
                      (LargeTableCounter > 1 ? (
                        <p>
                          {LargeTableCounter +
                            " Tische für 10 wurden reserviert"}
                        </p>
                      ) : (
                        <p>
                          {LargeTableCounter + " Tisch für 10 wurde reserviert"}
                        </p>
                      ))}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        zeroTables();
                      }}
                    >
                      Schließen
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                      Reservieren
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default TischReservation;