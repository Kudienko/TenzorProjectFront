import React, {useEffect, useState} from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import videoBg from '../../assets/weather/rain.mp4';
import CurrentPlate from "./plates/CurrentPlate";
import NextPlate from "./plates/NextPlate";
import { Modal } from './modal/Modal';
import {useDispatch, useSelector} from "react-redux";
import {getWeatherThunk} from "../../store/thunks/getWeatherThunk/getWeatherThunk";


function MainPage() {
    const dispatch = useDispatch();
    const [oneRender, setOneRender] = useState(0);
    const [city, setCity] = useState("Москва");


    useEffect(() => {
        if (oneRender === 0) {
            const weatherData = {
                lat: 55.751244,
                lon:  37.618423,
            };
            dispatch(getWeatherThunk(weatherData));
            setOneRender(1)
        }

    }, [oneRender, dispatch]);

  const { weather } = useSelector((state) => state.weather)
  console.log(weather);

  const [modalInfoIsOpen, setmodalInfoIsOpen] = useState(false);


  return (
    <div className="wrapper">
      <Modal
        isOpen={modalInfoIsOpen}
        onClose={() => setmodalInfoIsOpen(false)}
      />
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <header className="header">
          <div className="city-container">
            <div className="city">{city}</div>
          </div>
          <SearchItem setCity={setCity} />
        </header>
        <div className="main_wrapper">
          <div className="next_days_wrapper">
            {
              weather.data && weather.data.map((day, id) => (
                <NextPlate key={id} weather={day} />
              ))
            }
          </div>
          <div className="current_day_wrapper">
            {
                weather.data &&
                <CurrentPlate setmodalInfoIsOpen={setmodalInfoIsOpen} period={weather.data[1].periods} />
              
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default MainPage;