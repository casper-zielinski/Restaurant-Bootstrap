import LargeTables from "./LargeTables";
import RestaurantBottom from "./RestaurantBottom";
import Tables from "./Tables";
import Terasse from "./Terasse";

interface TischReservationenProps{
      datum: string;
      zeit: string;
      setDate: (date: string) => void;
      setTime: (time: string) => void;
      setChoose: (choose: boolean[]) => void;
      choose: boolean[];
      OptionMenuShower: (index: number) => void;
}

function TischReservationen({datum, zeit, setDate, setTime, setChoose, choose, OptionMenuShower}: TischReservationenProps) {
  return (
    <div className="container mt-5">
      <div className="row m-2 rounded p-2 border border-warning Reservierung-Legende">
        <div className="col-12 col-md-6">
          <input
            type="date"
            value={datum}
            onChange={(e) => {
              setDate(e.target.value);
              console.log(datum);
            }}
            id="datum"
            name="datum"
            className="mb-4 mt-2 form-control form-control-lg bg-dark border border-2 border-black text-light"
          />
        </div>

        <div className="col-12 col-md-6">
          <input
            type="time"
            value={zeit}
            onChange={(e) => {
              setTime(e.target.value);
              console.log(zeit);
            }}
            id="uhrzeit"
            name="uhrzeit"
            className="mb-4 mt-2 form-control form-control-lg bg-dark border border-2 border-black text-light"
          />
        </div>

        <Terasse
          setChoose={setChoose}
          choose={choose}
          OptionMenuShower={OptionMenuShower}
        />

        <Tables
          setChoose={setChoose}
          choose={choose}
          OptionMenuShower={OptionMenuShower}
        />

        <LargeTables
          setChoose={setChoose}
          choose={choose}
          OptionMenuShower={OptionMenuShower}
        />

        <RestaurantBottom Tags={["Kasse", "WC", "Ausgang"]} />
      </div>
    </div>
  );
}

export default TischReservationen;
