import React, {Component} from 'react';
import Iframe from 'react-iframe';
import './Map.css';

class Map extends Component {
  render() {
    return(
      <div id='map-m-div'>

        <div id='map-div'>
          <Iframe url="https://www.google.com/maps/embed/v1/place?key=AIzaSyDZKDXa11MhiVpKBRrj-6chD1jm3Jj8aos&q=Financial+Capital+Group,+112+W+4th+St,+Houston,+TX+77007"
            width="50%"
            height="550px"
            allowFullScreen/>
        </div>

        <div id='map-info'>
          <div id='map-address'>
            <p> 4200 N. Main St.</p>
            <p> Houston, TX 77009 </p>
          </div>
          <div id='map-contact'>
            <p> E: Gnegrete@fincapgroup.com </p>
            <p> P: +832 283 9172 </p>
          </div>

          <div id='map-msg'>
            <p> Give us a call or drop by anytime, we endeavour</p>
            <p> to answer all enquiries within 24 hours on business</p>
            <p> days. </p>
          </div>

          <div id='map-openTime'>
            <p> We are open from 9am — 5pm week days. </p>
          </div>
        </div>

      </div>
    )
  }
}

export default Map;
