import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
// The installing part where I can use different sites to make my app display better 

import Home from './components/Home'
import MP3 from './components/MP3'
import Reading from './components/Reading'
import Favorite from './components/Favorite'
// This focuses on and imports the different jsx files that are implamented to show its info

// This is a class where the nav and its routing appears
class App extends React.Component {
    render() {
        return (
            <Router >
        <Home/>
        <div className="back-ground">
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/MP3'}>Search M MP3</Link>
              </li>
              <li>
                <Link to={'/Reading'}>Search Reading</Link>
              </li>
              <li>
                <Link to={'/Favorite'}>Favorites</Link>
              </li>
            </ul>
          </nav>
          <Switch>
        {/*This routing works as pages , so its clickable in a nav bar where it takes or directs you to that specific page*/}
          <Route path='/Home' component={Home}/>
            <Route path='/MP3' component={MP3}/>
            <Route path='/Reading' component={Reading}/>
            <Route path='/Favorite' component={Favorite}/>
          </Switch>
          <Button/>
        </div>
      </Router>
        );
    }
}

export default App;