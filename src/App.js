import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ActorsPage from './pages/ActorsPage';
import MoviessPage from './pages/MoviesPage';

function App() {
  return (
    <div>
      <AppNavbar />
      {/* <Container>
        <MoviessPage />
      </Container> */}
      <Container>
        <ActorsPage />
      </Container>
    </div>

  );
}

export default App;
