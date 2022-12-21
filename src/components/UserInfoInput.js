import React, { useState } from "react";
import Button from "./UI/Button/Button";

function UserInfo(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(enteredAge);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredName, enteredAge);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={userNameChangeHandler}></input>
        <label>Age (Years)</label>
        <input
          type="number"
          min="0"
          max="200"
          onChange={userAgeChangeHandler}
        ></input>
      </div>
      <Button type="submit" />
    </form>
  );
}

export default UserInfo;
