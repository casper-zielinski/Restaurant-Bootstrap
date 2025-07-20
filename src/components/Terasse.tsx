import React from "react";

interface TerasseProps {
  setChoose: (value: boolean[]) => void;
  choose: boolean[];
  OptionMenuShower: (index: number) => void;
}

function Terasse({ setChoose, choose, OptionMenuShower }: TerasseProps) {
  return (
    <>
      <div className="col-2 d-flex flex-column align-items-center border-bottom border-black">
        <button
          className={
            choose[0]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 0 ? !value : value))
            );
            OptionMenuShower(0);
          }}
        />
        <button
          className={
            choose[1]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 1 ? !value : value))
            );
            OptionMenuShower(1);
          }}
        />
      </div>
      <div className="col-2 d-flex flex-column align-items-center border-bottom border-black">
        <button
          className={
            choose[2]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 2 ? !value : value))
            );
            OptionMenuShower(2);
          }}
        />
        <button
          className={
            choose[3]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 3 ? !value : value))
            );
            OptionMenuShower(3);
          }}
        />
      </div>
      <div className="col-4 d-flex flex-column align-items-center border-bottom border-black">
        <p className="display-6 text-center manufacturing-consent">Terrasse </p>
      </div>
      <div className="col-2 d-flex flex-column align-items-center border-bottom border-black">
        <button
          className={
            choose[4]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 4 ? !value : value))
            );
            OptionMenuShower(4);
          }}
        />
        <button
          className={
            choose[5]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 5 ? !value : value))
            );
            OptionMenuShower(5);
          }}
        />
      </div>
      <div className="col-2 d-flex flex-column align-items-center border-bottom border-black">
        <button
          className={
            choose[6]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 6 ? !value : value))
            );
            OptionMenuShower(6);
          }}
        />
        <button
          className={
            choose[7]
              ? "btn btn-dark rounded-circle Table my-2 mb-4 shadow-lg"
              : "btn btn-success rounded-circle Table my-2 mb-4 "
          }
          onClick={() => {
            setChoose(
              choose.map((value, index) => (index === 7 ? !value : value))
            );
            OptionMenuShower(7);
          }}
        />
      </div>
    </>
  );
}

export default Terasse;
