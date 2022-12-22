import React from "react";
import SingleUserDisplay from "./SingleUserDisplay/SingleUserDisplay";
import "./UserDisplayList.css";

function UserDisplayList(props) {
  if (props.users.length === 0) {
    return;
  }

  return (
    <ul className="userboard">
      {props.users.map((user) => (
        <SingleUserDisplay
          onDelete={props.onDeleteUser}
          id={user.id}
          key={user.id}
        >
          {user.username} ({user.age} years old)
        </SingleUserDisplay>
      ))}
    </ul>
  );
}

export default UserDisplayList;
