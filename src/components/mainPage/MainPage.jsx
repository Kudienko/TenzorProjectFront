import React, { useState } from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import videoBg from '../../assets/weather/rain.mp4';
import CurrentPlate from "./plates/CurrentPlate";
import NextPlate from "./plates/NextPlate";
import { Modal } from './modal/Modal';
import { useSelector } from "react-redux";

function MainPage() {
  const { weather } = useSelector((state) => state.weather)
  console.log(weather);

  const [modalInfoIsOpen, setmodalInfoIsOpen] = useState(false);
  const [city, setCity] = useState("Москва");

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