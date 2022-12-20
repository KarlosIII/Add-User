import React from "react";

function SingleUserDisplay(props) {
  // const users = props.users
  // console.log(users)
  // <div>{props.users[0].username} {props.users[0].age}
  return (
    <div>
      {props.users.map((user) => (
        <div>
          {user.username} {user.age} 
        </div>
      ))}
    </div>
  );
}

export default SingleUserDisplay;
