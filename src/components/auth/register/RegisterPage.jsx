import React from "react";
import "./RegisterPage.scss";
import videoBg from '../../../assets/rain.mp4'

function RegisterPage({ register, errors }) {
  return (
  <div className="main_register">
    <div className="register-container">
      <h2 className="title">Регистрация</h2>
      <p className="instructions">Введите данные для регистрации</p>
      
      <form>
        <div className="input-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Введите ваш username"
            className={errors.username ? "error" : ""}
            {...register("username")}
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>

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

        <div className="input-group">
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Повторите ваш пароль"
            className={errors.repeatPassword ? "error" : ""}
            {...register("repeatPassword")}
          />
          {errors.repeatPassword && <p className="error-message">{errors.repeatPassword.message}</p>}
        </div>

        <button type="submit" className="register-button">Регистрация</button>
      </form>

      <p className="login-prompt">
        У вас уже есть аккаунт?<span className="inciting-text"> Авторизация</span>
      </p>
    </div>
    <video src={videoBg} autoPlay loop muted />
  </div>
  );
}

export default RegisterPage;
