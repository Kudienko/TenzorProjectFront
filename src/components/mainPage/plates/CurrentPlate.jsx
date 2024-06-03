import React, {useEffect, useState} from "react";
import "./CurrentPlate.scss";
import SvgItem from "../svgItem/SvgItem";
import {ReactComponent as ClothIcon} from '../../../assets/btn.svg';
import {BrowserView, isBrowser, MobileView} from "react-device-detect";

function CurrentPlate({setmodalInfoIsOpen, data, setClothes}) {

    const [animationKey, setAnimationKey] = useState(0); // State для ключа анимации
    // Обновление ключа анимации при изменении props data
    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, [data]);

    const periodOrder = ["Утром", "Днем", "Вечером"];

    const weatherArrayCopy = [...data.periods];

    function comparePeriod(a, b) {
        return periodOrder.indexOf(a.period) - periodOrder.indexOf(b.period);
    }

    weatherArrayCopy.sort(comparePeriod);

    const handleClick = (id) => {
        const male = weatherArrayCopy[id].clothes.male
        const female = weatherArrayCopy[id].clothes.female
        setClothes((prevState) => ({
            ...prevState,
            female: {
                ...prevState.female,
                body: [...female.body],
                feet: [...female.feet],
                head: [...female.head],
                legs: [...female.legs],
            },
            male: {
                ...prevState.male,
                body: [...male.body],
                feet: [...male.feet],
                head: [...male.head],
                legs: [...male.legs],
            },
        }));
        setmodalInfoIsOpen(true);
    }

    return (
        <>
            <div className={`current_day_wrapper`} key={animationKey}>
                {
                    weatherArrayCopy && Object.keys(weatherArrayCopy).map((id) => (
                        <div className="current_info"
                             key={id}
                             style={{animationDelay: `${id * 0.5}s`}} // Задержка для каждого блока
                        >

                            <div className="info_titles">
                                <div className="info_section">
                                    <h2 className="current_info_title">{weatherArrayCopy[id].period}</h2>
                                    <BrowserView><SvgItem weather={weatherArrayCopy[id].weather}/></BrowserView>
                                    <p className="current_temp">
                                        {String(weatherArrayCopy[id].temp_min).includes("-") ? weatherArrayCopy[id].temp_min : "+" + weatherArrayCopy[id].temp_min}
                                        ...
                                        {String(weatherArrayCopy[id].temp_max).includes("-") ? weatherArrayCopy[id].temp_max : "+" + weatherArrayCopy[id].temp_max}</p>
                                </div>
                                <div className="info_section">
                                    <h2 className="current_info_title">Влажность</h2>
                                    <p className="current_temp">{weatherArrayCopy[id].humidity}%</p>
                                </div>
                                <div className="info_section">
                                    <h2 className="current_info_title">Ветер</h2>
                                    <p className="current_temp">{weatherArrayCopy[id].wind_speed} м/с</p>
                                </div>
                                <div className="info_section">
                                    <h2 className="current_info_title">Ощущается</h2>
                                    <p className="current_temp">
                                        {String(weatherArrayCopy[id].feels_like).includes("-") ? weatherArrayCopy[id].feels_like : "+" + weatherArrayCopy[id].feels_like}
                                    </p>
                                </div>
                                <div className="button_section">
                                    <button className="round_button" onClick={() => handleClick(id)}>
                                        <ClothIcon/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default CurrentPlate;