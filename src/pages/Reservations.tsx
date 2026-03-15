import axios from "axios";
import { useEffect, useState } from "react";
import type { Reservation as ReservationType } from "../controller/reservation";
import { API_URL } from "../constants/API_URL";
import { setDEDate } from "../utils/time";
import DetailRow from "../components/DetailRow";

function Reservations() {
  const [reservations, setReservations] = useState<ReservationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReservationData() {
      try {
        const { data } = await axios.get<ReservationType[]>(
          `${API_URL}/reservations`,
          { withCredentials: true },
        );
        setReservations(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReservationData();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container py-5">
        <div className="text-center mb-5 mt-3">
          <h1 className="display-4 fw-light text-white">Reservationen</h1>
          <div
            style={{
              height: "3px",
              width: "60px",
              background: "rgba(190,175,10,0.874)",
              margin: "0.75rem auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-5">
            <div
              className="spinner-border mb-4"
              style={{
                width: "3rem",
                height: "3rem",
                color: "rgba(190,175,10,0.874)",
              }}
              role="status"
            />
            <p className="lead text-secondary">Reservationen werden geladen…</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center text-white py-5">
            <div style={{ fontSize: "4rem" }}>⚠️</div>
            <h2 className="mt-3 mb-2">Fehler beim Laden</h2>
            <p className="text-secondary">
              Die Reservationen konnten nicht geladen werden.
            </p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && reservations.length === 0 && (
          <div className="text-center text-secondary py-5">
            <div style={{ fontSize: "3rem" }}>📋</div>
            <p className="lead mt-3">Keine Reservationen vorhanden.</p>
          </div>
        )}

        {/* Cards */}
        {!loading && !error && reservations.length > 0 && (
          <div className="row g-4 justify-content-center">
            {reservations.map((reservation) => {
              const tableCount = reservation.tables.filter(Boolean).length;
              return (
                <div key={reservation.id} className="col-12 col-md-6 col-lg-4">
                  <div
                    className="card border-0 shadow-lg text-white h-100"
                    style={{ background: "#1a1a1a", borderRadius: "5px 5px 1rem 1rem" }}
                  >
                    {/* Gold stripe */}
                    <div
                      style={{
                        height: "5px",
                        background: "rgba(190,175,10,0.874)",
                        borderRadius: "1rem 1rem 0 0",
                      }}
                    />

                    <div className="card-body p-4">
                      {/* Name */}
                      <h5
                        className="fw-semibold mb-1"
                        style={{ color: "rgba(190,175,10,0.874)" }}
                      >
                        {reservation.name}
                      </h5>
                      <small
                        className="text-secondary d-block mb-3"
                        style={{ fontSize: "0.7rem", wordBreak: "break-all" }}
                      >
                        {reservation.id}
                      </small>

                      <hr style={{ borderColor: "#333" }} />

                      <div className="d-flex flex-column gap-2 my-3">
                        <DetailRow
                          label="Datum"
                          value={setDEDate(reservation.date)}
                        />
                        <DetailRow
                          label="Uhrzeit"
                          value={`${reservation.time.substring(0, 5)} Uhr`}
                        />
                        <DetailRow
                          label="Tische"
                          value={`${tableCount} ${tableCount === 1 ? "Tisch" : "Tische"}`}
                        />
                        <DetailRow
                          label="Preis"
                          value={`${reservation.price} €`}
                          highlight
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Reservations;
