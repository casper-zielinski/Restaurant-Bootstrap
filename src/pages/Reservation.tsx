import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants/API_URL";
import type { Reservation as ReservationType } from "../controller/reservation";

function Reservation() {
  const [reservation, setReservation] = useState<ReservationType>({
    id: "",
    date: "",
    time: "",
    price: 0,
    tables: [],
    name: "",
    phone: "",
    email: undefined,
  });
  const params = useParams();
  const [loaded, setLoaded] = useState(false);

  function setDEDate(initial: string): string {
    if (!initial) {
      return "";
    }
    const date = new Date(initial);
    const deutschesDatum = date.toLocaleDateString("de-DE");
    return deutschesDatum;
  }

  useEffect(() => {
    async function fetchReservationData() {
      if (!params.id) return;
      const api = `${API_URL}/api/reservations/${params.id}`;
      const { data } = await axios.get<ReservationType>(api);
      setReservation({
        id: data.id,
        date: data.date,
        time: data.time,
        price: data.price,
        tables: data.tables,
        name: data.name,
        phone: data.phone,
        email: data.email,
      });
      setLoaded(true);
    }
    fetchReservationData();
  }, [params.id]);

  return (
    <main style={{ height: "100vh" }}>
      <h1 className="mt-5 p-3 text-right bg-black text-light">
        Danke für Ihre Reservierung!
        <div
          className={
            loaded ? "fs-5" : "d-flex justify-content-center align-items-center"
          }
        >
          {loaded ? (
            <>
              <p> Datum: {setDEDate(reservation.date)}</p>
              <p> Uhrzeit: {reservation.time}</p>
              <p> Preis: {reservation.price}€</p>
              <p> Reservierung's ID: {reservation.id}</p>
            </>
          ) : (
            <>
              <div
                className="spinner-border mt-5"
                style={{ height: "3rem", width: "3rem" }}
                role="status"
              ></div>
              <span className="visually-hidden">Loading...</span>
            </>
          )}
        </div>
      </h1>
    </main>
  );
}

export default Reservation;
