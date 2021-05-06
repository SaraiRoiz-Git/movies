import React from "react"
import { Card, Col } from "react-bootstrap"

class ActorCard extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const actor = this.props.actors

        return (
            <Col lg="4" md="6" sm="12">
                <Card >
                    <Card.Img variant="top" src={actor.image} />
                    <Card.Body>
                        <Card.Title>{actor.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default ActorCard