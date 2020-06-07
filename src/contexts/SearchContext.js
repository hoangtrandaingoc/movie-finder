import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const SearchContext = React.createContext();

export function SearchProvider(props){
    const [movieInfor, setMovieInfor] = useState([]);

    const [searchMovie, setSearchMovie] = useState([]);
    const [valueSearch, setValueSearch] = useState("");

    const [paginationSearch, setPagination] = useState({
        page: 1,
        totalPages:1
      })
      const [filters, setFilters] = useState({
        page: 1,
        totalPages:1
      })

    function handleSearchMovie(e){
        let value = e.target.value;
        setValueSearch(value);
    }
    
    const apiKey = "5dd50dcd383eb11b1fa40f4e563891b1";
    const url = `https://api.themoviedb.org/4/search/movie?api_key=${apiKey}&query=${valueSearch}&page=${filters.page}`;

    // function fetchAPI(){
    //     axios.get(url)
    //         .then(response => {
    //         const res = response.data;
    //         setSearchMovie(res.results);
    //         setPagination({
    //             page: res.page,
    //             totalPages: res.total_pages
    //         })
    //     })
    // }

    async function fetchAPI(){
        let res = await axios.get(url);
        setSearchMovie(res.data.results);
        setPagination({
            page: res.data.page,
            totalPages: res.data.total_pages
        })
    }


    function handleSubmit(event){
        if (event.keyCode === 13){
            fetchAPI();
        }
    }


   function handeChangePageSearch(newPage){
        // setPagination(paginationSearch);
        setFilters({
            ...filters,
                page:newPage
        })
        fetchAPI();
        console.log("set page", paginationSearch);

   }

 return (
    <SearchContext.Provider 
        value={{searchMovie, 
                handleSearchMovie, 
                handleSubmit, 
                paginationSearch, 
                handeChangePageSearch, 
                movieInfor,
                setMovieInfor
        }}>
        {props.children}
    </SearchContext.Provider>
 );
}