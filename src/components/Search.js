import React from 'react';
import 'react-dropdown/style.css';

const options = [
    'one', 'two', 'three'
];
const defaultOption = options[0];

const Search = ({handleSetSearchText, handleFilterSearch, searchSlots, handleFilterBy, handleOrderBy, orderSlots}) => (
    <div>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 50}}>
            <input class="input" placeholder="Enter search text" type="text" onChange={(e) => handleSetSearchText(e.target.value)} />
            <span class="underline"></span>
            <a href="#" class="btn btn-white btn-animate" onClick={handleFilterSearch}>Search</a>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 10}}>
            <h3><b><u>Filter By</u></b></h3>
        </div>
        <div style={{display: 'flex', paddingTop: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex'}}>
                <div style={{marginLeft: 20, justifyContent: 'center', display: "flex"}}>
                    <p style={{textAlign: 'center', paddingRight: 10}}>name</p>
                    <input checked={searchSlots.searchByName} type="checkbox" />
                </div>
                <div style={{marginLeft: 20, justifyContent: 'center', display: "flex"}}>
                    <p style={{textAlign: 'center', paddingRight: 10}}>description</p>
                    <input checked={searchSlots.searchByDescription} type="checkbox" onClick={() => handleFilterBy('searchByDescription')} />
                </div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 10}}>
            <h3><b><u>Sort By</u></b></h3>
        </div>
        <div style={{display: 'flex', paddingTop: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex'}}>
                <div style={{marginLeft: 20, display: "flex"}}>
                    <p style={{textAlign: 'center', paddingRight: 10}}>duration</p>
                    <input type="radio" checked={orderSlots.orderByDuration} style={{marginTop: 3}} name="radioSort" onChange={() => handleOrderBy('orderByDuration')}/>
                </div>
                <div style={{marginLeft: 20, display: "flex"}}>
                    <p style={{textAlign: 'center', paddingRight: 10}}>imdb rating</p>
                    <input type="radio" checked={orderSlots.orderByImdbRating}  style={{marginTop: 3}} name="radioSort" onChange={() => handleOrderBy('orderByImdbRating')}/>
                </div>
                <div style={{marginLeft: 20, display: "flex"}}>
                    <p style={{textAlign: 'center', paddingRight: 10}}>pg rating</p>
                    <input type="radio" checked={orderSlots.orderByPgRating} style={{marginTop: 3}} name="radioSort" onChange={() => handleOrderBy('orderByPgRating')}/>
                </div>
            </div>
        </div>
    </div>
);

export default Search;
