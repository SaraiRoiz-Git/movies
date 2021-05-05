import React from 'react';
import { Card, Col } from 'react-bootstrap';

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const movie = this.props.movie;
        return (
            <Col sm='12' md='6' lg='3' className="mb-3">
                <Card >
                    <Card.Img variant="top" src={movie.poster} />
                    <Card.Body>
                        <Card.Title>{movie.name}</Card.Title>
                        <Card.Text>
                            <b>Dirctor:</b>  {movie.director} <br />
                            <b> Movie time:</b> {movie.length}(min)
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        )
    }
}
export default MovieCard