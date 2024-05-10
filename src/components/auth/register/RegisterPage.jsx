import React, { useState } from "react";
import "./RegisterPage.scss";
import videoBg from '../../../assets/weather/rain.mp4';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/thunks/registerThunk/registerThunk";
import { validateEmail, validateLogin, validatePasswords } from './RegisterValidation'; // Путь может отличаться

function RegisterPage() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToRegister = () => {
    navigate("/login");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Email введен некорректно");
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validateLogin(login)) {
      setLoginError("Имя пользователя должно быть не менее 4 символов");
      isValid = false;
    } else {
      setLoginError('');
    }

    if (!validatePasswords(password, repeatPassword)) {
      setPasswordError("Пароли не совпадают");
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      const userData = {
        login,
        email,
        password,
      };
      dispatch(registerUser(userData));
      // navigate("/");
    }
  }

  return (
    <div className="main_register">
      <div className="register-container">
        <h2 className="title">Регистрация</h2>
        <p className="instructions">Введите данные для регистрации</p>
        
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              id="login"
              name="login"
              placeholder="Введите ваш username"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            {loginError && <p className="error-message">{loginError}</p>}
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
            {emailError && <p className="error-message">{emailError}</p>}
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
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
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