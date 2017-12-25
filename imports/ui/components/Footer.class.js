import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return(
    <div className="footerContainer">
          Footer
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Footer)
