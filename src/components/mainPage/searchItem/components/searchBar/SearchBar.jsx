import React, { useState } from 'react'
import {ReactComponent as SearchLogo} from './icons/Search.svg'
import './SearchBar.scss'

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch(`http://127.0.0.1:8000/api/get_city?city=${value}`)
        .then((response) => response.json())
        .then((json) => {
            if (json.cod !== '400') {
                const result = json.filter((data) => {
                    return data && data.name && data.lat && data.lon 
                })
                setResults(result)
            }
        })
        
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div className='input_wrapper'>
            <SearchLogo id="search_icon"/>
            <input type="text" placeholder='Type to search' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
