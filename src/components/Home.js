import React, {Component} from 'react';
import Navigation from './Navigation';
import BgVideo from './BgVideo';
import Info from './Info';
import Testimonial from './Testimonial';
import Subscribe from './Subscribe';
import Map from './Map';
import AboutUs from './AboutUs';
import Footer from './Footer';

class Home extends Component {

  render(){
    return (
      <div>
        <Navigation />
        <BgVideo />
        <Info />
        <Testimonial />
        <Subscribe />
        <Map />
        <AboutUs />
        <Footer />
      </div>
    )
  }
}

export default Home;
