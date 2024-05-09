import React from "react";
import Sunny from "./svgIcons/Sunny";
import Moonly from "./svgIcons/Moonly";
import Snowy from "./svgIcons/Snowy";
import Windy from "./svgIcons/Windy";
import Cloudly from "./svgIcons/Cloudly";
import Rain from "./svgIcons/Rain";
import Hail from "./svgIcons/Hail";
import CloudSnow from "./svgIcons/CloudSnow";
import SnowAlt from "./svgIcons/SnowAlt";
import Fog from "./svgIcons/Fog";
import Lightning from "./svgIcons/Lightning";

function SvgItem({weather}) {
  
  const getSvgIcon = () => {
    switch (weather) {
      case "sunny":
        return <Sunny />; // солнце анимированное
      case "moonly":
        return <Moonly />; // луна анимированная
      case "snowy":
        return <Snowy />; // Снежинка анимированноа
      case "windy":
        return <Windy />; // ветер анимированное
      case "cloudly":
        return <Cloudly />; // облачно анимированное
      case "rain":
        return <Rain />; // Дождь анимированное
      case "hail":
        return <Hail />; // град не работает
      case "cloudSnow":
        return <CloudSnow />; // снег не работает
      case "snowAlt":
        return <SnowAlt />; // снежинка и тучка не анимированная
      case "fog":
        return <Fog />; // Туман анимированный
      case "light":
        return <Lightning />; // Гроза анимированный
      default:
        return <Sunny />;
    }
  };
  return <>{getSvgIcon()}</>;
}

export default SvgItem;
