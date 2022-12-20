import React, { useState } from "react";
import UserInfo from "./components/UserInfoInput";

import UserDisplay from "./components/UserDisplay";

function App(props) {
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
      console.log(updateUsers);
      return updateUsers;
    });
  };

  return (
    <div>
      <div>Space</div>
      <UserInfo />

      <UserDisplay users={users} onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
