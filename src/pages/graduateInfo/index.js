import React, { Component } from 'react';
import "./style.css";

import TopNav from '../../components/TopNav';
import Footer from '../../components/footer';
import Expectation from './expectations';

import data from "../../assets/data/EN/graduate-info.json";
import expectation1 from '../../assets/images/ADO-Image.png';
import expectation2 from '../../assets/images/ADO-Image.png';
import expectation3 from '../../assets/images/ADO-Image.png';
import expectation4 from '../../assets/images/ADO-Image.png';
import expectation5 from '../../assets/images/ADO-Image.png';
import mainImage from '../../assets/images/ADO-Image.png';

const images = [expectation1, expectation2, expectation3, expectation4, expectation5];

export default class GraduateInfo extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="content">
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
        </div>
        <Footer />
      </div>
    );
  }
}
