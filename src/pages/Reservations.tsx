import axios from "axios";
import { useEffect, useState } from "react";
import type { Reservation as ReservationType } from "../controller/reservation";
import { API_URL } from "../constants/API_URL";

function Reservations() {
  const [reservations, setReservations] = useState<ReservationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReservationData() {
      try {
        const { data } = await axios.get<ReservationType[]>(
          `${API_URL}/reservations`,
          {
            withCredentials: true,
          },
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
      className="pt-5 d-flex justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%)",
        color: "white"
      }}
    >
      <h1 className="mt-3">Reservationen</h1>
      <div>{loading && <div>Loading...</div>}</div>
      <div>
        {!loading &&
          !error &&
          reservations.map((reservation) => (
            <div key={reservation.id}>
              <p>{reservation.price}</p>
              <p>{reservation.name}</p>
              <p>{reservation.time}</p>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Reservations;
