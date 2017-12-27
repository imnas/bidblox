import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import MainLogo from '../../media/logo.svg';


class AccountPage extends Component {
  render() {
    return(
        <div className="bidPageContainer">
      <div className="greetingsContainer">
          <div className="actualContainer greetingsSub">
            <div className="greetingsTop">
              <div className="greetingTL">
                <h4>Hello, Jay305</h4>
                <p>Here's your account information...</p>
              </div>
              <div className="greetingsTR">
                <a><i className="ion ion-android-hand"/> Buy BIDS</a>
              </div>
            </div>
            <div className="greetingAcc">
              <div className="greetingBlock">
                <div className="greetingBlockTop">
                  <h4>Profile</h4>
                </div>
                <div className="profileInfoGB">
                  <div className="gbProfileContainer">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg"/>
                    <div className="gbPRight">
                      <h4>Jay305</h4>
                      <p>jay305.three@gmail.com</p>
                    </div>
                  </div>
                  <div className="gbABot leftGBlock">
                  <div>
                    <h6>Bid history</h6>
                    <p>544,145</p>
                  </div>
                  <div>
                    <h6>Item wins</h6>
                    <p>574</p>
                  </div>
                  <div>
                    <h6>Wins worth</h6>
                    <p>7,832,923 BIDS</p>
                  </div>
                </div>
                </div>
              </div>
              <div className="greetingBlock">
                <div className="greetingBlockTop">
                  <h4>Balance</h4>
                </div>
                <div className="balanceGB">
                  <div className="balGbTop">
                    <div className="bgbtL">
                      <h4>658,382 <b>BIDS</b></h4>
                    </div>
                    <div className="bgbtR">
                      <a>Buy More</a>
                      <a>Redeem Code</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="greetingBlock">
                <div className="greetingBlockTop blur">
                  <h4>Affiliate</h4>
                </div>
                <div className="profileInfoGB blur">
                  <div className="gbProfileAffiliate">
                    <div className="gbATop">
                      <h4>Give your friends <b>100 free BIDS</b> on signup</h4>
                      <div className="affiliateInputContainer">
                        <input value="https://bidblox.io/r/jay305" readOnly/>
                        <a><i className="ion ion-ios-copy-outline"></i></a>
                      </div>
                    </div>
                    <div className="gbABot">
                      <div>
                        <h6>Clicks</h6>
                        <p>64,849</p>
                      </div>
                      <div>
                        <h6>Conversions</h6>
                        <p>18,238</p>
                      </div>
                      <div>
                        <h6>Earnings</h6>
                        <p>832,923 BIDS</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="unsetAffiliateWindow">
                  <h4>Please set your affiliate code</h4>
                  <div className="setCodeContainer">
                    <input placeholder="Your code"/><a>Set</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(AccountPage)
