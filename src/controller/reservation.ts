import type { NavigateFunction } from "react-router-dom";
import type { FormData } from "../hooks/useFormValidation";
import axios from "axios";
import { closeModal } from "../utils/modal";
import { API_URL } from "../constants/API_URL";

export interface Reservation {
  id: string;
  time: string;
  date: string;
  price: number;
  tables: boolean[];
  email?: string;
  phone: string;
  name: string;
}

export const makeReservation = async (
  e: React.MouseEvent,
  navigate: NavigateFunction,
  validateForm: (formData: FormData) => boolean,
  clearErrors: () => void,
  { date, id, name, phone, price, tables, time, email }: Reservation,
  clearFields: () => void,
) => {
  e.preventDefault();

  // Validate form before submitting
  const isValid = validateForm({
    name: name,
    email: email,
    phone: phone,
  } as FormData);

  if (!isValid) {
    return; // Stop if validation fails
  }

  try {
    await axios.post(`${API_URL}/api/reservations`, {
      id: id,
      time: time,
      date: date,
      price: price,
      tables: tables,
      name: name,
      email: email,
      phone: phone,
    } as Reservation);

    alert("Reservierung erfolgreich!");
    // Clear form fields after successful reservation
    clearFields();
    clearErrors();

    // Modal schließen
    closeModal();
    // Navigate to reservation confirmation page
    navigate(`/reservieren/${id}`);
  } catch (error) {
    alert("Fehler bei der Reservierung. Bitte versuchen Sie es erneut.");
    console.error("Reservation error:", error);
  }
};
