import React, { Component } from 'react';
import Slider from 'react-slick'
import ProblemSolverItem from '../../../components/problemSolverItem';
import "./style.css";

import data from "../../../assets/data/EN/home-subview4.json";
import carouselData from '../../../assets/data/EN/home-solverCarousel.json';

import solver1 from '../../../assets/images/Solver Carousel/Solver-1.png';
import solver2 from '../../../assets/images/Solver Carousel/Solver-2.png';
import solver3 from '../../../assets/images/Solver Carousel/Solver-3.png';
import solver4 from '../../../assets/images/Solver Carousel/Solver-4.png';

const images = [solver1, solver2, solver3, solver4];

export default class Subview4 extends Component {

  render() {
    var settings = {
      dots: false,
      arrows: false,
      dotsClass: "dot-style",
      className: "slider-component",
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1270, 
          settings: { 
            slidesToShow: 2, 
            slidesToScroll: 2,
            dots: true 
          } 
        },
        {
          breakpoint: 750, 
          settings: { 
            slidesToShow: 1, 
            slidesToScroll: 1,
            dots: true 
          } 
        },
      ]
    };
    return (
      <div className="content-container-4">
        <div className="problem-container">
          <div className="problem-text-container">
            <h1 className="problem-text-title">{data.t1}</h1>
            <p className="problem-text-paragraph">{data.p1}</p>

          </div>
          <div className="problem-carousel-container">
            <Slider { ...settings }>
              {
                carouselData.map( (item, i) => {
                  return (<div>
                            <ProblemSolverItem item={item} image={images[i]} /> 
                          </div>);
                })
              }
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}