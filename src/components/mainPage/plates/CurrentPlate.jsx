import React from "react";
import "./CurrentPlate.scss";
import SvgItem from "../svgItem/SvgItem";
import {ReactComponent as ClothIcon} from '../../../assets/btn.svg';

function CurrentPlate({setmodalInfoIsOpen, data, setClothes}) {
    if (!data) {
        return <div className="current_day_wrapper_no_data">
            <div className="no_data_text">Нет данных</div>
        </div>;
    }

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
                body: [...prevState.female.body, ...female.body],
                feet: [...prevState.female.feet, ...female.feet],
                head: [...prevState.female.head, ...female.head],
                legs: [...prevState.female.legs, ...female.legs],
            },
            male: {
                ...prevState.male,
                body: [...prevState.male.body, ...male.body],
                feet: [...prevState.male.feet, ...male.feet],
                head: [...prevState.male.head, ...male.head],
                legs: [...prevState.male.legs, ...male.legs],
            },
        }));
        setmodalInfoIsOpen(true);
    }


    return (
        <div className="current_day_wrapper">
            {
                weatherArrayCopy && Object.keys(weatherArrayCopy).map((id) => (
                    <div className="current_info" key={id}>
                        <div className="info_titles">
                            <div className="info_section">
                                <h2 className="current_info_title">{weatherArrayCopy[id].period}</h2>
                                <SvgItem weather={weatherArrayCopy[id].weather}/>
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
                                    <ClothIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CurrentPlate;