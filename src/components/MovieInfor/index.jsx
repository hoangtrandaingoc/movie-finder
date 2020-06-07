import React, { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Container, Row, Col } from 'reactstrap';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import '../MovieInfor/MovieInfor.scss';
import IconPlay from '../../assets/images/play-btn.svg';
import axios from 'axios';



function MovieInfor(props) {
    const {movieInfor} = useContext(SearchContext);
    const [isOpen, setIsOpen] = useState(false);


    const [keyMovie, setKeyMovie] = useState('');
    const apiKey = "5dd50dcd383eb11b1fa40f4e563891b1";
    const urlId = `https://api.themoviedb.org/3/movie/${movieInfor.map(id=>id.id)}/videos?api_key=${apiKey}`;
    useEffect(() => {
        axios.get(urlId)
            .then(response => {
                const res = response.data;
                setKeyMovie(res.results[0].key)
            })
    }, []);

    function openModal(){
        setIsOpen(true);
    }
    
    return (
        <Container>
            {
                movieInfor.map(movie => (
                    <Row className="movie-infor" key={movie.id}>
                        <Col md="4" xs="12">
                            <img 
                                className="img-thumbnail"
                                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt=
                                "Card image cap"
                            />
                        </Col>
                        <Col md="8" xs="12">
                            <h1>{movie.original_title}</h1>
                            <p><span>Vote: </span> {movie.vote_average}/10</p>
                            <p><span>Release: </span> {movie.release_date}</p>
                            <h4>Overview</h4>
                            <p>{movie.overview}</p>
                            <div>
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId={keyMovie} onClose={()=>setIsOpen(false)} />
                                    <p className="btn-play" onClick={openModal}><img style={{width:50}} src={IconPlay} alt=""/> Play Trailer</p>
                            </div>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    );
}

export default MovieInfor;