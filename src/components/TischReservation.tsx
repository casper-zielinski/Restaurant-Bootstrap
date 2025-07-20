import { useState } from "react";
import TischReservationLegende from "./TischReservationLegende";
import Terasse from "./Terasse";

//--> Fehler war das Importieren von TischReservation.tsx in TischReservation.tsx, was zur Unendliche Render-Schleife

function TischReservation() {
  const arr: boolean[] = new Array(24).fill(false); //a array of false values, the size of the amount of tables

  const [choose, setChoose] = useState<boolean[]>(arr);
  const [OptionMenu, setOptionMenu] = useState(false);

  function OptionMenuShower(index: number) {
    const newChoose: boolean[] = [... choose];
    newChoose[index] = !newChoose[index];
    const Shower = newChoose.some(value => value === true);
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

            <div className="col-2 d-flex flex-column align-items-center">
              <button
                className={
                  choose[8]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) => (index === 8 ? !value : value))
                  )
                }
              />
              <button
                className={
                  choose[9]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) => (index === 9 ? !value : value))
                  )
                }
              />
              <button
                className={
                  choose[10]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 10 ? !value : value
                    )
                  )
                }
              />
            </div>

            <div className="col-2 d-flex flex-column align-items-center">
              <button
                className={
                  choose[11]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 11 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[12]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 12 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[13]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 13 ? !value : value
                    )
                  )
                }
              />
            </div>

            <div className="col-4 d-flex flex-column align-items-center">
              <p className="display-6 text-center manufacturing-consent">
                Eingang
              </p>
            </div>

            <div className="col-2 d-flex flex-column align-items-center">
              <button
                className={
                  choose[14]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 14 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[15]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 15 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[16]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 16 ? !value : value
                    )
                  )
                }
              />
            </div>

            <div className="col-2 d-flex flex-column align-items-center">
              <button
                className={
                  choose[17]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 17 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[18]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-secondary Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 18 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[19]
                    ? "btn btn-dark Table my-2 mt-3 shadow-lg"
                    : "btn btn-success Table my-2 mt-3"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 19 ? !value : value
                    )
                  )
                }
              />
            </div>

            <div className="col-4 d-flex flex-column align-items-center">
              <button
                className={
                  choose[20]
                    ? "btn btn-dark Table-Large my-2"
                    : "btn btn-secondary Table-Large my-2"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 20 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[21]
                    ? "btn btn-dark Table-Large my-2"
                    : "btn btn-secondary Table-Large my-2"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 21 ? !value : value
                    )
                  )
                }
              />
            </div>

            <div className="col-4 d-flex flex-column align-items-center"></div>

            <div className="col-4 d-flex flex-column align-items-center">
              <button
                className={
                  choose[22]
                    ? "btn btn-dark Table-Large my-2"
                    : "btn btn-secondary Table-Large my-2"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 22 ? !value : value
                    )
                  )
                }
              />
              <button
                className={
                  choose[23]
                    ? "btn btn-dark Table-Large my-2"
                    : "btn btn-secondary Table-Large my-2"
                }
                onClick={() =>
                  setChoose(
                    choose.map((value, index) =>
                      index === 23 ? !value : value
                    )
                  )
                }
              />
            </div>

            <div className="d-flex justify-content-between">
              <div className="col-4 col-md-6 mt-3 border-top border-black d-flex flex-column align-items-center">
                <p className="text-center manufacturing-consent display-6">
                  Kasse
                </p>
              </div>
              <div className="col-3 col-md-2 mt-3 border-top border-black d-flex flex-column align-items-center">
                <p className="text-center manufacturing-consent display-6">
                  WC
                </p>
              </div>
              <div className="col-3 col-md-2 mt-3 border-top border-black d-flex flex-column align-items-center">
                <p className="text-center manufacturing-consent display-6">
                  Ausgang
                </p>
              </div>
            </div>
          </div>
        </div>

        {OptionMenu ? "Option Menu shown" : "Option Menu hidden"}
      </section>
    </>
  );
}

export default TischReservation;
