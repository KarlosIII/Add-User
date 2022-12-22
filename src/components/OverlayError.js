import React from "react";
import "./OverlayError.css";

function OverlayError(props) {
     return (
    <div className="popup">
      <div className="title">Invalid input</div>
      <div className="invalid-name">Name can't be empty !</div>
      <div className="invalid-age">Age need to be greater than 0 !</div>
      <button onClick={props.onResetError} >Okay</button>
    </div>
  )
}

export default OverlayError;
