import React from 'react'

const Search = ({handleSetSearchText, handleFilterSearch}) => {
    return (
        <div>
            <input onChange={(e) => handleSetSearchText(e.target.value)}/>
            <button onClick={handleFilterSearch}>Search</button>
        </div>
    )
}

export default Search;
