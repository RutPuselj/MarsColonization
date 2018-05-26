import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Mars.css';

import Building00 from '../assets/building00.svg';
import Building01 from '../assets/building01.svg';
import Building02 from '../assets/building02.svg';
import Building03 from '../assets/building03.svg';


class Mars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: '',
            level: ''
        }
    }

    logoutUser = () => {
        localStorage.setItem('username', '');
        this.props.history.push('/login');
    }

    countResource = () => {

    }

    upgrade = () => {

    }

    render() {
        return (
            <div className="mars_container">
                <div className="mars_header">
                    <button className="mars_logoutButton" type="button" value="Logout" onClick={this.logoutUser}>LOGOUT</button>
                    <div className="mars_resource">Resources: </div>
                </div>
                <div className="mars_building">
                    <img className="building_img" src={Building00} />
                </div>
                <div className="mars_upgrade">
                    <button className="mars_upgradeButton" type="button" value="Upgrade" onClick={this.upgrade}>UPGRADE</button>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Mars);