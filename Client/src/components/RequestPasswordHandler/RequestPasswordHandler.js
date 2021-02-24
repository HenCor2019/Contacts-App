import React, { useState } from "react";
import RequestPasswordHandlerForm from "./RequestPasswordHandlerForm";
import ScreenSplitLeft from "../ScreenSplit/ScreenSplitLeft/ScreenSplitLeft";
import ScreenSplitRight from "../ScreenSplit/ScreenSplitRight/ScreenSplitRight";

// css files
import "./RequestPasswordHandler.css";
import { requestPasswordHandler } from "../../services/Services";

export default function RequestPasswordHandler() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({
    updated: false,
    error: false,
    loading: false,
    message: "",
  });

  const handlerOnSubmit = async (password, token) => {
    setStatus({ ...status, loading: true });

    await requestPasswordHandler(password, token)
      .then((response) => {
        if (!response.error) {
          setStatus({
            ...status,
            updated: true,
            loading: false,
            message: response.message,
          });
          return;
        }

        setStatus({
          ...status,
          loading: false,
          error: true,
          message: response.message,
        });
        return;
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <div className="request-password-container">
      <ScreenSplitLeft />
      <RequestPasswordHandlerForm
        password={password}
        setPassword={setPassword}
        status={status}
        setStatus={setStatus}
        handlerOnSubmit={handlerOnSubmit}
      />
      <ScreenSplitRight />
    </div>
  );
}
