import React, {useState} from 'react'
import './ModalAccount.scss'
import {Transition} from 'react-transition-group'
import {ReactComponent as IconClose} from '../../../assets/close.svg'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import SearchCity from "./searchCity/SearchCity";


export const ModalAcc = ({isOpen, onClose, setOpen}) => {

    const navigate = useNavigate()

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("acc-wrapper")) onClose()
    }

    const data = useSelector((state) => state.user)
    console.log(data)

    // console.log(localStorage.getItem('user'));
    // console.log(localStorage.getItem('access_token'));

    function getObject(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    const user = getObject('user');
    console.log(user)
    const accessToken = localStorage.getItem('access_token');

    const handleLogout = async () => {
        console.log('вЫЙТИ')
        localStorage.clear()
        navigate("/login")
    }
    const [selectedGender, setSelectedGender] = useState(user.gender);
    const [selectedCity, setSelectedCity] = useState(user.city);

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    console.log(selectedCity);

    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className="acc-wrapper" onClick={onWrapperClick}>
                            <div className="acc-content">
                                <button className="acc-close-button" onClick={() => onClose()}>
                                    <IconClose className="close-icon"/>
                                </button>
                                <div className="grid-container-acc">
                                    <h2 className="modal-title">Аккаунт</h2>
                                    <p className="user-name">Имя: {user.login} </p>
                                    <p className="mail-name">Почта: {user.email}</p>
                                    <p className="city-name">Город:</p>
                                    {/*<input value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}></input>*/}
                                    <SearchCity setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
                                    <div className="gender">
                                        <p className="gender-name">Пол:</p>
                                        <div className="radio-inputs">
                                            <label className="radio">
                                                <input type="radio" value="Мужчина"
                                                       checked={selectedGender === 'Мужчина'}
                                                       onChange={handleGenderChange} name="radio"></input>
                                                <span className="name">Мужчина</span>
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Женщина"
                                                       checked={selectedGender === 'Женщина'}
                                                       onChange={handleGenderChange} name="radio"></input>
                                                <span className="name">Женщина</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="buttons-container">
                                        <button className="acc-button">Сменить данные пользователя</button>
                                        <button className="acc-button" onClick={handleLogout}>Выйти из аккаунта</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    )
}
