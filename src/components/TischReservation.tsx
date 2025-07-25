import { useState } from "react";
import TischReservationLegende from "./TischReservationLegende";
import { Link } from "react-router-dom";
import TischReservationen from "./TischReservationen";
import { reservationAPI, type ReservationData } from '../services/api';

//--> Fehler war das Importieren von TischReservation.tsx in TischReservation.tsx, was zur Unendliche Render-Schleife

function TischReservation() {
  const arr: boolean[] = new Array(24).fill(false); //a array of false values, the size of the amount of tables
  const [choose, setChoose] = useState<boolean[]>(arr);
  const [OptionMenu, setOptionMenu] = useState(false);

  //Die ganzen Tisch Counter zum Zählen aller ausgewählten Tische
  const [TerasseTableCounter, setTerasseTableCounter] = useState(0);
  const [TableCounter, setTableCounter] = useState(0);
  const [LargeTableCounter, setLargeTableCounter] = useState(0);
  const [ReservationPreis, setReservationPreis] = useState(0);

  //Das Datum und die Uhrzeit der Reservation
  const [datum, setDate] = useState("");
  const [zeit, setTime] = useState("");
  
  //Das momentane Datum/Uhrzeit holen

function getGermanDate(): string {
    if (datum === "") {
      const today = new Date();
      const date = today.toLocaleDateString("de-DE");
      return date;
    }
    return setDEDate(datum);
  }

function getDate(): string {
  if (datum === "") {
    const today = new Date();
    const date = today.toISOString().split("T")[0];
    return date;
  }
  else return datum;
}

  function setDEDate(initial: string): string {
    const date = new Date(initial);
    const deutschesDatum = date.toLocaleDateString("de-DE");
    return deutschesDatum;
  }

  function getTime(): string {
    if (zeit === "") {
      const today = new Date();
      let hour = today.toTimeString().split(" ")[0].substring(0, 2);
      const minute = today.toTimeString().split(" ")[0].substring(2, 5);
      const hourLater = Number.parseInt(hour) + 1;
      hour = hourLater.toString();
      return hour + minute;
    }
    return zeit;
  }

  function OptionMenuShower(index: number) {
    const newChoose: boolean[] = [...choose];
    newChoose[index] = !newChoose[index];
    const Shower = newChoose.some((value) => value === true);
    setOptionMenu(Shower);
  }

  // Zählt alle Tische die ausgewählt worden sind und deren Preise
  function allTableCounter() {
    choose.forEach((value, index) => {
      if (index < 8 && value) {
        setTerasseTableCounter((prevTable) => prevTable + 1);
        setReservationPreis((prevPrice) => prevPrice + 10);
      } else if (index < 20 && value) {
        setTableCounter((prevTable) => prevTable + 1);
        setReservationPreis((prevPrice) => prevPrice + 15);
      } else if (index < 24 && value) {
        setLargeTableCounter((prevTable) => prevTable + 1);
        setReservationPreis((prevPrice) => prevPrice + 30);
      }
    });
  }

  //setzt alle Tische und deren Preise auf null
  function zeroTables() {
    setTerasseTableCounter(0);
    setTableCounter(0);
    setLargeTableCounter(0);
    setReservationPreis(0);
  }
  
  //An die API die Reservation senden
  const sendReservation = async () => 
  {
    try{
      const reservationData: ReservationData = {
        date: getDate(),
        time: getTime(),
        tableCounter: TerasseTableCounter + TableCounter + LargeTableCounter,
        price: ReservationPreis,
        tables: choose
      };

      if (reservationData.tableCounter === 0) {
        throw new Error('Keine Tische ausgewählt');
      }

      const result = await reservationAPI.createReservation(reservationData);

      console.log('Reservierung erfolgreich:', result);
      

    }
    catch (error: unknown) {
      console.error('Error creating reservation:', error);
      throw new Error('Fehler beim Sender der Reservierung');
    }
  }

  return (
    <>
      <section id="Tisch-Reservierung" className="Sektion">
        <h2 className="display-3 fw-light text-center p-2 border-top">
          Reservierung
        </h2>
        <p className="lead text-center text-warning">
          Klicken Sie auf einen verfügbaren Tisch um zu reservieren
        </p>
        <TischReservationLegende />

        <TischReservationen
        datum={getDate()}
        zeit={getTime()}
        setDate={setDate}
        setTime={setTime}
        setChoose={setChoose}
        choose={choose}
        OptionMenuShower={OptionMenuShower}
        />

        {OptionMenu && (
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-lg Gold-Button justify-content-center m-3 px-4"
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
                <div className="modal-content bg-dark text-white">
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
                    <p className="lead ">
                      {`Reservation für den ${getGermanDate()} um ${getTime()} Uhr:`}
                    </p>

                    {TerasseTableCounter > 0 &&
                      (TerasseTableCounter > 1 ? (
                        <p>
                          {TerasseTableCounter +
                            " Tische an der Terasse für zwei wurden reserviert"}
                        </p>
                      ) : (
                        <p>
                          {TerasseTableCounter +
                            " Tisch an der Terasse für zwei wurde reserviert"}
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
                    <Link to="/reservieren">
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        data-bs-dismiss="modal"
                        onClick={sendReservation}
                      >
                        Reservieren
                      </button>
                    </Link>
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
