import React from "react";
import "./LoginPage.scss"
import videoBg from '../../../assets/rain.mp4'

function LoginPage({ register, errors }) {
  return (
  <div className="main_login">
    <div className="login-container">
      <h2 className="title">Авторизация</h2>
      <p className="instructions">Введите ваш логин и пароль</p>
      
      <form>
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Введите ваш e-mail"
            className={errors.email ? "error" : ""}
            {...register("email")}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Введите ваш пароль"
            className={errors.password ? "error" : ""}
            {...register("password")}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <button type="submit" className="login-button">Войти</button>
      </form>

      <p className="register-prompt">
        У вас нет аккаунта?<span className="inciting-text"> Регистрация</span>
      </p>
    </div>
    <video src={videoBg} autoPlay loop muted />
  </div>
  );
}

export default LoginPage;
