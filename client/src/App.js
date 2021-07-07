import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
// import Register from './pages/Register';
import Login from './pages/Login';
import AboutPages from './pages/AboutPages';
import FetchUser from './components/FetchUser';
import CustomCakes from './pages/CustomCakes';
import Menu from './pages/Menu';
import LandingPage from './pages/LandingPage';
import Editor1 from './pages/Editor1';

function App() {
  return (
    <>
    <FetchUser>
    <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/about_pages' component={AboutPages} />
          <Route exact path='/editor1' component={Editor1} />
          <Route exact path='/custom_cakes' component={CustomCakes} />
          <Route exact path='/menu' component={Menu} />
          {/* <Route exact path='/register' component={Register} /> */}
          <Route exact path='/admin' component={Login} />
        </Switch>
      </Container>
    </FetchUser>
    </>
  );
}

export default App;
