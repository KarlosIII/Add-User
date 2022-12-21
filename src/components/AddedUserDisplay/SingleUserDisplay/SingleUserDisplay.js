import React from "react";

import "./SingleUserDisplay.css";

const SingleUserDisplay = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  console.log(props.children);

  return <li onClick={deleteHandler}>{props.children}</li>;
};

export default SingleUserDisplay;
