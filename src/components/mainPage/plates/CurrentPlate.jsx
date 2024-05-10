import React from "react";
import "./CurrentPlate.scss";
import SvgItem from "../svgItem/SvgItem";
import { ReactComponent as ClothIcon } from '../../../assets/btn.svg';

function CurrentPlate({ setModalOpen }) {
  return (
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
            <button className="round_button" onClick={() => setModalOpen(true)}>
              <ClothIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentPlate;