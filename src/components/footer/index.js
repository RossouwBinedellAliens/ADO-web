import React, { Component } from 'react';
import "./style.css";

import data from "../../assets/data/EN/footer-info.json";

import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import linkedin from "../../assets/images/linkedin.svg";
import absa from '../../assets/images/absa.svg';

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
    if (this.state.width >= 1100) {


      return (
        <div className="footer">
          <div className="footer-top">
            <div className="footer-item-1">
              <span>{data.title}</span>
            </div>
            <div className="footer-item-2">
              <span>{data.contact1.title}</span>
              <p>{data.contact1.content}</p>
            </div>
            <div className="footer-item-2">
              <span>{data.contact2.title}</span>
              <p>{data.contact2.content}</p>
            </div>
            <div className="footer-item-3">
              <span>{data.p1}</span>
              <p>{data.p2}</p>
              <a>{data.a1}</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>PRIVACY & COOKIES POLICY 2017 ADO</span>
            <div className="footer-share-images">
              <a href="http://facebook.com">
                <img src={facebook} alt="facebook page"/>
              </a>
              <a href="http://facebook.com">
                <img src={youtube} alt="youtube page"/>
              </a>
              <a href="http://facebook.com">
                <img src={linkedin} alt="linkedin share"/>
              </a>
            </div>
            <img className="footer-absa-logo" src={absa} alt="absa logo" />
          </div>

        </div>
      );
    } else if (this.state.width >= 680) {


      return (
        <div className="footer">
          <div className="footer-top">
            <div className="footer-column-1">
              <div className="footer-item-1">
                <span>{data.title}</span>
              </div>
              <div className="footer-item-3">
                <span>{data.p1}</span>
                <p>{data.p2}</p>
                <a>{data.a1}</a>
              </div>
            </div>
            <div className="footer-column-2">
              <div className="footer-item-2">
                <span>{data.contact1.title}</span>
                <p>{data.contact1.content}</p>
              </div>
              <div className="footer-item-2">
                <span>{data.contact2.title}</span>
                <p>{data.contact2.content}</p>
              </div>
            </div>
          </div>
          
          {
            this.state.width >= 850? 
            
            (<div className="footer-bottom">
            <span>PRIVACY & COOKIES POLICY 2017 ADO</span>
            <div className="footer-share-images">
              <a href="http://facebook.com">
                <img src={facebook} alt="facebook page"/>
              </a>
              <a href="http://facebook.com">
                <img src={youtube} alt="youtube page"/>
              </a>
              <a href="http://facebook.com">
                <img src={linkedin} alt="linkedin share"/>
              </a>
            </div>
            <img className="footer-absa-logo" src={absa} alt="absa logo" />
          </div>):

          (<div>
            <div className="footer-share-images">
              <a href="http://facebook.com">
                <img src={facebook} alt="facebook page"/>
              </a>
              <a href="http://facebook.com">
                <img src={youtube} alt="youtube page"/>
              </a>
              <a href="http://facebook.com">
                <img src={linkedin} alt="linkedin share"/>
              </a>
            </div>
            <div className="footer-bottom">
              <span>PRIVACY & COOKIES POLICY 2017 ADO</span>
              <img className="footer-absa-logo" src={absa} alt="absa logo" />
            </div>
          </div>)
          }

        </div>
      );
    } else {
      

      return (
        <div className="footer">
          <div className="footer-top">          
            <div className="footer-item-1">
              <span>{data.title}</span>
            </div>
            <div className="footer-item-2">
              <span>{data.contact1.title}</span>
              <p>{data.contact1.content}</p>
            </div>
            <div className="footer-item-2">
              <span>{data.contact2.title}</span>
              <p>{data.contact2.content}</p>
            </div>
            <div className="footer-item-3">
              <span>{data.p1}</span>
              <p>{data.p2}</p>
              <a>{data.a1}</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-share-images">
              <a href="http://facebook.com">
                <img src={facebook} alt="facebook page"/>
              </a>
              <a href="http://facebook.com">
                <img src={youtube} alt="youtube page"/>
              </a>
              <a href="http://facebook.com">
                <img src={linkedin} alt="linkedin share"/>
              </a>
            </div>
            <span>PRIVACY & COOKIES POLICY 2017 ADO</span>
            <img className="footer-absa-logo" src={absa} alt="absa logo" />
          </div>

        </div>
      );
    }
  }
}