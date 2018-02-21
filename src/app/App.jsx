import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MissionPage from 'pages/Mission';
import Home from 'pages/Home';
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';
import 'app/App.css';

const App = () => (
  <div id="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/mission" component={MissionPage} />
      </Switch>
    </Router>
  </div>
);

export default App;
