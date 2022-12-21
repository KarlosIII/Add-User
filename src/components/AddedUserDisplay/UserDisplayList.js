import React from "react";
import SingleUserDisplay from "./SingleUserDisplay/SingleUserDisplay";

function UserDisplayList(props) {
  return (
    <ul>
      {props.users.map((user) => (
        <SingleUserDisplay onDelete={props.onDeleteUser}>
          {user.username} {user.age}
        </SingleUserDisplay>
      ))}
    </ul>
  );
}

export default UserDisplayList;
