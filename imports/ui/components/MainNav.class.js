import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class MainNav extends Component {
  render() {
    return(
    <div className="mainNavContainer">
      <div className="mainNav">
        <div className="navLeft">
          <NavLink to="/"><img src="/media/bidblox.png"/></NavLink>
        </div>
        <div className="navRight">
          <div className="accountInfoLoggedIn">
            <div className="notificationsContainer">
              <i className="ion ion-ios-bell"/>
              <span>14</span>
            </div>
            <img src="https://randomuser.me/api/portraits/men/22.jpg"/>
            <div className="navProfileInfoContainer">
              <div className="userNameNavContainer">
                <h4>Jay305</h4>
                <i className="ion ion-chevron-down"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(MainNav)
