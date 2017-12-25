import React, { Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  MainNav,
  Home,
  Footer
} from '.';

export default class Container extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
}
 	 render() {
    return(
    <div className="mainContainerFlex">
        <MainNav/>
          <div className="contentContainer">
            {this.props.children}
          </div>
        <Footer/>
    </div>
    )
  }
}