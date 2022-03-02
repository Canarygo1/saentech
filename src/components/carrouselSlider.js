import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
function CarrouselSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 8000,
    swipe:true

  };
  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  )
}

export default CarrouselSlider
