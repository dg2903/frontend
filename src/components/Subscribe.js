import React, {Component} from 'react';
import './Subscribe.css';
import 'whatwg-fetch';


class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render(){
    return (

      <div className='container-fluid' id='subsDiv'>
        <div className='row'>
          <h2> Join over 20,000 satisfied FCG customers </h2>
          <form action="https://facebook.us16.list-manage.com/subscribe/post" method="POST" target="_blank">
            <input type="text" name="MERGE1" id="MERGE1" placeholder='Your Name'/>

            <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0"  placeholder='Email Address'/>

            <button type="submit" name="submit" value="Subscribe Now"> Subscribe Now </button>
            <br />
            <input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="group_1" name="group[435][1]" value="1"/>
              <small id='term'> I have read and agree to the <a href='/'>terms and conditions</a></small>

            <input type="hidden" name="u" value="0d77b53c41af39fa23a91a98f"/>
            <input type="hidden" name="id" value="88a2c8c9b2"/>
          </form>
        </div>
      </div>
    )
  }
};

class Subscribe extends Component {

  render () {
    return(
      <div>
        <Form />
      </div>
    );
  };
};

export default Subscribe;
