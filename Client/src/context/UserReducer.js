import { GET_USER } from "./Types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USER:
      return { tokenId: payload };
    default:
      return { state };
  }
};
