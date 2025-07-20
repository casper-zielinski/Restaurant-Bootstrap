interface LargeTablesProps {
  setChoose: (value: boolean[]) => void;
  choose: boolean[];
  OptionMenuShower: (index: number) => void;
}

function LargeTables({
  setChoose,
  choose,
  OptionMenuShower,
}: LargeTablesProps) {
  return (
    <>
      <div className="col-4 d-flex flex-column align-items-center">
        <button
          className={
            choose[20]
              ? "btn btn-dark Table-Large my-2"
              : "btn btn-success Table-Large my-2"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 20 ? !value : value))
            );
            OptionMenuShower(20);
          }}
        />
        <button
          className={
            choose[21]
              ? "btn btn-dark Table-Large my-2"
              : "btn btn-success Table-Large my-2"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 21 ? !value : value))
            );
            OptionMenuShower(21);
          }}
        />
      </div>

      <div className="col-4 d-flex flex-column align-items-center"></div>

      <div className="col-4 d-flex flex-column align-items-center">
        <button
          className={
            choose[22]
              ? "btn btn-dark Table-Large my-2"
              : "btn btn-success Table-Large my-2"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 22 ? !value : value))
            );
            OptionMenuShower(22);
          }}
        />
        <button
          className={
            choose[23]
              ? "btn btn-dark Table-Large my-2"
              : "btn btn-success Table-Large my-2"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 23 ? !value : value))
            );
            OptionMenuShower(23);
          }}
        />
      </div>
    </>
  );
}

export default LargeTables;
