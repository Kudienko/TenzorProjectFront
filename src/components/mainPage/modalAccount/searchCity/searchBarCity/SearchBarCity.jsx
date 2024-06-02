import React, { useEffect } from 'react'
import { ReactComponent as SearchLogo } from './icons/Search.svg'
import './SearchBarCity.scss'
import axios from "axios";

export const SearchBarCity = ({ setResults, input, setInput }) => {

    useEffect(() => {
        const myRe = new RegExp(/^[а-яА-Я]+$/);
        if (myRe.exec(input)) {
            const Debounce = setTimeout(() => {
                axios.get(`https://tensor-project-backend.onrender.com/api/cities/get_cities?city=${input}`)
                    .then((response) => {
                        setResults(response.data)
                    })
            }, 1000)
            return () => clearTimeout(Debounce)
        }
    }, [setResults, input])

    return (
        <div className='input_wrapper'>
            <SearchLogo id="search_icon" />
            <input type="text" placeholder='Введите название города' value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}
