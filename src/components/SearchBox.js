import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';

class SearchBox extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const result = this.props.result
        const moviesList = result.map((movie) => {
            return (
                <ListGroup.Item
                    action key={movie.id}
                    onClick={() => { this.props.onResultSelected(movie.id) }}
                >{movie.name}</ListGroup.Item>
            )
        })

        return (

            <Form.Group>
                <Form.Control
                    type="text"
                    value={this.props.search}
                    placeholder={this.props.placeHolder}
                    onChange={(e) => { this.props.onSearchChanged(e.target.value) }} />
                <ListGroup>
                    {moviesList}
                </ListGroup>
            </Form.Group>
        )
    }
}
export default SearchBox