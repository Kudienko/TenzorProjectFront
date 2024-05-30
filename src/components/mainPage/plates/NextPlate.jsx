import React from "react";
import "./NextPlate.scss";
import SvgItem from "../svgItem/SvgItem";

function NextPlate({ data, onDateClick, selectedDate }) {

    function formatDate(dateString) {
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];

        // Разбираем строку и создаем объект Date
        const dateParts = dateString.split("-");
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Месяцы в объекте Date начинаются с 0
        const day = parseInt(dateParts[2], 10);

        const date = new Date(year, month, day);

        // Получаем день и месяц
        const dayOfMonth = date.getDate();
        const monthName = months[date.getMonth()];

        // Форматируем строку
        return `${dayOfMonth} ${monthName}`;
    }

    // console.log(weather, "weather data");

    return (
        <div className="next_days_wrapper">
            {data.map((item, index) => (
                <div
                    key={item.date}
                    className={`next_info ${selectedDate === item.date ? 'highlight' : ''}`}
                    onClick={() => onDateClick(item.date, item.weather)}
                    style={{ animationDelay: `${index * 0.1}s` }} // Задержка для каждого блока
                >
                    <SvgItem weather={item.weather}/>
                    <div className="info_text">
                        <h2 className="next_info_date">
                            {formatDate(item.date)}
                        </h2>
                        <p className="next_temp">
                            {String(item.temp_min).includes("-") ? item.temp_min : "+" + item.temp_min}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NextPlate;