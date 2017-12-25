import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CropRobloxImage extends Component {
  render() {
    var img = new Image(),
    $canvas = $("<canvas>"),
    canvas = $canvas[0],
    context;
    
    var removeBlanks = function (imgWidth, imgHeight) {
    var imageData = context.getImageData(0, 0, imgWidth, imgHeight),
        data = imageData.data,
        getRBG = function(x, y) {
            var offset = imgWidth * y + x;
            return {
                red:     data[offset * 4],
                green:   data[offset * 4 + 1],
                blue:    data[offset * 4 + 2],
                opacity: data[offset * 4 + 3]
            };
        },
        isWhite = function (rgb) {
            return (rgb.red > 200 && rgb.green > 200 && rgb.blue > 200) || rgb.opacity < 10;
        },
        scanY = function (fromTop) {
            var offset = fromTop ? 1 : -1;
            for(var y = fromTop ? 0 : imgHeight - 1; fromTop ? (y < imgHeight) : (y > -1); y += offset) {
                for(var x = 0; x < imgWidth; x++) {
                    var rgb = getRBG(x, y);
                    if (!isWhite(rgb)) {
                        return y;                        
                    }      
                }
            }
            return null; 
        },
        scanX = function (fromLeft) {
            var offset = fromLeft? 1 : -1;
            for(var x = fromLeft ? 0 : imgWidth - 1; fromLeft ? (x < imgWidth) : (x > -1); x += offset) {
                for(var y = 0; y < imgHeight; y++) {
                    var rgb = getRBG(x, y);
                    if (!isWhite(rgb)) {
                        return x;                        
                    }      
                }
            }
            return null; 
        };
    
    var cropTop = scanY(true),
        cropBottom = scanY(false),
        cropLeft = scanX(true),
        cropRight = scanX(false),
        cropWidth = cropRight - cropLeft,
        cropHeight = cropBottom - cropTop;
    
    var $croppedCanvas = $("<canvas>").attr({ width: cropWidth, height: cropHeight });
    $croppedCanvas[0].getContext("2d").drawImage(canvas,
        cropLeft, cropTop, cropWidth, cropHeight,
        0, 0, cropWidth, cropHeight);
    
    $(".rbxImage").append($croppedCanvas);
    };
    
    img.crossOrigin = "anonymous";
    img.onload = function () {
    $canvas.attr({ width: this.width, height: this.height });
    context = canvas.getContext("2d");
    if (context) {
        context.drawImage(this, 0, 0);
        removeBlanks(this.width, this.height);
    } else {
        alert('Get a real browser!');
    }
    }
    
    // define here an image from your domain
    img.src = 'https://t3.rbxcdn.com/60561ec5367320937b1ec7121183f669';
    return(
      <div className="rbxImage">

      </div>
    )
  }
}

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
              <CropRobloxImage/>
              {/* <img src="https://t2.rbxcdn.com/859236863329da321320019e08d2d338"/> */}
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
                  <a className="bidButton">BID <span>34</span></a>
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
    const numOfListings = 1;
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
