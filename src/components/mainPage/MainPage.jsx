import React, { useState } from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import videoBg from '../../assets/weather/rain.mp4';
import CurrentPlate from "./plates/CurrentPlate";
import NextPlate from "./plates/NextPlate";
import { Modal } from './modal/Modal';
import SvgItem from "./svgItem/SvgItem";

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
            <NextPlate />
          </div>
          <div className="current_day_wrapper">
            <CurrentPlate setmodalInfoIsOpen={setmodalInfoIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default MainPage;