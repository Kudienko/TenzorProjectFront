import React from 'react'
import './SearchResultCity.scss'

export const SearchResultCity = ({ result, setSelectedCity, handleCityChange}) => {


  const onClick = async (result) => {
    setSelectedCity(result.city_name)
    await handleCityChange(result.city_name, result.lat, result.lon)
  }

  return (
    <div className='search_result' onClick={() => onClick(result)}>{result.city_name}</div>
  )
}
