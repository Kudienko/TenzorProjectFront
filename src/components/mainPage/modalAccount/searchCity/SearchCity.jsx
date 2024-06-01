import React, { useState } from 'react'
import './SearchCity.scss'
import { SearchResultListCity } from './searchResultListCity/SearchResultListCity';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {SearchBarCity} from "./searchBarCity/SearchBarCity";

function SearchItem({setSelectedCity, selectedCity}) {
    const [results, setResults] = useState([])
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = useState("")

    const handleClickAway = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="search_bar_container" onClick={handleClick} value={selectedCity}>
                <SearchBarCity setResults={setResults} input={input} setInput={setInput}/>
                {
                    open ? (<SearchResultListCity results={results} setSelectedCity={setSelectedCity}/>) : null
                }
            </div>
        </ClickAwayListener>
    )
}

export default SearchItem