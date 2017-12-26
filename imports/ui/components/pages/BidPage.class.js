import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { withTracker } from "meteor/react-meteor-data"
import { Auctions } from "../../../api/auctions"

class IndividualListing extends Component {
  render() {
    return(
      <div className="individualListing">
        <div className="listingTop">
          <div className="listingTitleContainer">
            <h4>{this.props.item.name}</h4>
            <span>RAP <b>{this.props.item.rap}</b> <img src="/media/robux.svg"/></span>
          </div>
        </div>
        <div className={this.props.isStacked ? "isStackedSwitch" : ""}> 
          <div>
            <div className="listingImageContainer">
              <img src={this.props.item.image_url}/>
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
    this.props.auctions.map((auction) => {
      listings.push(<IndividualListing key={auction._id} item={auction} {...this.state}/>)
    })
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
                  <option value="Latest">Latest auctions</option>
                </select>
                <i className="ion ion-arrow-down-b"/>
              </div>
              <div className="viewMethod">
                <a onClick={this.gridListing} className={this.state.isStacked ? "" : "active"}><i className="ion ion-grid"></i></a>
                <a onClick={this.stackedListing} className={this.state.isStacked ? "active" : ""}><img src="/media/list.svg"/></a>
              </div>
            </div>
            <div className={this.state.isStacked ? "actualListings stacked" : "actualListings"}>
              {listings}
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default withTracker(() => {
  return {
    auctions: Auctions.find({}).fetch()
  }
})(BidPage)
