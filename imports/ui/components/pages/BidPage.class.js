import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class IndividualListing extends Component {
  render() {
    return(
      <div className="individualListing">
        <div className="listingTop">
          <div className="listingTitleContainer">
            <h4>Black Fedora</h4>
            <span>RRP <b>5000</b> <img src="/media/robux.svg"/></span>
          </div>
        </div>
        <div className={this.props.isStacked ? 'isStackedSwitch' : ''}> 
          <div>
            <div className="listingImageContainer">
              <img src="data:image/png;base64,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"/>
            </div>
            <div className="listingBidsPriceContainer">
                <div className="priceAndTimeContainer">
                  <div> 
                    <i className="ion"/><span className="actualTimer">00:00:27</span>
                  </div>
                </div>
            </div>
          </div>
          <div>
            <div className="listingBottom">
              <div className="listingBottomTop">
                <div className="currentBidderContainer">
                  <img src="https://randomuser.me/api/portraits/women/53.jpg"/>
                  <div className="cBidSub">
                    <span>Bertha832</span>
                    <span>is the highest bidder!</span>
                  </div>
                  <div>
                    <i className="ion"/><div className="currentPrice">$0.03</div>
                  </div>
                </div>
              </div>
              <div className="bidOnItemContainer">
                  <a className="bidButton">BID NOW <span>34</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class BidPage extends Component {
  constructor(props) {
    super(props);
    this.gridListing = this.gridListing.bind(this);
    this.stackedListing = this.stackedListing.bind(this);
    this.state = {isStacked: false};
  }

  stackedListing() {
    this.setState({isStacked: true});
  }

  gridListing() {
    this.setState({isStacked: false});
  }

  render() {
    const listings = [];
    const numOfListings = 5;
    for (var i = 0; i < numOfListings; i++) {
      listings.push(<IndividualListing key={i} {...this.state}/>);
    }
    return(
    <div className="bidPageContainer">
      <div className="listingsContainer">
          <div className="actualContainer">
            <div className="listingsTop">
              <div className="searchContainer">
                <input placeholder="Search a specific item"/>
                <i className="ion ion-search"/>
              </div>
              <div className="selectContainer">
                <select className="minimal">
                  <option value="Fedora">Fedora</option>
                </select>
                <i className="ion ion-chevron-down"/>
              </div>
              <div className="viewMethod">
                <a onClick={this.gridListing} className={this.state.isStacked ? '' : 'active'}><i className="ion ion-grid"></i></a>
                <a onClick={this.stackedListing} className={this.state.isStacked ? 'active' : ''}><img src="/media/list.svg"/></a>
              </div>
            </div>
            <div className={this.state.isStacked ? 'actualListings stacked' : 'actualListings'}>
              {listings}
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(BidPage)
