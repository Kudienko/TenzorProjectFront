import React from 'react'
import './ModalAccount.scss'
import { Transition } from 'react-transition-group'
import { ReactComponent as IconClose } from '../../../assets/close.svg'


export const ModalAcc = ({ isOpen, onClose }) => {
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose()
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
                                    <p className="user-name">Имя: </p>
                                    <p className="mail-name">Почта: </p>
                                    <p className="gender-name">Выберете пол </p>
                                    <div class="radio-inputs">
                                        <label class="radio">
                                            <input type="radio" name="radio"></input>
                                            <span class="name">Мужчина</span>
                                        </label>

                                        <label class="radio">
                                            <input type="radio" name="radio"></input>
                                            <span class="name">Женщина</span>
                                        </label>
                                    </div>
                                    <div className="buttons-container">
                                        <button className="acc-button">Сменить пароль</button>
                                        <button className="acc-button">Выйти из аккаунта</button>
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
