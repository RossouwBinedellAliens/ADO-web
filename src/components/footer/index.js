import React, { Component } from 'react';
import "./style.css";

import data from "../../assets/data/EN/footer-info.json";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  updateDimensions() {
      this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateDimensions();    
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-top">
          <div className="footer-left">
            <a href={"mailto:" + data.email}>{data.title}</a>
          </div>
          <div className="footer-right">
            <span>{data.p1}</span>
            <a href={"mailto:" + data.email} target="_top" >{data.emailText}</a> <br/>
            <a href="http://google.co.za" target="_top" >Disclaimer</a>
          </div>
        </div>
      </div>
    );
  }
}