import React from "react";
import "./LoginPage.scss"
import videoBg from '../../../assets/weather/rain.mp4'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../../../store/thunks/loginThunk/loginThunk";
import {getUserDataThunk} from "../../../store/thunks/getUserDataThunk/getUserDataThunk";
import {useState} from "react";
import {validateEmail, validatePassword} from './LoginValidation';
import {BrowserView} from 'react-device-detect';


function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const moveToLogin = () => {
        navigate("/register")
    }

    const handleChange = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Некорректный формат email');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Пароль должен быть не менее 6 символов');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            const userData = {
                email: email,
                password: password,
            };
            console.log(userData);
            await dispatch(loginUser(userData));
            await dispatch(getUserDataThunk());
            // navigate("/");
        }
    }

    return (
        <div className="main_login">
            <BrowserView>
                <video
                    autoPlay
                    loop
                    muted
                >
                    <source src={videoBg} type="video/mp4"/>
                </video>
            </BrowserView>
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
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>

                    <button type="submit" className="login-button">Войти</button>
                </form>

                <p className="register-prompt">
                    У вас нет аккаунта?<span className="inciting-text" onClick={moveToLogin}> Зарегистрируйтесь!</span>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
