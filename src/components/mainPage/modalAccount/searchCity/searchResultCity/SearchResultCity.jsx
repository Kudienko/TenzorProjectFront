import React from 'react'
import './SearchResultCity.scss'

export const SearchResultCity = ({ result, setSelectedCity}) => {


  const onClick = async (result) => {
    setSelectedCity(result.city_name)
  }

  return (
    <div className='search_result' onClick={() => onClick(result)}>{result.city_name}</div>
  )
}
