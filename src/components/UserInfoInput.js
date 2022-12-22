import React, { useState } from "react";
import OverlayError from "./OverlayError";
import Button from "./UI/Button/Button";
import "./UserInfoInput.css";

function UserInfo(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const inputValidHandler = () => {
    if (enteredName.length < 1 || enteredAge < 0 || enteredAge == "") {
      
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    if (enteredName.length < 1) {
      
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isValid == true) { 
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
    } else {
      return;
    }
  };

  const resetErrorHandler = (event) => {
    setIsValid(true);
  }

  return (
    <div>
      <form className="board" onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>
          <br></br>
          <input
            //required
            value={enteredName}
            type="text"
            onChange={userNameChangeHandler}
          ></input>
          <br></br>
          <label>Age (Years)</label>
          <br></br>
          <input
            //required
            type="number"
            max="200"
            onChange={userAgeChangeHandler}
            value={enteredAge}
          ></input>
        </div>

        <Button onClick={inputValidHandler} type="submit" />
      </form>
      {!isValid && <OverlayError  onResetError={resetErrorHandler} />}
    </div>
  );
}

export default UserInfo;
