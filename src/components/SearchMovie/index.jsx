import React from 'react';
import PropTypes from 'prop-types';
import '../SearchMovie/SearchMovie.scss';

SearchMovie.propTypes = {
    onSubmit: PropTypes.func,
};

SearchMovie.defaulProps ={
    onSubmit: null,
};

function SearchMovie(props) {
    return (
        <form className="search-movie">
            <input 
                type="search" 
                name="movie"
                placeholder="Search movie..."
            />
        </form>
    );
}

export default SearchMovie;