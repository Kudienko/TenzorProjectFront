import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import CurrentPlate from "./plates/CurrentPlate";
import NextPlate from "./plates/NextPlate";
import { Modal } from './modal/Modal';
import { ModalAcc } from './modalAccount/ModalAccount';
import { useDispatch } from "react-redux";
import { getWeatherThunk } from "../../store/thunks/getWeatherThunk/getWeatherThunk";
import cloudyVideo from '../../assets/weather/cloudly.mp4';
import sunnyVideo from '../../assets/weather/sunny.mp4';
import rainVideo from '../../assets/weather/rain.mp4';
import snowyVideo from '../../assets/weather/snowy.mp4';
import windyVideo from '../../assets/weather/windy.mp4';
import stormVideo from '../../assets/weather/storm.mp4';
import { ReactComponent as ClothIcon } from '../../assets/btn.svg';
import { ReactComponent as AccIcon } from '../../assets/acc.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
    const weatherToVideoMap = {
        'облачно с прояснениями': cloudyVideo,
        'переменная облачность': cloudyVideo,
        'ясно': sunnyVideo,
        'дождь': rainVideo,
        'снежно': snowyVideo,
        'пасмурно': rainVideo,
        'ветренно': windyVideo,
        'гроза': stormVideo
    };

    const dispatch = useDispatch();
    const [city, setCity] = useState("Москва");
    const [modalInfoIsOpen, setmodalInfoIsOpen] = useState(false);
    const [modalAccIsOpen, setModalAccIsOpen] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [backgroundVideo, setBackgroundVideo] = useState(sunnyVideo); // Установить солнечное видео по умолчанию

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weather = await dispatch(getWeatherThunk({
                    lat: 55.751244,
                    lon: 37.618423,
                }));

                if (weather && weather.payload && weather.payload.data) {
                    setWeatherData(weather.payload.data);
                    setSelectedDate(weather.payload.data[0]?.date); // Используйте optional chaining
                    setBackgroundVideo(weatherToVideoMap[weather.payload.data[0]?.weather] || sunnyVideo); // Использовать солнечное видео по умолчанию
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                setWeatherData([]);
                toast.error("Не удалось получить данные с сервера. Попробуйте позже.");
            }
        };
        fetchWeatherData();
    }, [dispatch]);

    const handleDateClick = (date, weather) => {
        setSelectedDate(date);
        setBackgroundVideo(weatherToVideoMap[weather] || sunnyVideo); // Использовать солнечное видео по умолчанию
    };

    const handleCityChange = async (cityName, lat, lon) => {
        setCity(cityName);
        try {
            const weather = await dispatch(getWeatherThunk({ lat, lon }));

            if (weather && weather.payload && weather.payload.data) {
                setWeatherData(weather.payload.data);
                setSelectedDate(weather.payload.data[0]?.date);
                setBackgroundVideo(weatherToVideoMap[weather.payload.data[0]?.weather] || sunnyVideo); // Использовать солнечное видео по умолчанию
            } else {
                throw new Error('Invalid data format');
            }
        } catch (error) {
            setWeatherData([]);
            toast.error("Не удалось получить данные с сервера. Попробуйте позже.");
        }
    };

    const selectedData = weatherData.find((item) => item.date === selectedDate);
    console.log(weatherData)
    return (
        <div className="wrapper">
            <Modal
                isOpen={modalInfoIsOpen}
                onClose={() => setmodalInfoIsOpen(false)}
            />

            <ModalAcc
                isOpen={modalAccIsOpen}
                onClose={() => setModalAccIsOpen(false)}
            />

            {backgroundVideo && (
                <video key={backgroundVideo} autoPlay loop muted className="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            )}
            <div className="content">
                <header className="header">
                    <div className="city-container">
                        <div className="city">{city}</div>
                    </div>
                    <SearchItem setCity={setCity} handleCityChange={handleCityChange} />
                    <div className="button_account">
                        <button className="round_button2" onClick={() => setModalAccIsOpen(true)}>
                            <AccIcon />
                        </button>
                    </div>
                </header>
                <div className="main_wrapper">
                    {/*<NextPlate data={weatherData} onDateClick={handleDateClick} selectedDate={selectedDate}/>*/}
                    {weatherData.length > 0 ? <NextPlate data={weatherData} onDateClick={handleDateClick}
                        selectedDate={selectedDate} /> : <div className="next_info_no_data">
                        <div className="no_data_text">Нет данных</div>
                    </div>}
                    {/*<CurrentPlate setmodalInfoIsOpen={setmodalInfoIsOpen} data={selectedData}/>*/}
                    {selectedData ? <CurrentPlate setmodalInfoIsOpen={setmodalInfoIsOpen} data={selectedData} /> :
                        <div className="current_day_wrapper_no_data">
                            <div className="no_data_text">Нет данных</div>
                        </div>}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default MainPage;