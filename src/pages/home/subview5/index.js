import React, { Component } from 'react';
import {Router} from 'react-router';
import "./style.css";

import data from "../../../assets/data/EN/home-subview5.json";

import vacation from '../../../assets/images/vacation-work.svg';

export default class Subview5 extends Component {

  render() {
    return (
      <div className="content-container-5">
        <h1 className="section-title">{data.title}</h1>
        <p className="section-text">{data.text}</p>
        <div className="not-citizen">
          <span className="not-citizen-text">{data.citizen}</span>
          <p className="not-citizen-content">{data.citizenContent}</p>
        </div>
        <div className="program-container">
          <div className="program-item">
            <img className="program-icon" src={vacation} alt="Vacation Icon"/>
            <h2 className="program-title">{data.vacation.title}</h2>
            <p className="program-text">{data.vacation.text}</p>
            <a href="/vacation" className="program-button">Find out more</a>       
          </div>
          <div className="program-item">
            <img className="program-icon" src={vacation} alt="Vacation Icon"/>
            <h2 className="program-title">{data.graduate.title}</h2>
            <p className="program-text">{data.graduate.text}</p>
            <a href="/graduate" className="program-button">Find out more</a>       
          </div>
        </div>
      </div>
    );
  }
}