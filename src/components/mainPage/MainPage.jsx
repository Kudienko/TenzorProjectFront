import React, { useState } from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import videoBg from '../../assets/weather/rain.mp4';
import CurrentPlate from "./plates/CurrentPlate";
import NextPlate from "./plates/NextPlate";
import { Modal } from './modal/Modal';

function MainPage() {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <Modal isOpen={modalInfoIsOpen} onClose={() => setModalInfoIsOpen(false)} />
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <header className="header"><SearchItem /></header>
        <div className="main_wrapper">
          <NextPlate />
          <CurrentPlate setModalOpen={setModalInfoIsOpen} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
