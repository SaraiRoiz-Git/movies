
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
                        return {
                            name: movie.original_title,
                            id: movie.id,
                            poster: `https://www.themoviedb.org/t/p/w500${movie.poster_path}`
                        }
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
        this.setState({
            chosenMovies: this.state.chosenMovies.concat(this.state.resultTMDB.find((movie) => movie.id === id)),
            search: "",
            resultTMDB: []
        })

    }

    createCards = () => {
        const movies = this.state.chosenMovies
        const cards = movies.map(movie => {return <MovieCard movie={movie} />
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

                <Gallery
                    movies={this.createCards()} />
            </div>
        )



    }
}
export default MoviessPage

