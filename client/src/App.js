import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/Login.js';
import Mars from './pages/Mars.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: '',
      level: '',
      username: 'asdf'
    };
  }

  refreshData = (username, resources, level) => {
    console.log(level);
    this.setState({
      resources: resources,
      level: level,
      username: username
    });
    setInterval(
      () => this.setState({ resources: this.state.resources + 1 }),
      1000
    );
  };

  upgrade = async () => {
    try {
      console.log(this.state.username);
      let data = await axios.post('/build', {
        username: this.state.username
      });
      this.setState({
        level: this.state.level + 1,
        resources: data.data.resources
      });
    } catch (err){
		console.log(err.response.data.message)
		alert(err.response);
	}
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login handleLogin={this.refreshData} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login handleLogin={this.refreshData} />}
          />
          <Route exact path="/logout" render={() => <Login />} />
          <Route
            exact
            path="/mars"
            render={() => (
              <Mars
                resources={this.state.resources}
                level={this.state.level}
                handleUpgrade={this.upgrade}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
