import React from "react";
import UserDisplayList from "./AddedUserDisplay/UserDisplayList";

function UserDisplay(props) {
  const deleteHandler = () => {
    props.onDeleteUser(props.id);
  };

  return (
    <ul>
      <li>
      <UserDisplayList onClick={deleteHandler} users={props.users} />
      </li>
    </ul>
  );
}

export default UserDisplay;
