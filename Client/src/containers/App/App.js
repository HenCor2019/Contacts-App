import React from "react";
import Routes from "../../components/Routes/Routes";

//CONTEXT
import UserState from "../../context/UserState";

export default function App() {
  return (
    <UserState>
      <Routes />
    </UserState>
  );
}
