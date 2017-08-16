import React, { Component } from 'react';
import Slider from "react-slick";
import WickedCarouselItem from "./../../../components/wickedCarouselItem";
import "./style.css";

import data from "./../../../assets/data/EN/home-subview3.json";
import carouselData from "./../../../assets/data/EN/home-wickedCarousel.json";

import image1 from "./../../../assets/images/Wicked Carousel/Wicked-1.png"
import image2 from "./../../../assets/images/Wicked Carousel/Wicked-2.png"
import image3 from "./../../../assets/images/Wicked Carousel/Wicked-3.png"

const images = [image1, image2, image3];

export default class Subview3 extends Component {
  render() {
    var settings = {
      dots: true,
      // arrows: false,
      dotsClass: "dot-style",
      className: "slider-component",
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="content-segment-3">
          <div className="ribbon">
            <h1 className="ribbon-title">{data.t1}</h1>
            <p className="ribbon-text">{data.p1}</p>
          </div>
          <div className="wicked-content">
            <div className="ribbon-triangle" />
            <h1 className="title">We solve <font color="#5a1846">WICKED</font> problems!</h1>
            <p className="title-text">{data.p2}</p>
            <div className="slider-container">
              <Slider {...settings}>
                {carouselData.map((item, i) => {
                  return <div><WickedCarouselItem text={item} image={images[i]} /></div>
                })}
              </Slider>
            </div>
          </div>          
        </div>
    );
  }
}

