interface TerasseProps {
  setChoose: (value: boolean[]) => void;
  choose: boolean[];
  OptionMenuShower: (index: number) => void;
}

function Terasse({ setChoose, choose, OptionMenuShower }: TerasseProps) {
  const buttonMapper: boolean[] = [true, true];

  return (
    <>
      <div className="col-2 d-flex flex-column align-items-center border-bottom border-light border-2">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${
                buttonMapperIndex + 1
              }: 2 Personen, Terrasse, 10€`}
              className={
                choose[buttonMapperIndex]
                  ? "btn btn-primary rounded-circle Table my-2 mb-4 shadow-lg"
                  : "btn btn-success rounded-circle Table my-2 mb-4 "
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex);
              }}
            />
          );
        })}
      </div>

      <div className="col-2 d-flex flex-column align-items-center border-bottom border-light border-2">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${
                buttonMapperIndex + 3
              }: 2 Personen, Terrasse, 10€`}
              className={
                choose[buttonMapperIndex + 2]
                  ? "btn btn-primary rounded-circle Table my-2 mb-4 shadow-lg"
                  : "btn btn-success rounded-circle Table my-2 mb-4 "
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex + 2 ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex + 2);
              }}
            />
          );
        })}
      </div>

      <div className="col-4 d-flex flex-column align-items-center border-bottom border-light border-2">
        <p className="display-6 text-center manufacturing-consent">Terrasse </p>
      </div>

      <div className="col-2 d-flex flex-column align-items-center border-bottom border-light border-2">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${
                buttonMapperIndex + 5
              }: 2 Personen, Terrasse, 10€`}
              className={
                choose[buttonMapperIndex + 4]
                  ? "btn btn-primary rounded-circle Table my-2 mb-4 shadow-lg"
                  : "btn btn-success rounded-circle Table my-2 mb-4 "
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex + 4 ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex + 4);
              }}
            />
          );
        })}
      </div>
      <div className="col-2 d-flex flex-column align-items-center border-bottom border-light border-2">
        {buttonMapper.map((_, buttonMapperIndex) => {
          return (
            <button
              key={buttonMapperIndex}
              title={`Tisch ${
                buttonMapperIndex + 7
              }: 2 Personen, Terrasse, 10€`}
              className={
                choose[buttonMapperIndex + 6]
                  ? "btn btn-primary rounded-circle Table my-2 mb-4 shadow-lg"
                  : "btn btn-success rounded-circle Table my-2 mb-4 "
              }
              onClick={() => {
                setChoose(
                  choose.map((value, index) =>
                    index === buttonMapperIndex + 6 ? !value : value
                  )
                );
                OptionMenuShower(buttonMapperIndex + 6);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Terasse;
