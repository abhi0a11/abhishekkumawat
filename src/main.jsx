import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import "animate.css/animate.compat.css";

// export const server = "https://portfolio-backend-t5t5.onrender.com";
export const server = "https://portfolio-backend-new-jfca.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
