import React from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import videoBg from '../../assets/rain.mp4'


function MainPage() {
  return (
    <div className="wrapper">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <header className="header"><SearchItem /></header>
        <div className="main_wrapper">
          <div className="next_days_wrapper">
            <div className="next_info">
              <h2 className="next_info_date">
                18 Апреля
              </h2>
              <p2 className="next_temp">
                +12...23°
              </p2>
            </div>
          </div>
          <div className="current_day_wrapper">
            <div className="current_info">
              <div className="info_titles">
                <div className="info_section">
                  <h2 className="current_info_title">Утром</h2>
                  <img className="weather_icon" />
                  <p className="current_temp">+12...23°</p>
                </div>
                <div className="info_section">
                  <h2 className="current_info_title">Влажность</h2>
                  <p className="current_temp">70%</p>
                </div>
                <div className="info_section">
                  <h2 className="current_info_title">Ветер</h2>
                  <p className="current_temp">6,4 м/с</p>
                </div>
                <div className="info_section">
                  <h2 className="current_info_title">Ощущается</h2>
                  <p className="current_temp">+5°</p>
                </div>
                <div className="button_section">
                  <button className="round_button">i</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
