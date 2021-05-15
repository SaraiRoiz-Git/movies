import React from 'react';
import { withRouter } from 'react-router';
import MovieData from '../data/MovieData';

class MovieInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    addMovie = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4b05d1f33354eefeaacd118430618d8f`)
            .then((stream) => stream.json())
            .then((data) => {
                if (data) {
                    const chosenMovie = {
                        name: data.original_title,
                        time: data.runtime,
                        poster: `https://www.themoviedb.org/t/p/w500${data.poster_path}`,
                        id: id,
                        rate: data.vote_average,
                        overview: data.overview,
                        genres: data.genres[0].name,
                        language: data.original_language
                    }

                    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4b05d1f33354eefeaacd118430618d8f`).then((stream) => stream.json())
                        .then((data) => {
                            if (data) {
                                chosenMovie.mainActors = data.cast.map(movie => movie.name);
                                chosenMovie.director = data.crew.find((obj) => obj.job === "Director").name
                                const movieClass = new MovieData(
                                    chosenMovie.name,
                                    chosenMovie.poster,
                                    chosenMovie.time,
                                    chosenMovie.director,
                                    chosenMovie.mainActors,
                                    chosenMovie.rate,
                                    chosenMovie.overview,
                                    chosenMovie.genres,
                                    chosenMovie.language,
                                    chosenMovie.id
                                )
                                this.setState(
                                    {
                                        chosenMovie: movieClass,

                                    }
                                )
                            }

                        })


                }

            })
    }



    componentDidMount() {
        this.addMovie(this.props.match.params.id)
    }
    render() {


        const movie = this.state.chosenMovie
        console.log('movie')
        console.log(this.state.chosenMovie)
        if (movie) {
            return (
                <div className="movie-page">
                    <img src={movie.poster} alt={movie.name} />
                    <div className="detailes">
                        <div className="title">
                            <h4>{movie.name}</h4>
                            <div>
                                <div>{movie.length}min</div>
                                <div>{movie.genres}</div>
                                <div>{movie.language}</div>
                                <div>{movie.overview}</div>
                            </div>
                        </div>
                        <div>
                            <div>{movie.rate}</div>
                            <img src="https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg" alt="star" />
                        </div>
                    </div>

                </div>
            )

        }
        else {
            return <div></div>
        }

    }
}
export default withRouter(MovieInfo)