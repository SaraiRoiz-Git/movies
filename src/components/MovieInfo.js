import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';

class MovieInfo extends React.Component {
    constructor(props) {
        super(props)
        this.props = props

    }

    render() {
        const movieId = this.props.match.params.id
        const movie = this.props.movie;
        return (
            // <div classname="movie-page">
            //     <img src={movie.poster} alt={movie.name} />
            //     <div className="detailes">
            //         <div className="title">
            //             <h4>{movie.name}</h4>
            //             <div>
            //                 <div>{movie.length}min</div>
            //                 <div>{movie.genres}</div>
            //                 <div>{movie.language}</div>
            //             </div>
            //         </div>
            //         <div>
            //             <div>{movie.rate}</div>
            //         <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fgolden-star-on-transparent-background-vector-16307720&psig=AOvVaw3Kdie11L9nTadXGx2alKYh&ust=1620496240411000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCT4I2RuPACFQAAAAAdAAAAABAD" alt="star" />
            //         </div>
            //     </div>
            // </div>

            <div>{movieId}</div>

        )
    }
}
export default withRouter(MovieInfo)