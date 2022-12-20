import React, { useState } from "react";
import Button from "./UI/Button/Button";

function UserInfo(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredAge(event.target.value);
    console.log(enteredAge, enteredName);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredAge, enteredName);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={userInputChangeHandler}></input>
        <label>Age (Years)</label>
        <input
          type="number"
          min="0"
          max="200"
          onChange={userInputChangeHandler}
        ></input>
      </div>
      <Button type="submit" />
    </form>
  );
}

export default UserInfo;
