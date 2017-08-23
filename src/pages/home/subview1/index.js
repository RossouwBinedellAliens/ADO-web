import React, { Component } from 'react';
import "./style.css";

import data from "../../../assets/data/EN/home-subview1.json"

import background from '../../../assets/images/Dashboard-background.png';
import arrow from "../../../assets/images/arrow-down.svg";

// Main container for the homescreen
export default class Subview1 extends Component {
  render() {
    return (
      <div className="content-segment">
        <img className="dash-background" src={background} alt="Dashboard background"/>
        <div className="content-container">
          <h1 className="title">{data.title}</h1>
          <div className="explore">
            <div>
              <a href="#content-segment-2">
                <img src={arrow} alt="down arrow" />
                <span>Explore</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
