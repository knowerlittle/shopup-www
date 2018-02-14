import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const App = () => (
  <div id="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  </div>
);

export default App;