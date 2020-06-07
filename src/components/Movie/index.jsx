import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../Movie/Movie.scss';
import {Card, CardImg,CardBody, Button, Container, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

Movie.propTypes = {
    movies: PropTypes.array,
};

Movie.defaultProps = {
    movies: [],
}

function Movie(props) {
    const {movieInfor, setMovieInfor} = useContext(SearchContext);
    const {movies} = props;
    return (
        <Container className="movie">
            <Row md="4" sm="3" xs="2">
                {
                    movies.map(movie => (
                        <Col className="col-movie">
                            <Card key={movie.id}>
                                { movie.poster_path == null
                                    ? <CardImg top width="100%" src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="Card image cap" /> 
                                    : <CardImg top width="100%" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image cap" />}
                                <CardBody>
                                <Link to="/movie-infor">
                                    <Button 
                                        onClick={()=>setMovieInfor(movieInfor.concat(movie)) }
                                        color="success"
                                    >
                                        View Details
                                    </Button>
                                </Link>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Movie;