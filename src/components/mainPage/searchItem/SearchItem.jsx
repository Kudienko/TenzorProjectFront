import React, { useState } from 'react'
import './SearchItem.scss'
import { SearchBar } from './components/searchBar/SearchBar';
import { SearchResultList } from './components/searchResultsList/SearchResultList';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

function SearchItem({setCity}) {
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
            <div className="search_bar_container" onClick={handleClick}>
                <SearchBar setResults={setResults} input={input} setInput={setInput}/>
                {
                    open ? (<SearchResultList results={results} setCity={setCity} setInput={setInput} />) : null
                }

            </div>
        </ClickAwayListener>
    )
}

export default SearchItem