import React, { Component } from "react";
import Slider from "react-slick";
import CardComponent from "../CardComponent/CardComponent";
export default class BannerSlickSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "ease",
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
      <div className="main-banner-carousel">
        <Slider {...settings}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Slider>
      </div>
    );
  }
}