import React from 'react';
import ActorCard from '../components/ActorCard ';
import Gallery from '../components/Gallery';
import SearchBox from '../components/SearchBox';
import ActorsData from '../data/ActorsData';

class ActorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            chosenActors: [],
            resultTMDB: [],

        }
    }
    searchTextChanged = (filter) => {
        fetch(`https://api.themoviedb.org/3/search/person?api_key=4b05d1f33354eefeaacd118430618d8f&query=${filter}`)
            .then((stream) => stream.json())
            .then((res) => {
                if (res && res.results) {

                    const newResults = res.results.map((person) => {
                        return { name: person.name, id: person.id, image: `https://www.themoviedb.org/t/p/w500${person.profile_path}` }
                    })
                    this.setState({
                        resultTMDB: newResults,
                        search: filter,
                    })
                }
            })
    }

    addActor = (id) => {
        console.log(id)
        const actor = this.state.resultTMDB.find(obj => obj.id === id)
        const actors = this.state.chosenActors.concat(actor);
        console.log(actor)
        this.setState({
            chosenActors: actors,
            resultTMDB: [],
        })

    }

    createCards() {
        console.log(this.state.chosenActors)
        const actors = this.state.chosenActors
        const actorsList = actors.map((curr) => new ActorsData(curr.name, curr.image, curr.id))
        const cards = actorsList.map((curr) => <ActorCard actors={curr} key={curr.id} />)
        return cards;
    }
    render() {
        return (
            <div className="p-actors-page">
                <SearchBox
                    resultTMDB={this.state.resultTMDB}
                    placeHolder={'Choose an Actor'}
                    result={this.state.resultTMDB}
                    onSearchChanged={this.searchTextChanged}
                    onResultSelected={this.addActor}

                />
                <Gallery movies={this.createCards()} />
            </div>)
    }
}

export default ActorsPage