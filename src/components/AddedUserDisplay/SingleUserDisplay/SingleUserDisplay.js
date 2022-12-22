import React from "react";

import "./SingleUserDisplay.css";

const SingleUserDisplay = (props) => {
  // const backCol = () => {
  //   const randomNum = Math.floor(Math.random() * 5);
  //   const backColorArr = [
  //     "aqua",
  //     "blue",
  //     "red",
  //     "pink",
  //     "green",
  //     "midnightblue",
  //   ];
  //   const randomColor = backColorArr[randomNum];
  //   return randomColor;
  // };
  // const styles = {
  //   backgroundColor : backCol()
  // }
  

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="user-list"  onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default SingleUserDisplay;
