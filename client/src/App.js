import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Tests from './pages/Tests';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/tests' component={Tests} />
    </Switch>
    </>
  );
}

export default App;
