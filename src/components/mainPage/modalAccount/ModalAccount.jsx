import React, {useState} from 'react'
import './ModalAccount.scss'
import {Transition} from 'react-transition-group'
import {ReactComponent as IconClose} from '../../../assets/close.svg'
import {useNavigate} from "react-router-dom";
import SearchCity from "./searchCity/SearchCity";
import {useDispatch} from "react-redux";
import { updateUserThunk } from '../../../store/thunks/updateUserThunk/updateUserThunk';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ModalAcc = ({isOpen, onClose, setOpen, handleCityChange}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("acc-wrapper")) onClose()
    }


    function getObject(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    const user = getObject('user');

    const handleLogout = async () => {
        localStorage.clear()
        navigate("/")
    }
    const [selectedGender, setSelectedGender] = useState(user.gender);
    const [selectedCity, setSelectedCity] = useState(user.city);

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const updateUser = async () =>{
        user.city = selectedCity
        user.gender = selectedGender
        const data = await dispatch(updateUserThunk(user))
        if(data.payload.status === 200){
            localStorage.setItem('user',JSON.stringify(user))
            toast.success("Данные обновлены")
        }
        else{
            toast.error("Что-то пошло не так")
            localStorage.clear()
            navigate('/')
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
                                    <IconClose className="close-icon"/>
                                </button>
                                <div className="grid-container-acc">
                                    <h2 className="modal-title">Аккаунт</h2>
                                    <p className="user-name">Имя: {user.login} </p>
                                    <p className="mail-name">Почта: {user.email}</p>
                                    <p className="city-name">Город:</p>
                                    <SearchCity setSelectedCity={setSelectedCity} selectedCity={selectedCity} handleCityChange={handleCityChange}/>
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
                                        <button className="acc-button" onClick={updateUser}>Сменить данные пользователя</button>
                                        <button className="acc-button" onClick={handleLogout}>Выйти из аккаунта</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
            <ToastContainer/>
        </>
    )
}
