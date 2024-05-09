import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import "./style.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/thunks/loginThunk/loginThunk";
import { registerUser } from "../../store/thunks/registerThunk/registerThunk";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../utils/yup/yup";

function AuthRootComponent() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "",
    resolver: yupResolver(
      location.pathname === "/login" ? loginSchema : registerSchema
    ),
  });

  const handleSubmitForm = async (data) => {
    if (location.pathname === "/login") {
      try {
        const userData = {
          grant_type: "",
          username: data.email,
          password: data.password,
          scope: "",
          client_id: "",
          client_secret: "",
        };
        dispatch(loginUser(userData));
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
      if (data.password === data.repeatPassword) {
        const userData = {
          login: data.username,
          email: data.email,
          hashed_password: data.password,
          city: "Moscow",
        };
        dispatch(registerUser(userData));
        navigate("/");
      } else {
        throw new Error("У вас не совпадают пароли");
      }
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="box">
          {location.pathname === "/login" ? (
            <LoginPage register={register} errors={errors} />
          ) : location.pathname === "/register" ? (
            <RegisterPage register={register} errors={errors} />
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default AuthRootComponent;