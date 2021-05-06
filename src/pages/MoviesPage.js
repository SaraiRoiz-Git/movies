
import React from 'react';
import Gallery from '../components/Gallery';
import MovieCard from '../components/MovieCard';
import SearchBox from '../components/SearchBox';
import MovieData from '../data/MovieData';

class MoviessPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            chosenMovies: [],
            resultTMDB: []
        }
    }

    searchTextChanged = (filter) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4b05d1f33354eefeaacd118430618d8f&query=${filter}`)
            .then((stream) => stream.json())
            .then((res) => {
                if (res && res.results) {
                    const results = res.results.map((movie) => {
                        return { name: movie.original_title, id: movie.id }
                    })
                    this.setState(
                        {
                            resultTMDB: results,
                            search: filter
                        }
                    )
                }
            })
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
                        director: '',
                        mainActors: [],
                        id: id
                    }
                    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4b05d1f33354eefeaacd118430618d8f`).then((stream) => stream.json())
                        .then((data) => {
                            chosenMovie.mainActors = data.cast[0].name + data.cast[1].name + data.cast[2].name;
                            chosenMovie.director = data.crew.find((obj) => obj.job === "Director").name

                            this.setState(
                                {
                                    chosenMovies: this.state.chosenMovies.concat(chosenMovie),
                                    search: '',
                                    resultTMDB: []
                                }
                            )

                        })


                }

            })
    }

    createCards() {
        const movies = this.state.chosenMovies
        const cards = movies.map(movie => {
            return <MovieCard movie={new MovieData(movie.name,
                movie.time,
                movie.poster,
                movie.director,
                movie.mainStars
            )} />
        })
        return cards;
    }


    render() {
        return (
            <div>
                <SearchBox
                    search={this.state.search}
                    placeHolder={'Choose a movie'}
                    result={this.state.resultTMDB}
                    onSearchChanged={this.searchTextChanged}
                    onResultSelected={this.addMovie}
                />

                <Gallery movies={this.createCards()} />
            </div>
        )



    }
}
export default MoviessPage

