import React from "react";
import SingleUserDisplay from "./SingleUserDisplay/SingleUserDisplay";

function UserDisplay(props) {
  // const users = [props.users];
  // console.log(props.users.age);
  // <div>{props.users.username}  {props.users.age}</div>

  return (
    <ul>
      
      <SingleUserDisplay users={props.users} />
        
      
    </ul>
  );
}

export default UserDisplay;
