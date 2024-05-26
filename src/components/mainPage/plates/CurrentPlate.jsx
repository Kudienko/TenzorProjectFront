import React from "react";
import "./CurrentPlate.scss";
import SvgItem from "../svgItem/SvgItem";
import { ReactComponent as ClothIcon } from '../../../assets/btn.svg';

function CurrentPlate({ setmodalInfoIsOpen, period }) {
  console.log(period);

  // const customSortOrder = {
  //   "Утром": 0,
  //   "Днем": 1,
  //   "Вечером": 2,
  // };
  //
  // period.sort((a, b) => customSortOrder[a.period] - customSortOrder[b.period]);
  console.log(period);
  return (
    <>
      {
        period && Object.keys(period).map((id) => (
          <div className="current_info">
            <div className="info_titles" key={id}>
              <div className="info_section">
                <h2 className="current_info_title">{period[id].period}</h2>
                <SvgItem weather={period[id].weather} />
                <p className="current_temp">
                  {String(period[id].temp_min).includes("-") ? period[id].temp_min : "+" + period[id].temp_min}
                  ...
                  {String(period[id].temp_max).includes("-") ? period[id].temp_max : "+" + period[id].temp_max}</p>
              </div>
              <div className="info_section">
                <h2 className="current_info_title">Влажность</h2>
                <p className="current_temp">{period[id].humidity}%</p>
              </div>
              <div className="info_section">
                <h2 className="current_info_title">Ветер</h2>
                <p className="current_temp">{period[id].wind_speed} м/с</p>
              </div>
              <div className="info_section">
                <h2 className="current_info_title">Ощущается</h2>
                <p className="current_temp">{period[id].feels_like}</p>
              </div>
              <div className="button_section">
                <button className="round_button" onClick={() => setmodalInfoIsOpen(true)}>
                  <ClothIcon />
                </button>
              </div>
            </div>
          </div>
        ))
      }


    </>
  );
}

export default CurrentPlate;