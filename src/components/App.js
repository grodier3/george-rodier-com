import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">georgerodier.com</div>
          <div className="App-links">
            <Link exact to="/" className="App-link">Perfect Four</Link>
            <Link exact to="/about" className="App-link">About</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
