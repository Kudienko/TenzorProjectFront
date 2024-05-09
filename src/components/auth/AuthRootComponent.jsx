import React from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import "./AuthRootComponent.scss";

function AuthRootComponent() {
  const location = useLocation();

  return (
    <div className="root">
      <div className="wrapper">
        <div className="box">
          {location.pathname === "/login" ? (
            <LoginPage/>
          ) : location.pathname === "/register" ? (
            <RegisterPage/>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AuthRootComponent;