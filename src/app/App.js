import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const App = () => (
	<Router>
		<div>
			 <Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/login" component={Login}/>
				<Route path="/signup" component={Signup}/>
			 </Switch>
		</div>
  </Router>
)

export default App
