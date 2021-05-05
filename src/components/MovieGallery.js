
import React from 'react';
import { Row } from 'react-bootstrap';
import MovieData from '../data/MovieData';
import MovieCard from './MovieCard';
import SearchBox from './SearchBox';

class MovieGallery extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const movies = this.props.movies
        console.log(movies)
        const cards = movies.map(movie => {
            return <MovieCard movie={new MovieData(movie.name,
                movie.time,
                movie.poster,
                movie.director,
                movie.mainStars
            )} />
        })

        return (
            <Row>
                {cards}
            </Row>
        )



    }
}
export default MovieGallery