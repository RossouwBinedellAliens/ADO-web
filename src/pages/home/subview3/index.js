import React, { Component } from 'react';
import Slider from "react-slick";
import CarouselItem from "./../../../components/carouselItem";
import "./style.css";

import data from "./../../../assets/data/EN/home-subview3.json";
import carouselData from "./../../../assets/data/EN/home-wickedCarousel.json";

import image1 from "./../../../assets/images/Pillar-1.svg";

export default class Subview3 extends Component {
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

  getCarouselDispayAmount() {
    var width = this.state.width;
    if (width >= 600)
      return 3
    if (width >= 400)
      return 2
    return 1
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: this.getCarouselDispayAmount(),
      slidesToScroll: this.getCarouselDispayAmount()
    };
    return (
      <div>
        <div className="content-segment">
          <div className="ribbon">
            <h1 className="ribbon-title">{data.t1}</h1>
            <p className="ribbon-text">{data.p1}</p>
            <div className="ribbon-triangle" />
          </div>
          <h1 className="title">We solve <font color="#5a1846">WICKED</font> problems!</h1>
          <p className="title-text">{data.p2}</p>
          <div>
            <Slider {...settings}>
              {carouselData.map((item, i) => {
                return <div><CarouselItem text={item} image={image1} /></div>
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

