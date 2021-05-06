
import React from 'react';
import { Row } from 'react-bootstrap';

class Gallery extends React.Component {

    render() {
        const cards = this.props.movies
        return (
            <Row>
                {cards}
            </Row>
        )



    }
}
export default Gallery