import React, { Component } from "react";
import OpenAI from "../../assests/Partnership/OpenAI.png";
import AWS from "../../assests/Partnership/AWS.webp";
import NVIDIA from "../../assests/Partnership/NVIDIA.png";
import HundredX from "../../assests/Partnership/100X.webp";
import AWARD from "../../assests/Partnership/AWARD.webp";
import MicroSoft from "../../assests/Partnership/micro-soft.png";
import CIO from "../../assests/Partnership/CIO.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class Partnership extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      variableWidth: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 500,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const images = [NVIDIA, HundredX, OpenAI, AWS, AWARD, MicroSoft, CIO];
    return (
      <div className="safemeet-container safemeet-text-center safemeet-mg-t-5">
        <h1 className="safemeet-mg-b-2 title-partnership">
          Partnerships & Recognitions
        </h1>
        {/* <div className="slick-slider safemeet-partnership">
          <Slider {...settings}>
            {images.map((item, index) => {
              return <img key={index} src={item} alt="safemeet clients" />;
            })}
          </Slider>
        </div> */}

        {/* <marquee> */}
        <div className="safemeet-partnership">
          {images.map((item, index) => {
            return (
              <>
                <img key={index} src={item} alt={item} />
              </>
            );
          })}
        </div>
        {/* </marquee> */}
        <p className="safemeet-mg-t-2 want-partner">
          Want to be a partner <Link to="/partner">Click here</Link>
        </p>
      </div>
    );
  }
}
