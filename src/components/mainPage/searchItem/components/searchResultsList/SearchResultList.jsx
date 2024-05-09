import React from 'react'
import './SearchResultList.scss'
import { SearchResult } from '../searchResult/SearchResult'

export const SearchResultList = ({ results }) => {
    console.log(results)
    console.log(results[0]);
    return (
        <div className='resilts_list'>
            {
                results.map((result, id) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    )
}
