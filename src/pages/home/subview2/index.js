import React, { Component } from 'react';
import "./style.css";

import data from "./../../../assets/data/EN/home-subview2.json";
import adoImage from "./../../../assets/images/ADO-Image.png"

export default class Subview2 extends Component {
  render() {
    console.log(data.i1);
    return (
      <div className="content-segment">
        <div className="row-1">
          <div className="col-1">
            <h1>{data.t1}</h1>
            <p>{data.p1Content}</p>
          </div>
          <div className="col-2 image-container">
            <img className="content-image" src={adoImage} alt="Not found"/>
          </div>
        </div>
        <div className="row-2">
          <div className="col-1">
            <h2>{data.p2Title}</h2>
            <p>{data.p2Content}</p>
          </div>
        </div>
        <div className="row-2">
          <div className="col-1">
            <h2>{data.p2Title}</h2>
            <p>{data.p2Content}</p>
          </div>
        </div>
      </div>
    );
  }
}
