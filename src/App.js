import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';

import ActorsPage from './pages/ActorsPage';
import MoviessPage from './pages/MoviesPage';
import { HashRouter, Route } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HashRouter>
          <AppNavbar />
          <Container>
            <Route exact path="/"></Route>
            <Route exact path="/Movies">
              <MoviessPage />
            </Route>
            <Route exact path="/Actors">
              <ActorsPage />
            </Route>
            <Route exact path="/movie/:id">
              <MovieInfo />
            </Route>
          </Container>
        </HashRouter>

      </div>

    );
  }

}

export default App;
