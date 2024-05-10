import React from "react";
import "./NextPlate.scss";
import SvgItem from "../svgItem/SvgItem"; // Обновите путь в соответствии с вашей структурой

function NextPlate() {
  return (
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
  );
}

export default NextPlate;