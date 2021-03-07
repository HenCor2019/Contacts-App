import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

export default function UserState(props) {
  const initialState = {
    tokenId: window.localStorage.getItem("profile"),
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const userToken = (token) => dispatch({ type: "GET_USER", payload: token });

  return (
    <UserContext.Provider value={{ tokenId: state.tokenId, userToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
