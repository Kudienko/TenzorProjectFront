import React from 'react'
import './SearchResult.scss'
import { useDispatch } from "react-redux";
import { getWeatherThunk } from "../../../../../store/thunks/getWeatherThunk/getWeatherThunk";

export const SearchResult = ({ result, setCity, setInput }) => {

  const dispatch = useDispatch();

  const onClick = (result) => {
    setInput("")
    setCity(result.city_name)
    const weatherData = {
      lat: result.lat,
      lon: result.lon,
    };
    dispatch(getWeatherThunk(weatherData));
  }

  return (
    <div className='search_result' onClick={() => onClick(result)}>{result.region_type}. {result.region_name}, {result.city_name}</div>
  )
}
