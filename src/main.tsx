import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import SignUp from "./pages/signUp";
import "./index.css";
import Navbar from "./pages/navbar.tsx";
// import Login from "./pages/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    {/* <Login /> */}
    <SignUp />
  </React.StrictMode>
);
