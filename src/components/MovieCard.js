import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const movie = this.props.movie;
        return (
            <Col sm='12' md='6' lg='4' className="mb-3">
                <Card >
                    <Card.Img variant="top" src={movie.poster} />
                    <Card.Body>
                        <Card.Title>{movie.name}</Card.Title>
                        <Card.Text>
                            <Link to={`/movie/${movie.id}`}>Read More</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        )
    }
}
export default MovieCard