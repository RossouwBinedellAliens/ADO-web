import React, { Component } from 'react';
import "./style.css";

import TopNav from '../../components/TopNav';
import Footer from '../../components/footer';
import Expectation from '../../components/expectations';
import WorkTypeBar from '../../components/worktypebar';

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

const images = [expectation1, expectation2, expectation3, expectation4, expectation5];

export default class GraduateInfo extends Component {
  render() {
    return (
      <div className="graduate-info">
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
        <WorkTypeBar topText={{title: data.t4, content: data.p3}} workTypes={data.workTypes}/>
        <Footer />
      </div>
    );
  }
}
