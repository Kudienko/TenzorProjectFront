import React, { useState } from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import videoBg from '../../assets/weather/rain.mp4'
import SvgItem from "./svgItem/SvgItem";
import { ReactComponent as ClothIcon } from '../../assets/btn.svg';
import { Modal } from './modal/Modal'


function MainPage() {

  const [modalInfoIsOpen, setmodalInfoIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <Modal
        isOpen={modalInfoIsOpen}
        onClose={() => setmodalInfoIsOpen(false)}
      />
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <header className="header"><SearchItem /></header>
        <div className="main_wrapper">
          <div className="next_days_wrapper">
            <div className="next_info">
              <SvgItem weather={"sunny"} />
              <div className="info_text">
                <h2 className="next_info_date">
                  18 Апреля
                </h2>
                <p className="next_temp">
                  +12...23°
                </p>
              </div>
            </div>
          </div>
          <div className="current_day_wrapper">
            <div className="current_info">
              <div className="info_titles">
                <div className="info_section">
                  <h2 className="current_info_title">Утром</h2>
                  <SvgItem weather={"rain"} />
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
                  <button className="round_button" onClick={() => setmodalInfoIsOpen(true)}><ClothIcon /></button>
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
