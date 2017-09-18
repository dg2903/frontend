import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import styles from './Navigation.css';

import {storage} from './firebase';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var us = require('../img/usFlag.png');
var fn = require('../img/fnFlag.jpg');

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
      flagIndex: 0
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  };

  updateFlag = (index) => {
    this.setState({
      flagIndex: index
    });
  };

  handleMenu(){
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  handleBlur(){
    var active = false;
    if(this.state.activeMenu)
      active = false;
    this.setState({
      activeMenu: active
    });
  };

  render() {


    var menu = (<div id='menuList'>
                    {this.props.content.map((ele, index) => {
                      if(ele.name){
                        return (<div id='menuListItem'> <a key={index} href={ele.href}> {ele.name} </a></div>)
                      } else {
                        return <button key={index} className='flagOption' onClick={() => this.updateFlag(ele.index)}> <img key={index} src={ele.img_src} alt='flag' width="30px" height="30px"/></button>
                      }
                    })}
                 </div>);
    var list = this.state.activeMenu ? menu : '';
    var label;
    if(this.props.label){
      label = this.props.label;
    } else {
      label = <img className={styles.flag} src={this.props.content[this.state.flagIndex].img_src} width="30px" height="30px" alt="flags"/>
    }



    return(
      <div onBlur={this.handleBlur}>
        <button id='DropBtn' onClick={this.handleMenu}>
          {label}
          <img className='arrow' alt='dropdown' src={require('../img/dropdown.svg')} width='6px' height='6px'/>
        </button>
        <ReactCSSTransitionGroup transitionName='menu' transitionEnterTimeout={400} transitionLeaveTimeout={400}>
          {list}
        </ReactCSSTransitionGroup>
      </div>
    )
  };
}

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      hasFile: false,
      result: ''
    }
    this.file = null;
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.holdFile = this.holdFile.bind(this);
    this.processFile = this.processFile.bind(this);
    this.storageRef = storage.ref().child('Files')
  }

  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false,
                    hasFile: false,
                    result: ''
                  });

  }

  open() {
    this.setState({ showModal: true });
  }

  holdFile = (event) => {
    this.file = event.target.files;
    this.setState({hasFile: true});
  }

  processFile = () => {
    var file = this.file[0];
    this.storageRef.child(file.name).put(file, {contentType: this.file.type})
                                    .catch((error) => (this.setState({result: "error"})))
    if(!this.state.error)
      this.setState({result: "SUBMITTED"})
  }


  render() {
    return (
      <div>
        <div id='mainUploadDiv'>
          <Button bsClass={styles.mainUploadBtn} onClick={this.open}>
            UPLOAD
          </Button>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Choose a file</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
           <input type="file" className="hide_file" onChange={this.holdFile}/>
          </form>
          </Modal.Body>

          <Modal.Footer>
            <div className={styles.uploaddiv}>
              <img src={require('../img/logo_long.png')} width="100%" height="100%" alt="logo"/>
            </div>
            <div className={styles.result}>
              {this.state.result}
            </div>
            <div className={styles.uploadFixWidth}>
              {this.state.hasFile && <button className={styles.uploadbtn} type="button" onClick={this.processFile}> Submit </button>}
              <button className={styles.canclebtn} onClick={this.close}> Close </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


class Navigation extends Component {

  render() {
    return(
      //define img_src at the top of the page using require('path')
        <div className="container-fluid navMainDiv">
          <div className="row">
            <div className="col-md-2"/>
            <div className="col-md-8">
              <div className={styles.navbar}>
                <a href=""> <img className={styles.logo} src={require('../img/logo_long.png')} alt="logo"/> </a>

                <div className={styles.navPullRight}>
                  <div className={styles.navItemText}>
                  <Dropdown label="FORMS" content={[{name: "Single Link", href: "#"},
                                      {name: "Single Link", href: "#"},
                                      {name: "Single Link", href: "#"}]}/>
                  </div>

                  <div className={styles.navItemText}>
                  <Dropdown label="ABOUT" content={[{name: "Single Link", href: "#"},
                                                          {name: "Single Link", href: "#"},
                                                          {name: "Single Link", href: "#"}]}/>
                  </div>

                  <div className={styles.navItemPic}>
                  <Dropdown label="" content={[{name: "", href: "#", img_src: us, index: "0"},
                                                         {name: "", href: "#", img_src: fn, index: "1"}]}/>
                  </div>
                  <div className={styles.navItemBtn}>
                    <UploadForm />
                  </div>
                </div>

              </div>
            </div>
            <div className='col-md-2'/>
          </div>
        </div>
    )
  }
}

export default Navigation;
