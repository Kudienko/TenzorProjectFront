import React, {Fragment, useEffect, useState} from "react";
import "./NextPlate.scss";
import SvgItem from "../svgItem/SvgItem";
import {useTransitionCarousel} from "react-spring-carousel";
import {BrowserView, isMobile, MobileView} from "react-device-detect";
import arrow from '../../../assets/arrow.png'

function NextPlate({data, onDateClick, selectedDate}) {

    const [animationKey, setAnimationKey] = useState(0); // State для ключа анимации
    // Обновление ключа анимации при изменении props data
    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, [data]);

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

    const {
        carouselFragment,
    } = useTransitionCarousel({
        items: data.map((item, index) => ({
            id: item,
            renderItem: (
                <div
                    key={item.date}
                    className={`next_info ${selectedDate === item.date ? 'highlight' : ''}`}
                    onClick={() => onDateClick(item.date, item.weather)}
                    style={{animationDelay: `${index * 0.2}s`}} // Задержка для каждого блока
                >
                    <div className="arrow-left">
                            <img src={arrow} alt="arrow" className="arrow-icon"/>
                    </div>
                    <SvgItem weather={item.weather}/>
                    <div className="info_text">
                        <h2 className="next_info_date">
                            {formatDate(item.date)}
                        </h2>
                        <p className="next_temp">
                            {String(item.temp_min).includes("-") ? item.temp_min : "+" + item.temp_min}
                        </p>
                    </div>
                    <div className="arrow-right">
                        <img src={arrow} alt="arrow" className="arrow-icon"/>
                    </div>
                </div>
            ),
        })),
    });
    return (
        <div className="next_days_wrapper" key={animationKey}>
            <BrowserView>
                {data.map((item, index) => (
                    <div
                        key={item.date}
                        className={`next_info ${selectedDate === item.date ? 'highlight' : ''}`}
                        onClick={() => onDateClick(item.date, item.weather)}
                        style={{animationDelay: `${index * 0.5}s`}} // Задержка для каждого блока
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
            </BrowserView>
            {isMobile && carouselFragment}
        </div>
    );
}

export default NextPlate;