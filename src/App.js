import React, { useState } from "react";
import UserInfoInput from "./components/UserInfoInput";

import UserDisplayList from "./components/AddedUserDisplay/UserDisplayList";

function App() {
  const [users, setUsers] = useState([
    { username: "George", age: "23", id: "u1" },
    { username: "Annita", age: "99", id: "u2" },
    { username: "Karla", age: "120", id: "u3" },
  ]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUsers((prevUsers) => {
      const updateUsers = [...prevUsers];
      updateUsers.unshift({
        username: enteredName,
        age: enteredAge,
        id: Math.random().toString(),
      });
      return updateUsers;
    });
  };

  const deleteUserHandler = userId => {
    setUsers(prevUsers => {
      const updateUsers = prevUsers.filter(user => user.id !== userId);
      return updateUsers;
    });
  };


  return (
    <div>
      <div>Space</div>
      <UserInfoInput onAddUser={addUserHandler} />

      <UserDisplayList onDeleteUser={deleteUserHandler} users={users} />
    </div>
  );
}

export default App;
