import React from 'react';
import MovieCard from '../components/MovieCard';
import MovieData from '../data/MovieData';

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <MovieCard movie={new MovieData('American History','1h 59m','https://www.themoviedb.org/t/p/w1280/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg','Tony Kaye')}/>
        )
    }
}
export default Test