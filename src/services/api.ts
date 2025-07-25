import axios from 'axios';

export interface ReservationData {
      date: string;
      time: string;
      tableCounter: number;
      price: number;
      tables: boolean[];
}

interface ReservationResponse {
  success: boolean;
  message: string;
  reservation?: ReservationData & {
    id: number;
    status: string;
  };
  error?: string;
}

const API_BASE_URL = 'http://localhost:3001/api'

const api = axios.create(
      {
            baseURL: API_BASE_URL,
            headers: {
                  'Content-Type': 'application/json',
            },
      }
);

export const reservationAPI = {
      createReservation: async (reservationData: ReservationData): Promise<ReservationResponse> => {
            try {
                  const response = await api.post<ReservationResponse>('/reservations', reservationData);
                  return response.data;
            } catch (error: unknown) {
                  console.error('Error creating reservation:', error);
                  throw new Error('Fehler beim Sender der Reservierung');
            }
      },
}; 