import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'one', 'two', 'three'
];
const defaultOption = options[0];

const Search = ({handleSetSearchText, handleFilterSearch, searchSlots, handleFilterBy}) => {
    console.log('searchSlotssearchSlotssearchSlots', searchSlots);
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 50}}>
                <input onChange={(e) => handleSetSearchText(e.target.value)} style={{width: '50%', height: 35}}/>
                <button style={{width: '9%'}} onClick={handleFilterSearch}>Search</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 10}}>
                <h3><b><u>Filter By</u></b></h3>
            </div>
            <div style={{display: 'flex', paddingTop: 10, justifyContent: 'center'}}>
                <div style={{display: 'flex'}}>
                    <div style={{marginLeft: 20, justifyContent: 'center'}}>
                        <p style={{textAlign: 'center'}}>name</p>
                        <input checked={searchSlots.searchByName} type="checkbox" />
                    </div>
                    <div style={{marginLeft: 20}}>
                        <p style={{textAlign: 'center'}}>description</p>
                        <input checked={searchSlots.searchByDescription} type="checkbox" onClick={() => handleFilterBy('searchByDescription')} />
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 10}}>
                <h3><b><u>Sort By</u></b></h3>
            </div>
            <div style={{display: 'flex', paddingTop: 10, justifyContent: 'center'}}>
                <div style={{display: 'flex'}}>
                    <div style={{marginLeft: 20}}>
                        <p style={{textAlign: 'center'}}>duration</p>
                        <input type="checkbox" />
                    </div>
                    <div style={{marginLeft: 20}}>
                        <p style={{textAlign: 'center'}}>imdb rating</p>
                        <input type="checkbox" />
                    </div>
                    <div style={{marginLeft: 20}}>
                        <p style={{textAlign: 'center'}}>pg rating</p>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
