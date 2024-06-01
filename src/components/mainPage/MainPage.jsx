import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import CurrentPlate from "./plates/CurrentPlate";
import NextPlate from "./plates/NextPlate";
import { Modal } from './modal/Modal';
import { ModalAcc } from './modalAccount/ModalAccount';
import {useDispatch} from "react-redux";
import { getWeatherThunk } from "../../store/thunks/getWeatherThunk/getWeatherThunk";
import { loginUser } from "../../store/thunks/getCityThunk/getCityThunk";
import cloudyVideo from '../../assets/weather/cloudly.mp4';
import sunnyVideo from '../../assets/weather/sunny.mp4';
import rainVideo from '../../assets/weather/rain.mp4';
import snowyVideo from '../../assets/weather/snowy.mp4';
import windyVideo from '../../assets/weather/windy.mp4';
import stormVideo from '../../assets/weather/storm.mp4';
import { ReactComponent as AccIcon } from '../../assets/acc.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Loader} from "./loader/Loader";
import {BrowserView, MobileView,} from 'react-device-detect';
import Mobile from "../../versions/mobile/Mobile";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function MainPage() {
    const navigate = useNavigate()

    function getObject(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    const user = getObject('user');


    const weatherToVideoMap = {
        'облачно с прояснениями': cloudyVideo,
        'переменная облачность': cloudyVideo,
        'небольшая облачность': cloudyVideo,
        'ясно': sunnyVideo,
        'дождь': rainVideo,
        'небольшой дождь': rainVideo,
        'снежно': snowyVideo,
        'небольшой снег': snowyVideo,
        'пасмурно': cloudyVideo,
        'ветренно': windyVideo,
        'гроза': stormVideo
    };

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

    const [currentVideo, setCurrentVideo] = useState(sunnyVideo);
    const [nextVideo, setNextVideo] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
                setNextVideo(weatherToVideoMap[weather.payload.data[0]?.weather] || sunnyVideo); // Использовать солнечное видео по умолчанию
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
        const newVideo = weatherToVideoMap[weather] || sunnyVideo;
        if (newVideo !== currentVideo) {
            setNextVideo(newVideo);
            setIsTransitioning(true);
        }
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
                setCurrentVideo(nextVideo);
                setNextVideo(null);
                setIsTransitioning(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [isTransitioning, nextVideo]);

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
                    console.error('Error:', error);
                });
        }
    }, [city]);

    return (
        <>
        <BrowserView>
        <div className="wrapper">

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
            

            <video
                key={currentVideo}
                autoPlay
                loop
                muted
                className={`background-video ${isTransitioning ? 'fade-out' : 'fade-in'}`}
            >
                <source src={currentVideo} type="video/mp4"/>
            </video>

            {nextVideo && (
                <video key={nextVideo}
                       autoPlay
                       loop
                       muted
                       className={`background-video ${isTransitioning ? 'fade-in' : 'fade-out'}`}
                       onCanPlay={() => setTimeout(() => {
                           setCurrentVideo(nextVideo);
                           setNextVideo(null);
                           setIsTransitioning(false);
                       }, 500)}
                >
                    <source src={nextVideo} type="video/mp4"/>
                </video>
            )}
            <div className="content">
                <header className="header">
                    <div className="city-container">
                        <div className="city">{city}</div>
                    </div>
                    <SearchItem setCity={setCity} handleCityChange={handleCityChange}/>
                    <div className="button_account">
                        <button className="round_button2" onClick={accHandler}>
                            <AccIcon/>
                        </button>
                    </div>
                </header>
                <div className="main_wrapper">
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
            <ToastContainer/>
        </div>
        </BrowserView>
        <MobileView>
            <Mobile/>
        </MobileView>
        </>
    );
}

export default MainPage;