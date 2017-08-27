import React, { Component } from 'react';
import TopNav from '../../components/TopNav';
import Footer from '../../components/footer';
import WorkTypeBar from '../../components/worktypebar';
import Expectation from '../../components/expectations';
import "./style.css";

import data from '../../assets/data/EN/vacation-info.json';

import linkedin from '../../assets/images/facebook.svg';
import facebook from '../../assets/images/linkedin.svg';

import expectation1 from '../../assets/images/challenges/mentoship.svg';
import expectation2 from '../../assets/images/challenges/training.svg';
import expectation3 from '../../assets/images/challenges/training.svg';
import mainImage from '../../assets/images/vacation-image.png';

const images = [expectation1, expectation2, expectation3];
// Rooting to be added later
export default class VacationInfo extends Component {
  render() {
    return (
      <div className="vacation-info">
        <TopNav />
        <div className="top-content">
          <h1 className="main-title">{data.t1}</h1>
          <div className="main-text-container">
            <div className="content-column-1">
              <h2 className="secondary-title-top">{data.t2}</h2>
              <div className="expectation-container">
                {
                  data.expectations.map((item, i) => {
                    return (<Expectation image={images[i]} text={item} />)
                  })
                }
              </div>
              <p>{data.p1}</p>
            </div>
            <div className="content-column-2">
              <img src={mainImage} alt="Group Photo"/>
            </div>
          </div>
          <h2 className="secondary-title-bottom">{data.t3}</h2>
          <div className="step-container">
            <div className="step-row">
              {
                data.steps.map((item, i) => {
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
              <a href="https://www.facebook.com/sharer/sharer.php?u=#url&t=ADO%20Vacation%20Work" target="_blank" >
                <img className="share-linkedin" src={linkedin} alt="linkedin share button"/>
              </a>
              <a href={"https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href + "&title=ADO%20Vacation%20Work&summary=ADO%20has%20many%20open%20spaces%20for%20vacation%20workers%20looking%20to%20shape%20the%20future!&source=Africa%20Design%20Office"} target="_blank">
                <img className="share-facebook" src={facebook} alt="facebook share button"/>
              </a>
            </div>
            <a href="/vacation/form" className="program-button">JOIN THE TEAM</a>       
          </div>
        </div>
        <WorkTypeBar topText={{title: data.t4, content: data.p3}} workTypes={data.workTypes}/>
        <Footer />
      </div>
    );
  }
}
