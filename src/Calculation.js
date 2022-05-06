import React, { useState } from "react";

function Calculation() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState(0);
  const AddThem = () => {
    setTotal(number1 + number2);
  };
  const SubtractThem = () => {
    setTotal(number1 - number2);
  };
  const MultiplyThem = () => {
    setTotal(number1 * number2);
  };
  const DivideThem = () => {
    setTotal(number1 / number2);
  };
  return (
    <div>
      <h2>Assignments-1</h2>
      <div>
        <label>First Number : </label>
        <input
          type="text"
          placeholder="Enter 1st Number"
          value={number1}
          onChange={(e) => {
            setNumber1(+e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Second Number : </label>
        <input
          type="text"
          placeholder="Enter 2nd Number"
          value={number2}
          onChange={(e) => {
            setNumber2(+e.target.value);
          }}
        ></input>
      </div>
      <button onClick={AddThem}>Addition</button>
      <button onClick={SubtractThem}>Subtraction</button>
      <button onClick={MultiplyThem}>Multiplication</button>
      <button onClick={DivideThem}>Division</button>

      <h2>{total}</h2>
    </div>
  );
}

export default Calculation;
