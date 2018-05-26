import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/Login.js';
import Mars from './pages/Mars.js';

export default class App extends Component {

	render() {
		return (
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={() => <Login  />} />
						<Route exact path="/login" component={() => <Login  />} />
						<Route exact path="/logout" component={() => <Login />} />
						<Route exact path="/mars" component={() => <Mars  />} />
					</Switch>
			</BrowserRouter>
		);
	}
}