import React from 'react'
import './ModalAccount.scss'
import { Transition } from 'react-transition-group'
import { ReactComponent as IconClose } from '../../../assets/close.svg'
import {useSelector} from "react-redux";
import {deleteCookie} from "../../../utils/cookieUtils";


export const ModalAcc = ({ isOpen, onClose, setOpen }) => {

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("acc-wrapper")) onClose()
    }

    const data = useSelector((state) => state.user)
    console.log(data)

    const handleLogout = async () => {
        console.log('вЫЙТИ')
        const kuk = deleteCookie("weather_access_token")
        console.log(kuk)
        if (!kuk) {
            console.log('кук удалился')
            setOpen(false)
        }

    }

    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className="acc-wrapper" onClick={onWrapperClick}>
                            <div className="acc-content">
                                <button className="acc-close-button" onClick={() => onClose()}>
                                    <IconClose className="close-icon" />
                                </button>
                                <div className="grid-container-acc">
                                    <h2 className="modal-title">Аккаунт</h2>
                                    <p className="user-name">Имя: {data.user.login} </p>
                                    <p className="mail-name">Почта: {data.user.email}</p>
                                    <p className="city-name">Город: {data.user.city}</p>
                                    <div className="gender">
                                    <p className="gender-name">Пол:  </p>
                                    <div class="radio-inputs">
                                        <label class="radio">
                                            <input type="radio" checked={data.user.gender === 'Мужчина'} name="radio"></input>
                                            <span class="name">Мужчина</span>
                                        </label>

                                        <label class="radio">
                                            <input type="radio" checked={data.user.gender === 'Женщина'} name="radio"></input>
                                            <span class="name">Женщина</span>
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
