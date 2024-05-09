import React from 'react'
import './SearchResult.scss'

export const SearchResult = ({result}) => {
  return (
    <div className='search_result' onClick={(e) => alert(`You cliked on ${result.city_name}`)}>{result.region_type}. {result.region_name}, {result.city_name}</div>
  )
}
