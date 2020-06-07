import React, { useState, useRef, useContext } from 'react';
import '../SearchMovie/SearchMovie.scss';
import { SearchContext } from '../../contexts/SearchContext';



function SearchMovie() {
    const {handleSearchMovie, handleSubmit} = useContext(SearchContext);

    return (
        <div className="search-movie">
            <input 
                type="search" 
                name="movie"
                placeholder="Search movie..."
                onChange={handleSearchMovie}
                onKeyUp={handleSubmit}
            />
        </div>
    );
}

export default SearchMovie;