import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MissionPage from 'pages/Mission';
import Home from 'pages/Home';
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';
import Onboard from 'pages/Onboard';
import BrandProfile from 'pages/BrandProfile';
import 'app/App.css';

const App = () => (
  <div id="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/onboard/:journey/:step" component={Onboard} />
        <Route path="/mission" component={MissionPage} />
        <Route path="/profile/brand" component={BrandProfile} />
      </Switch>
    </Router>
  </div>
);

export default App;
