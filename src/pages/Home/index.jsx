import React, { useEffect, useState, useContext }  from 'react';
import axios from 'axios';
import Movie from '../../components/Movie';
import { SearchContext } from '../../contexts/SearchContext';
import Pagination from '../../components/Pagination';

function Home(props) {
    const {searchMovie, paginationSearch, handeChangePageSearch} = useContext(SearchContext);  

    const [movies, setMovies] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        totalPages:1,
        id:1
    })
    const [filters, setFilters] = useState({
        page: 1,
        totalPages:1
    })

    const apiKey = "5dd50dcd383eb11b1fa40f4e563891b1";
    const url = `https://api.themoviedb.org/4/list/1?api_key=${apiKey}&page=${filters.page}`;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const res = response.data
                setMovies(res.results);
                setPagination({
                    page: res.page,
                    totalPages: res.total_pages,
                })
            })
    }, [filters]);

    function handleChangePageShow(newPage){
        setFilters({
        ...filters,
        page: newPage,
        });
    }

    return (
        <div className="home">
            {searchMovie.length ? <Movie movies={searchMovie}/> : <Movie movies={movies}/> }
            {searchMovie.length 
            ? <Pagination onPageChange={handeChangePageSearch} pagination={paginationSearch}/>
            : <Pagination onPageChange={handleChangePageShow} pagination={pagination}/>
            }
        </div>
    );
}

export default Home;