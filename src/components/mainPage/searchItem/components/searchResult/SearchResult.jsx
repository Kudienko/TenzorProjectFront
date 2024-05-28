import React from 'react'
import './SearchResult.scss'

export const SearchResult = ({ result, setCity, setInput, handleCityChange  }) => {


  const onClick = async (result) => {
    setInput("")
    setCity(result.city_name)
    await handleCityChange(result.city_name, result.lat, result.lon);
  }

  return (
    <div className='search_result' onClick={() => onClick(result)}>{result.region_type}. {result.region_name}, {result.city_name}</div>
  )
}
