import React, { Component } from 'react';
import "./style.css";
import logoLight from "./../../assets/images/ado-logo.svg";
import logoDark from "./../../assets/images/ado-logo-dark.svg";
import close from "../../assets/images/close-light.svg";


export default class TopNav extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      showSideMenu: false
    }
  }

toggleEvent() {
  this.setState({showSideMenu: !this.state.showSideMenu})
}

  render() {
  if (this.props.isDashboard){
    var menuOptions = "side-menu";
    if (this.state.showSideMenu) 
      menuOptions += " open";
    else 
      menuOptions += " close";    
    return (
       <div className="top-nav">
          <a className="dashboard-navigator" href="/home">
            <img className="home" src={logoLight} alt="ADO Logo for navigation"/>
          </a>
          <div className="right-links">
            <a href="/home#our-content">
              <span className="link-text">
                OUR PROJECTS
              </span>
              <div className="link-text-highlight" />
            </a>
            <a className="dropdown">
              <span className="link-text">
                YOUR CAREERS
              </span>
              <div className="link-text-highlight" />              
              <div className="menu-dropdown">
                <a href="/graduate">
                  Graduate Programme
                </a>
                <a href="/vacation">
                  Vacation Programme
                </a>
              </div>
            </a>
            <a href="/home#footer">
              <span className="link-text">
                CONTACT US
              </span>
              <div className="link-text-highlight" />              
            </a>
          </div>
          <div className="hamburger" onClick={e => this.toggleEvent()}>
            <div className="line-1" />
            <div className="line-1" />
            <div className="line-1" />
          </div>
          <div className={menuOptions}>
            <div className="content">
              <img className="close-side-menu" src={close} alt="close" onClick={e => this.toggleEvent()}/>
              <div className="text-content">
                <a href="/home#our-content" onClick={e => this.toggleEvent()} className="text-item-1">Our Projects</a>
                <a className="text-item-1">Your Careers</a>
                <div className="line-2"/>
                <a href="/graduate" className="text-item-2">Graduate Program</a>
                <a href="/vacation" className="text-item-2">Vacation Program</a>
                <a href="#footer" className="text-item-1" onClick={e => this.toggleEvent()}>Contact Us</a>
              </div>
            </div>
          </div>
      </div> 
    );
  }  else {
    var menuOptions = "side-menu";
    if (this.state.showSideMenu) 
      menuOptions += " open";
    else 
      menuOptions += " close";    
    return (
      <div className="dark">
       <div className="top-nav">
          <a className="dashboard-navigator" href="/home">
            <img className="home" src={logoDark} alt="ADO Logo for navigation"/>
          </a>
          <div className="right-links">
            <a href="/home#our-content">
              <span className="link-text">
                OUR PROJECTS
              </span>
            </a>
            <a className="dropdown">
              <span className="link-text">
                YOUR CAREERS
              </span>
              <div className="menu-dropdown">
                <a href="/graduate">
                  Graduate Programme
                </a>
                <a href="/vacation">
                  Vacation Programme
                </a>
              </div>
            </a>
            <a href="#footer">
              <span className="link-text">
                CONTACT US
              </span>
            </a>
          </div>
          <div className="hamburger" onClick={e => this.toggleEvent()}>
            <div className="line-1" />
            <div className="line-1" />
            <div className="line-1" />
          </div>
          <div className={menuOptions}>
            <div className="content">
              <img className="close-side-menu" src={close} alt="close" onClick={e => this.toggleEvent()}/>
              <div className="text-content">
                <a href="/home#our-content" onClick={e => this.toggleEvent()} className="text-item-1">Our Work</a>
                <a className="text-item-1">Careers</a>
                <div className="line-2"/>
                <a href="/graduate" className="text-item-2">Graduate Program</a>
                <a href="/vacation" className="text-item-2">Vacation Program</a>
                <a href="#footer" className="text-item-1" onClick={e => this.toggleEvent()}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>  
      </div> 
    );
  }
}
}
