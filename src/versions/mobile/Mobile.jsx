import React, {useEffect, useState} from 'react';
import "./Mobile.scss";
import {useDispatch} from "react-redux";
import {getWeatherThunk} from "../../store/thunks/getWeatherThunk/getWeatherThunk";
import {toast} from "react-toastify";
import SearchItem from "../../components/mainPage/searchItem/SearchItem";
import {ReactComponent as AccIcon} from '../../assets/acc.svg';
import {Modal} from "../../components/mainPage/modal/Modal";
import {ModalAcc} from "../../components/mainPage/modalAccount/ModalAccount";
import NextPlate from "../../components/mainPage/plates/NextPlate";
import CurrentPlate from "../../components/mainPage/plates/CurrentPlate";
import {Loader} from "../../components/mainPage/loader/Loader";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Mobile = () => {
    const navigate = useNavigate()

    function getObject(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    const user = getObject('user');

    const initialStateClothes = {
        female: {
            body: ['Топ'],
            feet: ['Кеды', 'Тапочки', 'Кроссовки'],
            head: ['Кепка', 'Шляпка'],
            legs: ['Шорты', 'Юбка', 'Брюки'],
        },
        male: {
            body: ['Футболка', 'Рубашка'],
            feet: ['Кроссовки', 'Мокасины'],
            head: ['Кепка', 'Панамка'],
            legs: ['Брюки'],
        },
    };

    const dispatch = useDispatch();
    const [city, setCity] = useState(user ? user.city : "Москва");
    const [modalInfoIsOpen, setmodalInfoIsOpen] = useState(false);
    const [modalAccIsOpen, setModalAccIsOpen] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [clothes, setClothes] = useState(initialStateClothes);
    const [isLoading, setIsLoading] = useState(false);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const fetchWeatherData = async (lat = 55.751244, lon = 37.618423) => {
        setIsLoading(true);
        try {

            // await delay(5000);
            const weather = await dispatch(getWeatherThunk({
                lat: lat,
                lon: lon,
            }));

            if (weather && weather.payload && weather.payload.data) {
                setWeatherData(weather.payload.data);
                setSelectedDate(weather.payload.data[0]?.date); // Используйте optional chaining
            } else {
                throw new Error('Invalid data format');
            }
        } catch (error) {
            setWeatherData([]);
            toast.error("Не удалось получить данные с сервера. Попробуйте позже.");
        } finally {
            setIsLoading(false); // Окончание загрузки
        }
    };

    const handleDateClick = (date, weather) => {
        setSelectedDate(date);
    };

    const handleCityChange = async (cityName, lat, lon) => {
        setIsLoading(true);
        setCity(cityName);
        fetchWeatherData(lat,lon);
    };

    const selectedData = weatherData.find((item) => item.date === selectedDate);

    useEffect(() => {
        if (isTransitioning) {
            const timeoutId = setTimeout(() => {
                setIsTransitioning(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [isTransitioning]);

    const accHandler = () => {

            if (!user) {
                navigate('/login')
            } else  {
                setModalAccIsOpen(true);
            }
    }

    useEffect(() => {
        if(!city)
            fetchWeatherData();
        else{
            axios.get(`https://tensor-project-backend.onrender.com/api/cities/get_cities?city=${city}`)
                .then((response) => {
                    const { lat, lon } = response.data[0];
                    fetchWeatherData(lat,lon)
                })
                .catch((error) => {
                    toast.error("Город не найден")
                });
        }
    }, [city]);

    return (
        <div className="wrapper-mobile">
            <Modal
                isOpen={modalInfoIsOpen}
                onClose={() => setmodalInfoIsOpen(false)}
                clothes={clothes}
            />

            {
                user && (
                <ModalAcc
                    isOpen={modalAccIsOpen}
                    setOpen={setModalAccIsOpen}
                    onClose={() => setModalAccIsOpen(false)}
                    handleCityChange={handleCityChange}
                />
                )
            }
            

            <div className="content-mobile">
                <header className="header-mobile">
                    <div className="city-container-mobile">
                        <div className="city-mobile">{city}</div>
                        <div className="button_account">
                            <button className="round_button2" onClick={accHandler}>
                                <AccIcon/>
                            </button>
                        </div>
                    </div>
                    <SearchItem setCity={setCity} handleCityChange={handleCityChange}/>

                </header>
                <div className="main-wrapper-mobile">
                    {weatherData.length > 0 ? <NextPlate data={weatherData} onDateClick={handleDateClick}
                                                         selectedDate={selectedDate}/> :
                        <div className="next_info_no_data">
                            <div className="no_data_text">{isLoading ? <Loader/> : 'Нет данных'}</div>
                        </div>}
                    {selectedData ? <CurrentPlate setmodalInfoIsOpen={setmodalInfoIsOpen} data={selectedData}
                                                  setClothes={setClothes}/> :
                        <div className="current_day_wrapper_no_data">
                            <div className="no_data_text">{isLoading ? <Loader/> : 'Нет данных'}</div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Mobile;