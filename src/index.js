import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HttpsRedirect from "react-https-redirect";

ReactDOM.render(
  <Suspense fallback={null}>
    <React.StrictMode>
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
