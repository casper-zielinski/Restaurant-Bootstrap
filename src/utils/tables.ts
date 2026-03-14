import type { Dispatch, SetStateAction } from "react";

export function allTableCounter(
  choose: boolean[],
  setTerasseTableCounter: Dispatch<SetStateAction<number>>,
  setTableCounter: Dispatch<SetStateAction<number>>,
  setLargeTableCounter: Dispatch<SetStateAction<number>>,
  setReservationPreis: Dispatch<SetStateAction<number>>,
) {
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

export function zeroTables(
  setTerasseTableCounter: Dispatch<SetStateAction<number>>,
  setTableCounter: Dispatch<SetStateAction<number>>,
  setLargeTableCounter: Dispatch<SetStateAction<number>>,
  setReservationPreis: Dispatch<SetStateAction<number>>,
) {
  setTerasseTableCounter(0);
  setTableCounter(0);
  setLargeTableCounter(0);
  setReservationPreis(0);
}
