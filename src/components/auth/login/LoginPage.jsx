import React from "react";
import "./LoginPage.scss"
import videoBg from '../../../assets/weather/rain.mp4'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/thunks/loginThunk/loginThunk";
import { useState } from "react";


function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate("/register")
  }

  const handleChange = (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: email,
        password: password,
      };
      console.log(userData);
      dispatch(loginUser(userData));
      navigate("/");
    } catch (error) {
      console.log("errrrrrrrrror");
      return error;
    }
  }

  return (
  <div className="main_login">
    <div className="login-container">
      <h2 className="title">Авторизация</h2>
      <p className="instructions">Введите ваш логин и пароль</p>
      
      <form onSubmit={handleChange}>
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

        <button type="submit" className="login-button">Войти</button>
      </form>

      <p className="register-prompt">
        У вас нет аккаунта?<span className="inciting-text" onClick={moveToLogin}> Зарегистрируйтесь!</span>
      </p>
    </div>
    <video src={videoBg} autoPlay loop muted />
  </div>
  );
}

export default LoginPage;
