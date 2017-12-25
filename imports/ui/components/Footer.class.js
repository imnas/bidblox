import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return(
    <div className="footerContainer">
        <div className="footerSubContainer">
          <div className="footerLeft">
            <ul>
              <NavLink to="/"><img src="/media/bidblox.png"/></NavLink>
              <p>&copy; BidBlox . All rights reserved</p>
            </ul>
          </div>
          <div className="footerMid">
            <ul>
              <h4>Got questions? Join our channels</h4>
              <div className="footerIconsContainer">
                <a><img src="/media/social/discord.svg"/></a>
                <a><img src="/media/social/facebook.svg"/></a>
                <a><img src="/media/social/twitter.svg"/></a>
              </div>
            </ul>
          </div>
          <div className="footerRight">
            <ul>
              <a>Privacy Policy</a>
              <a>Terms & Conditions</a>
            </ul>
          </div>
        </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Footer)
