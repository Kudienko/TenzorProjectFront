import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchLogo } from './icons/Search.svg'
import './SearchBar.scss'
import axios from "axios";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    useEffect(() => {
        const myRe = new RegExp(/^[а-яА-Я]+$/);
        if (myRe.exec(input)) {
            const Debounce = setTimeout(() => {
                axios.get(`http://127.0.0.1:8000/api/get_city?city_query=${input}`)
                    .then((response) => {
                        console.log(response.data);
                        setResults(response.data)
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }, 1000)
            return () => clearTimeout(Debounce)
        }
    }, [setResults, input])

    return (
        <div className='input_wrapper'>
            <SearchLogo id="search_icon"/>
            <input type="text" placeholder='Type to search' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
