interface TablesProps {
  setChoose: (value: boolean[]) => void;
  choose: boolean[];
  OptionMenuShower: (index: number) => void;
}

function Tables({ setChoose, choose, OptionMenuShower }: TablesProps) {
  const buttonMapper: boolean[] = [true, true, true];

  return (
    <>
      <div className="col-2 d-flex flex-column align-items-center">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${buttonMapperIndex + 9}: 4 Personen, Drinnen, 15€`}
              className={
                choose[buttonMapperIndex + 8]
                  ? "btn btn-primary Table my-2 mt-3 shadow-lg"
                  : "btn btn-success Table my-2 mt-3"
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex + 8 ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex + 8);
              }}
            />
          );
        })}
      </div>

      <div className="col-2 d-flex flex-column align-items-center">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${
                buttonMapperIndex + 12
              }: 4 Personen, Drinnen, 15€`}
              className={
                choose[buttonMapperIndex + 11]
                  ? "btn btn-primary Table my-2 mt-3 shadow-lg"
                  : "btn btn-success Table my-2 mt-3"
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex + 11 ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex + 11);
              }}
            />
          );
        })}
      </div>
      <div className="col-4 d-flex flex-column align-items-center">
        <p className="display-6 text-center manufacturing-consent">Eingang</p>
      </div>
      <div className="col-2 d-flex flex-column align-items-center">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${
                buttonMapperIndex + 15
              }: 4 Personen, Drinnen, 15€`}
              className={
                choose[buttonMapperIndex + 14]
                  ? "btn btn-primary Table my-2 mt-3 shadow-lg"
                  : "btn btn-success Table my-2 mt-3"
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex + 14 ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex + 14);
              }}
            />
          );
        })}
      </div>
      <div className="col-2 d-flex flex-column align-items-center">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${
                buttonMapperIndex + 18
              }: 4 Personen, Drinnen, 15€`}
              className={
                choose[buttonMapperIndex + 17]
                  ? "btn btn-primary Table my-2 mt-3 shadow-lg"
                  : "btn btn-success Table my-2 mt-3"
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex + 17 ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex + 17);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Tables;
