import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import MainLogo from '../../media/logo.svg';


class Login extends Component {
  render() {
    return(
    <div className="formsContainerMain">
      <div className="subFormContainer">
        <div className="formLogoContainer">
          <NavLink to="/"><img src="/media/bidblox.png"/></NavLink>
        </div>
        <div className="actualFormContainer">
          <div className="formHeader">
            Login
          </div>
          <div className="formInputContainer">
            <div className="individualInputFormContainer">
              <h4>Roblox Username</h4>
              <input placeholder="Your Roblox username"/>
            </div>
            <div className="individualInputFormContainer">
              <h4>Password</h4>
              <input placeholder="Password (min of 8)"/>
            </div>
            <div className="formSubmitContainer">
              <button>Login</button>
              <p>By logging in, you agree to the <a>Terms & Conditions</a> as well as the <a>Privacy Policy</a></p>
            </div>
          </div>
        </div>
        <div className="alreadyContainerForms">
          <NavLink to="/register">Don't have an account? <b>Register one</b></NavLink>
        </div>
      </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Login)
