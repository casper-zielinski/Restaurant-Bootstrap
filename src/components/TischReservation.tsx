import { useState } from "react";
import TischReservationLegende from "./TischReservationLegende";
import { useNavigate } from "react-router-dom";
import TischReservationen from "./TischReservationen";
import { useFormValidation } from "../hooks/useFormValidation";
import { getDate, getGermanDate, getTime } from "../utils/time";
import { allTableCounter, zeroTables } from "../utils/tables";
import { closeModal } from "../utils/modal";
import { makeReservation } from "../controller/reservation";
import { v4 as uuidv4 } from "uuid";
import { clearFields } from "../utils/fields";

function TischReservation() {
  const arr: boolean[] = new Array(24).fill(false); //a array of false values, the size of the amount of tables
  const [choose, setChoose] = useState<boolean[]>(arr);
  const [OptionMenu, setOptionMenu] = useState(false);
  const { errors, validateForm, clearErrors, clearError } = useFormValidation();

  const [TerasseTableCounter, setTerasseTableCounter] = useState(0);
  const [TableCounter, setTableCounter] = useState(0);
  const [LargeTableCounter, setLargeTableCounter] = useState(0);
  const [ReservationPreis, setReservationPreis] = useState(0);

  const [datum, setDate] = useState("");
  const [zeit, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefonNumber, setTelefonNumber] = useState("");
  const id = uuidv4();

  const clearTables = () =>
    zeroTables(
      setTerasseTableCounter,
      setTableCounter,
      setLargeTableCounter,
      setReservationPreis,
    );

  function OptionMenuShower(index: number) {
    const newChoose: boolean[] = [...choose];
    newChoose[index] = !newChoose[index];
    const Shower = newChoose.some((value) => value === true);
    setOptionMenu(Shower);
  }

  const navigate = useNavigate();

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
          datum={getDate(datum)}
          zeit={getTime(zeit)}
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
                clearTables();
                allTableCounter(
                  choose,
                  setTerasseTableCounter,
                  setTableCounter,
                  setLargeTableCounter,
                  setReservationPreis,
                );
              }}
            >
              Reserviere
            </button>
          </div>
        )}

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
                <h1 className="modal-title fs-5" id="Reservierungs-ModalLabel">
                  Tische reservieren
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => clearTables}
                ></button>
              </div>
              <div className="modal-body">
                <p className="lead ">
                  {`Reservation für den ${getGermanDate(datum)} um ${getTime(zeit)} Uhr:`}
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
                    <p>{TableCounter + " Tische für 4 wurden reserviert"}</p>
                  ) : (
                    <p>{TableCounter + " Tisch für 4 wurde reserviert"}</p>
                  ))}
                {LargeTableCounter > 0 &&
                  (LargeTableCounter > 1 ? (
                    <p>
                      {LargeTableCounter + " Tische für 10 wurden reserviert"}
                    </p>
                  ) : (
                    <p>
                      {LargeTableCounter + " Tisch für 10 wurde reserviert"}
                    </p>
                  ))}

                <hr className="my-4" />

                <div className="mb-3">
                  <label htmlFor="name-input" className="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name-input"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) clearError("name");
                    }}
                    placeholder="Ihr Name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email-input" className="form-label">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email-input"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) clearError("email");
                    }}
                    placeholder="ihre.email@beispiel.de"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone-input" className="form-label">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone-input"
                    value={telefonNumber}
                    onChange={(e) => {
                      setTelefonNumber(e.target.value);
                      if (errors.phone) clearError("phone");
                    }}
                    placeholder="+49 123 456789"
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    clearTables();
                    closeModal();
                  }}
                >
                  Schließen
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={(e) =>
                    makeReservation(
                      e,
                      navigate,
                      validateForm,
                      clearErrors,
                      {
                        date: datum,
                        id: id,
                        name: name,
                        phone: telefonNumber,
                        price: ReservationPreis,
                        tables: choose,
                        time: zeit,
                      },
                      () => clearFields(setName, setEmail, setTelefonNumber),
                    )
                  }
                >
                  Reservieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TischReservation;
