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
  const buttonMapper: boolean[] = [true, true];
  const elementMapper: boolean[] = [true, false, true];

  return (
    <>
      {elementMapper.map((value, elementMapperIndex) => {
        return (
          <div className="col-4 d-flex flex-column align-items-center" key={elementMapperIndex}>
            {value &&
              buttonMapper.map((_, buttonMapperIndex) => {
                return (
                  <button
                    key={buttonMapperIndex + (elementMapperIndex * 10)}
                    title={`Tisch ${
                      buttonMapperIndex + 21 + elementMapperIndex
                    }: Großer Tisch für 10 Personen, Drinnen, 30€`}
                    className={
                      choose[buttonMapperIndex + 20 + elementMapperIndex]
                        ? "btn btn-primary Table-Large my-2"
                        : "btn btn-success Table-Large my-2"
                    }
                    onClick={() => {
                      setChoose(
                        choose.map((value, index) =>
                          index === buttonMapperIndex + 20 + elementMapperIndex
                            ? !value
                            : value
                        )
                      );
                      OptionMenuShower(
                        buttonMapperIndex + 20 + elementMapperIndex
                      );
                    }}
                  />
                );
              })}
          </div>
        );
      })}
    </>
  );
}

export default LargeTables;
