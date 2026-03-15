import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../constants/API_URL";
import type { Reservation as ReservationType } from "../controller/reservation";
import { setDEDate } from "../utils/time";
import DetailRow from "../components/DetailRow";

function Reservation() {
  const [reservation, setReservation] = useState<ReservationType>({
    id: "",
    date: "",
    time: "",
    price: 0,
    tables: [],
    name: "",
    phoneNumber: "",
    email: undefined,
  });
  const params = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReservationData() {
      if (!params.id) return;
      try {
        const { data } = await axios.get<ReservationType>(
          `${API_URL}/reservations/${params.id}`
        );
        setReservation(data);
        setLoaded(true);
      } catch {
        setError(true);
      }
    }
    fetchReservationData();
  }, [params.id]);

  const tableCount = reservation.tables.filter(Boolean).length;

  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">

            {/* Loading */}
            {!loaded && !error && (
              <div className="text-center text-white py-5">
                <div
                  className="spinner-border mb-4"
                  style={{ width: "3rem", height: "3rem", color: "rgba(190,175,10,0.874)" }}
                  role="status"
                />
                <p className="lead text-secondary">Reservierung wird geladen…</p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="text-center text-white py-5">
                <div style={{ fontSize: "4rem" }}>⚠️</div>
                <h2 className="mt-3 mb-2">Reservierung nicht gefunden</h2>
                <p className="text-secondary mb-4">
                  Die Reservierung konnte nicht geladen werden.
                </p>
                <button
                  className="btn btn-outline-light px-4"
                  onClick={() => navigate("/")}
                >
                  Zurück zur Startseite
                </button>
              </div>
            )}

            {/* Success card */}
            {loaded && (
              <div
                className="card border-0 shadow-lg text-white"
                style={{ background: "#1a1a1a", borderRadius: "1rem" }}
              >
                {/* Gold header stripe */}
                <div
                  style={{
                    height: "6px",
                    background: "rgba(190,175,10,0.874)",
                    borderRadius: "1rem 1rem 0 0",
                  }}
                />

                <div className="card-body p-4 p-md-5">
                  {/* Success icon + title */}
                  <div className="text-center mb-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "rgba(190,175,10,0.15)",
                        border: "2px solid rgba(190,175,10,0.874)",
                        fontSize: "1.8rem",
                      }}
                    >
                      ✓
                    </div>
                    <h1 className="h3 fw-light mb-1">Reservierung bestätigt</h1>
                    <p className="text-secondary mb-0">
                      Danke, {reservation.name}! Wir freuen uns auf Sie.
                    </p>
                  </div>

                  <hr style={{ borderColor: "#333" }} />

                  {/* Details */}
                  <div className="d-flex flex-column gap-3 my-4">
                    <DetailRow label="Datum" value={setDEDate(reservation.date)} />
                    <DetailRow label="Uhrzeit" value={`${reservation.time.substring(0, 5)} Uhr`} />
                    <DetailRow
                      label="Tische"
                      value={`${tableCount} ${tableCount === 1 ? "Tisch" : "Tische"}`}
                    />
                    <DetailRow
                      label="Gesamtpreis"
                      value={`${reservation.price} €`}
                      highlight
                    />
                  </div>

                  <hr style={{ borderColor: "#333" }} />

                  {/* Reservation ID */}
                  <div className="mt-3 mb-4">
                    <small className="text-secondary d-block mb-1">Reservierungs-ID</small>
                    <code
                      className="d-block p-2 rounded"
                      style={{
                        background: "#111",
                        color: "rgba(190,175,10,0.874)",
                        fontSize: "0.75rem",
                        wordBreak: "break-all",
                      }}
                    >
                      {reservation.id}
                    </code>
                  </div>

                  <button
                    className="btn w-100 py-2 fw-semibold"
                    style={{
                      background: "rgba(190,175,10,0.874)",
                      color: "#000",
                      borderRadius: "0.5rem",
                    }}
                    onClick={() => navigate("/")}
                  >
                    Zurück zur Startseite
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}

export default Reservation;
