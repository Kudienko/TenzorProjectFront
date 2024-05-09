import React from "react";
import "./RegisterPage.scss";
import videoBg from '../../../assets/weather/rain.mp4'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../../store/thunks/registerThunk/registerThunk";

function RegisterPage() {

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPasswprd] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToRegister = () => {
    navigate("/login")
  }
  
  const handleChange = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const userData = {
        login: login,
        email: email,
        password: password,
      };
      dispatch(registerUser(userData));
      // navigate("/");
    } else {
      throw new Error("У вас не совпадают пароли");
    }
  }

  
  return (
  <div className="main_register">
    <div className="register-container">
      <h2 className="title">Регистрация</h2>
      <p className="instructions">Введите данные для регистрации</p>
      
      <form onSubmit={handleChange}>
        <div className="input-group">
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Введите ваш username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Введите ваш e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Повторите ваш пароль"
            value={repeatPassword}
            onChange={(e) => setRepeatPasswprd(e.target.value)}
          />
        </div>

        <button type="submit" className="register-button">Регистрация</button>
      </form>

      <p className="login-prompt">
        У вас уже есть аккаунт?<span className="inciting-text" onClick={moveToRegister}> Авторизируйтесь!</span>
      </p>
    </div>
    <video src={videoBg} autoPlay loop muted />
  </div>
  );
}

export default RegisterPage;
