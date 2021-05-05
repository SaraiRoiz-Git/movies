import React from 'react';
import { Card } from 'react-bootstrap';

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const movie = this.props.movie;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                    <Card.Text>
                        <b>Dirctor:</b>  {movie.director} <br />
                        <b> Movie length:</b> {movie.length}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default MovieCard