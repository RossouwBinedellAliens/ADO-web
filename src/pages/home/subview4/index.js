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
const carouselSnapWidth = 1200;

export default class Subview4 extends Component {
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

  getCarouselContent() {

    if (this.state.width >= carouselSnapWidth) {

      var carouselArr = [];
      var counter = 0;
      for (var i = 0; i <= (carouselData.length / 2) + 1 ; i = i + 2) {
        carouselArr[counter] = [carouselData[i], carouselData[i + 1]];
        counter++;
      }
      

      counter = -2;
      return carouselArr.map( (item, i) => {
        counter = counter + 2;
        return (<div>
                  <ProblemSolverItem item={item[0]} image={images[counter]} /> 
                  { item[1] == null?null: <ProblemSolverItem item={item[1]} image={images[counter + 1]} /> } 
                </div>);
      })
    } else {
      return carouselData.map( (item, i) => {
        return <div> <ProblemSolverItem item={item} image={images[i]} /> </div>
      })
    }
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      dotsClass: "dot-style",
      className: "slider-component",
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [ { breakpoint: carouselSnapWidth, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } }]
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
                this.getCarouselContent()
              }
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}