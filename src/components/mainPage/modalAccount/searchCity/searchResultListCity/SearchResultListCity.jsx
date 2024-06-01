import React from 'react'
import './SearchResultListCity.scss'
import { SearchResultCity } from '../searchResultCity/SearchResultCity'


export const SearchResultListCity = ({ results, setSelectedCity}) => {
    return (
        <div className='resilts_list'>
            {
                results.map((result, id) => {
                    return <SearchResultCity result={result} key={id} setSelectedCity={setSelectedCity}/>
                })
            }
        </div>
    )
}