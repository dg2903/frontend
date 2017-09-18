import React, {Component} from 'react';
import './Testimonial.css';

class Testimonial extends Component {
  render() {
    return(
      <div className='container-fluid' id='testimonial-div'>
        <div className='row'>
        <div className='col-md-2'/>
          <div className='col-md-2' id='testimonial-item' >
            <div id='testComment'>
              <p> This is the best overall experience I have had. FCG made me feel like a valued customer and I feel empowered. </p>
            </div>

            <div>
              <div id='testImgSection'>
                <img alt="" src={require('../img/person1.jpg')}/>
              </div>
              <div id='testNameSection'>
                <h5>Raresh D.</h5> <small>Kolkata, IN</small>
              </div>
            </div>
          </div>

          <div className='col-md-2' id='testimonial-item' >
          <div id='testComment'>
            <p> FCG was easy to set-up and more importantly, was dead simple to customize. Buy this on sight. </p>
          </div>

          <div>
            <div id='testImgSection'>
              <img alt="" src={require('../img/person2.jpg')}/>
            </div>
            <div id='testNameSection'>
              <h5>Robert S.</h5> <small>Brisbane, AU</small>
            </div>
          </div>
          </div>

          <div className='col-md-2' id='testimonial-item' >
          <div id='testComment'>
            <p> Best. customer. service. Seriously, I opened a ticket and they were so helpful and really seemed to care about my experience. </p>
          </div>

          <div>
            <div id='testImgSection'>
              <img alt="" src={require('../img/person3.jpeg')}/>
            </div>
            <div id='testNameSection'>
              <h5>Gabby V.</h5> <small>Sydney, AU</small>
            </div>
          </div>
          </div>

          <div className='col-md-2' id='testimonial-item' >
          <div id='testComment'>
            <p> We’ve used their service before and have always been hugely satisfied </p>
          </div>

          <div>
            <div id='testImgSection'>
              <img alt="" src={require('../img/person4.jpeg')}/>
            </div>
            <div id='testNameSection'>
              <h5>Josephine L.</h5> <small>California, US</small>
            </div>
          </div>
          </div>
          <div className='col-md-2'/>
        </div>
      </div>
    )
  };
}

export default Testimonial;
