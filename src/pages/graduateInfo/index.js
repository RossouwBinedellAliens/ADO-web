import React, { Component } from 'react';
import "./style.css";

import TopNav from '../../components/TopNav';
import Footer from '../../components/footer';
import Expectation from './expectations';
import WorkType from './worktype';

import data from "../../assets/data/EN/graduate-info.json";
import expectation1 from '../../assets/images/ADO-Image.png';
import expectation2 from '../../assets/images/ADO-Image.png';
import expectation3 from '../../assets/images/ADO-Image.png';
import expectation4 from '../../assets/images/ADO-Image.png';
import expectation5 from '../../assets/images/ADO-Image.png';
import mainImage from '../../assets/images/ADO-Image.png';

import google from '../../assets/images/Left-arrow.svg';
import twitter from '../../assets/images/Left-arrow.svg';
import linkedin from '../../assets/images/Left-arrow.svg';
import facebook from '../../assets/images/Left-arrow.svg';

import worktype1 from '../../assets/images/vacation-work.svg';
import worktype2 from '../../assets/images/vacation-work.svg';
import worktype3 from '../../assets/images/vacation-work.svg';
import worktype4 from '../../assets/images/vacation-work.svg';

const images = [expectation1, expectation2, expectation3, expectation4, expectation5];

export default class GraduateInfo extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="top-content">
          <h1 className="main-title">{data.t1}</h1>
          <h2 className="secondary-title">{data.t2}</h2>
          <div className="expectation-container">
            {
              data.expectations.map((item, i) => {
                return (<Expectation image={images[i]} text={item} />)
              })
            }
          </div>
          <div className="main-text-container">
            <p>{data.p1}</p>
            <img src={mainImage} alt="Group Photo"/>
          </div>
          <h2 className="secondary-title">{data.t3}</h2>
          <div className="step-container">
            <div className="step-column">
              {
                data.steps.map((item, i) => {
                  if (i < 4)
                    return (<div className="step-item">
                              <span>{item.num}</span>
                              <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                              </div>
                            </div>)
                })
              }
            </div>
            <div className="step-column">
            {
                data.steps.map((item, i) => {
                  if (i >= 4)
                    return (<div className="step-item">
                              <span>{item.num}</span>
                              <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                              </div>
                            </div>)
                })
              }
            </div>
          </div>
          <div className="button-container">
            <span>{data.p2}</span>
            <div className="image-container">
              <img className="share-google" src={google} alt="google share button"/>
              <img className="share-twitter" src={twitter} alt="twitter share button"/>
              <img className="share-linkedin" src={linkedin} alt="linkedin share button"/>
              <img className="share-facebook" src={facebook} alt="facebook share button"/>
            </div>
            <a href="/graduate/form" className="program-button">JOIN THE TEAM</a>       
          </div>
        </div>
        <div className="bottom-container-1">
          <div className="bottom-content">
            <span className="bottom-title">{data.t4}</span>
            <p className="bottom-text">{data.p3}</p>
          </div>
        </div>
        <div className="bottom-container-2">
          <div className="bottom-inner-container">
            <div className="bottom-inner-column">
              <WorkType image={worktype1} text={data.workTypes[0]}/>
              <WorkType image={worktype2} text={data.workTypes[1]}/>
            </div>
            <div className="bottom-inner-column">
              <WorkType image={worktype3} text={data.workTypes[2]}/>
              <WorkType image={worktype4} text={data.workTypes[3]}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
