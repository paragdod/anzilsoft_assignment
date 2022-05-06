import React, { useRef, useState } from "react";
import "./App.css";
function Form() {
  const [values, setValues] = useState([]);
  const [names, setNames] = useState({
    firstNameInput: "",
    lastNameInput: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (names.firstNameInput === "" || names.lastNameInput === "") {
      alert("Please Enter both First Name and LastName");
      return;
    }
    setValues([...values, names]);
  };

  const firstNameOnChangeHandler = (e) => {
    setNames({ ...names, firstNameInput: e.target.value });
  };

  const lastNameOnChangeHandler = (e) => {
    setNames({ ...names, lastNameInput: e.target.value });
  };

  return (
    <React.Fragment>
      <h2>Assignment-2</h2>
      <form onSubmit={submitForm}>
        <div style={{ display: "block" }}>
          <label>First Name : </label>
          <input
            type="text"
            name="firstNameInput"
            placeholder="Enter First Name"
            value={names.firstNameInput}
            onChange={firstNameOnChangeHandler}
          ></input>
        </div>
        <div style={{ display: "block" }}>
          <label>Last Name : </label>
          <input
            type="text"
            name="lastNameInput"
            placeholder="Enter Last Name"
            value={names.lastNameInput}
            onChange={lastNameOnChangeHandler}
          ></input>
        </div>
        <button>Submit</button>
      </form>
      <table>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
          {values.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.firstNameInput}</td>
                <td>{item.lastNameInput}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default Form;
