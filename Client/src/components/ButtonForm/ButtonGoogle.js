import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// SERVICES
import { transformGoogleToken } from "../../services/Services";

// UTILITIES
import { GoogleLogin } from "react-google-login";
import { CLIENT_GOOGLE_ID } from "../../variables/index";

// CONTEXT
import UserContext from "../../context/UserContext";

export default function ButtonGoogle() {
  const history = useHistory();
  const { userToken } = useContext(UserContext);
  const onGoogleSuccess = async (response) => {
    await transformGoogleToken(response.tokenId).then((response) => {
      if (!response.error) {
        userToken(response.token);
        window.localStorage.setItem("profile", response.token);
        history.push("/my-contacts");
        return;
      }
    });
  };

  const onGoogleFailure = (response) => {
    console.log({ response });
  };

  return (
    <GoogleLogin
      clientId={CLIENT_GOOGLE_ID}
      render={(renderProps) => (
        <button
          className="btn-submit-form"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Ingresar con Google
        </button>
      )}
      buttonText="Login"
      onSuccess={onGoogleSuccess}
      onFailure={onGoogleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
