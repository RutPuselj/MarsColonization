import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './Login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    saveUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    loginUser = async () => {
        await axios.post('/login', {
            username: this.state.username
        }).then(() => this.props.router.push('/build'));;
    }

    render() {
        return(
            <div className="login_container">
                <div className="login_input">
                    <input type="text" placeholder="Enter your username" onChange={this.saveUsername} />
                    <button type="button" value="Login" onClick={this.loginUser}>LOGIN</button>
                </div>
            </div>
        );
    }
}