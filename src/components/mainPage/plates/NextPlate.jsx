import React from "react";
import "./NextPlate.scss";
import SvgItem from "../svgItem/SvgItem"; // Обновите путь в соответствии с вашей структурой

function NextPlate({ weather }) {
  return (
    <div className="next_info">
      <SvgItem weather={weather.weather} />
      <div className="info_text">
        <h2 className="next_info_date">
          {weather.date}
        </h2>
        <p className="next_temp">
          {weather.temp_min}...{weather.temp_max}
        </p>
      </div>
    </div>
  );
}

export default NextPlate;