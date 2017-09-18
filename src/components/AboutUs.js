import React, {Component} from 'react';
import axios from 'axios';
import './AboutUs.css'

class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.state ={
      tweet: null
    }

    this.loadTweet = this.loadTweet.bind(this);
  }

  loadTweet() {
    var self = this;
    axios.get('http://localhost:3000/twitter').
    then(function (res){
      console.log(res.data);
      self.setState(function () {
        return {
          tweet: res.data
        }
      })
    }).
      catch(function(err) { console.log(err)});
  }

  componentDidMount(){
    this.loadTweet();
  }

  render() {

    return(
      <div id='au-m-div'>
        <div id='aboutus'>
          <h5> About Us </h5>
          <p> At Financial Capital Group LLC we pride ourselves
          in delivery the industry’s best service and experience
          through focusing on core values. We are committed to
          building relationships with our customers. That
          commitment over last decade has fostered and exceptional
          lending and financial advisors team.
          </p>
        </div>

        <div id='tweeter'>
          <h5> RECENT UPDATES </h5>
          <p>{ this.state.tweet == null ? 'nothing' : this.state.tweet[0] }</p>
          <p>{ this.state.tweet == null ? 'nothing' : this.state.tweet[1] }</p>
        </div>

        <div id='instagram'>
          <h5> INSTAGRAM </h5>
        </div>

        <div id='newsletter'>
          <h5> NEWS LETTER </h5>
        </div>

      </div>
    )
  }
}

export default AboutUs
