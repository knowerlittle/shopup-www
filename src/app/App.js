import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import './App.css'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Footer from '..//components/Footer'
const App = () => (
<div id='app'>
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
		</Switch>
	</Router>
	<Footer/>
</div>
)

export default App
