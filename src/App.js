import React, { useState,Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge,id:Math.random.toString() }];
    });
  };

  return (
    <>
    {/* <React.Fragment> */}
    {/* <Fragm/ent> */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      {/* </Fragment> */}
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
