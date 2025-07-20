interface TablesProps {
  setChoose: (value: boolean[]) => void;
  choose: boolean[];
  OptionMenuShower: (index: number) => void;
}

function Tables({ setChoose, choose, OptionMenuShower }: TablesProps) {
  return (
    <>
      <div className="col-2 d-flex flex-column align-items-center">
        <button
          className={
            choose[8]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 8 ? !value : value))
            );
            OptionMenuShower(8);
          }}
        />
        <button
          className={
            choose[9]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 9 ? !value : value))
            );
            OptionMenuShower(9);
          }}
        />
        <button
          className={
            choose[10]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 10 ? !value : value))
            );
            OptionMenuShower(10);
          }}
        />
      </div>

      <div className="col-2 d-flex flex-column align-items-center">
        <button
          className={
            choose[11]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 11 ? !value : value))
            );
            OptionMenuShower(11);
          }}
        />
        <button
          className={
            choose[12]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 12 ? !value : value))
            );
            OptionMenuShower(12);
          }}
        />
        <button
          className={
            choose[13]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 13 ? !value : value))
            );
            OptionMenuShower(13);
          }}
        />
      </div>
      <div className="col-4 d-flex flex-column align-items-center">
        <p className="display-6 text-center manufacturing-consent">Eingang</p>
      </div>
      <div className="col-2 d-flex flex-column align-items-center">
        <button
          className={
            choose[14]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 14 ? !value : value))
            );
            OptionMenuShower(14);
          }}
        />
        <button
          className={
            choose[15]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 15 ? !value : value))
            );
            OptionMenuShower(15);
          }}
        />
        <button
          className={
            choose[16]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 16 ? !value : value))
            );
            OptionMenuShower(16);
          }}
        />
      </div>
      <div className="col-2 d-flex flex-column align-items-center">
        <button
          className={
            choose[17]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 17 ? !value : value))
            );
            OptionMenuShower(17);
          }}
        />
        <button
          className={
            choose[18]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 18 ? !value : value))
            );
            OptionMenuShower(18);
          }}
        />
        <button
          className={
            choose[19]
              ? "btn btn-dark Table my-2 mt-3 shadow-lg"
              : "btn btn-success Table my-2 mt-3"
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 19 ? !value : value))
            );
            OptionMenuShower(19);
          }}
        />
      </div>
    </>
  );
}

export default Tables;
