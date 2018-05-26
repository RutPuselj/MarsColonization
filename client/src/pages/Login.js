import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,withRouter } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  saveUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  loginUser = () => {
    axios
      .post('/login', {
        username: this.state.username
      })
      .then(() => {
          this.props.history.push('/mars');
      });
  };

  render() {
    return (
      <div className="login_container">
        <div className="login_input">
          <input
            type="text"
            placeholder="Enter your username"
            onChange={this.saveUsername}
          />
          <button type="button" value="Login" onClick={this.loginUser}>
            LOGIN
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login)
