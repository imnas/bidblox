import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside'
import { connect } from 'react-redux';

class ProfileDrop extends Component {
  render() {
    return(
      <div className={this.props.profileIsDropped ? "profileDrop menuSlideFadeDown" : "hiddenMenu profileDrop"}>
        <ul>
          <NavLink activeClassName="active" to="/profile">
            <h4>Account</h4>
            <p>View and edit profile</p>
          </NavLink>
          <a>
            <h4>Balance</h4>
            <p>Purchase BIDS</p>
          </a>
        </ul>
      </div>
    )
  }
}

var ProfileDropOutside = onClickOutside(ProfileDrop);

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.toggleMenuDrop = this.toggleMenuDrop.bind(this);
    this.state = {profileIsDropped: false};
  }

  toggleMenuDrop() {
    this.setState({
      profileIsDropped: !this.state.profileIsDropped
    })
    // console.log(this.state.profileIsDropped)
  }

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
            <div className="navProfileInfoContainer" onClick={this.toggleMenuDrop}>
              <img src="https://randomuser.me/api/portraits/men/22.jpg"/>
              <div className="userNameNavContainer">
                <h4>Jay305</h4>
                <i className="ion ion-arrow-down-b"/>
              </div>
              <ProfileDropOutside {...this.state} handleClickOutside={() => this.setState({profileIsDropped:false})}/>
            </div>
            <div className="accountBalanceContainer">
              <span className="accBal">84,328 <b>BIDS</b></span>
              <a><i className="ion ion-plus-round"></i></a>
            </div>
          </div>
          <div className="notLoggedIn">
            <a>Login</a>
            <a>Register</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(MainNav)
