import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Tests from './pages/Tests';
import Examples from './pages/Examples';
import {MAIN_CONTAINER} from './styles/styles'
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
    <NavBar />
    <MAIN_CONTAINER>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/examples' component={Examples} />
      <Route exact path='/about' component={About} />
      <Route exact path='/tests' component={Tests} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </Switch>
    </MAIN_CONTAINER>
    </>
  );
}

export default App;
