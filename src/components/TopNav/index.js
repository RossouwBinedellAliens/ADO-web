import React, { Component } from 'react';
import "./style.css";
import logo from "./../../assets/images/ado-logo.png";

export default class TopNav extends Component {
  render() {
    return (
       <div className="container">
        <a className="logo" href="/"><img src={logo} alt="..."/></a>
        <a className="last-nav-a top-nav-a" href="">Contact</a>
        <div className="dropdown">
            <button className="dropbtn">Careers</button>
            <div className="dropdown-content">
            <a className="top-nav-a" href="/graduate/form">Graduate Programme</a>
            <a className="top-nav-a" href="/">Vacation Worker</a>
            </div>
        </div> 
        <a className="top-nav-a" href="">Work</a>
      </div> 
    );
  }
}
