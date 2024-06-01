import React, { useState } from 'react'
import './SearchCity.scss'
import { SearchResultListCity } from './searchResultListCity/SearchResultListCity';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {SearchBarCity} from "./searchBarCity/SearchBarCity";

function SearchItem({setSelectedCity, selectedCity, handleCityChange}) {
    const [results, setResults] = useState([])
    const [open, setOpen] = React.useState(false);

    const handleClickAway = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="search_bar_container" onClick={handleClick} value={selectedCity}>
                <SearchBarCity setResults={setResults} input={selectedCity} setInput={setSelectedCity}/>
                {
                    open ? (<SearchResultListCity results={results} setSelectedCity={setSelectedCity} handleCityChange={handleCityChange}/>) : null
                }
            </div>
        </ClickAwayListener>
    )
}

export default SearchItem