import React, {Component} from 'react';
import './BgVideo.css';

class BgVideo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="video-container">
            <video autoPlay loop muted id='video-bg'>
              <source src={require('../video/Hero_vid.webm')} type='video/webm'/>
              <source src={require('../video/Hero_vid.mp4')} type='video/mp4'/>
            </video>
            <div id="video-msg">
              <h1> Financial Capital Group, LLC</h1>
              <p> "Connecting people to their dreams"</p>

              <a href='/'> DISCOVER </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BgVideo;
