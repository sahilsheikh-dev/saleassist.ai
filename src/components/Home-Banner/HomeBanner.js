import React, { Component } from "react";
import VideoText from "../Videotestimonial/vieoTestiCard";
import Slider from "react-slick";
import vivek from "../../assests/testimonial-logo/Viveks_Logo_With-Mask_1.webp";
import Boxlog from "../../assests/testimonial-logo/boxLogo.webp";
import Video from "../../assests/main-video/main.mp4";
import HomeGif from "../../assests/Home-Banner/WebsiteHeader.gif";
import FormBody from "./formBody";
import { margin } from "@mui/system";
import { Link } from "react-router-dom";

export default class HomeBanner extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            speed: 500,
          },
        },
      ],
    };
    // const {email, name,countryCode, number} = this.state
    return (
      <React.Fragment>
        <div
          className="safemeet-container safemeet-mg-t-5 "
          style={{
            marginTop: "0",
            paddingTop: "0",
            width: "100%",
            height: "810px",
          }}
        >
          {/* <Slider {...settings}> */}
          <div>
            <div
              className=" safemeet-home-page safemeet-pd-r-5 safemeet-pd-l-5"
              style={
                {
                  // background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  // url(${HomeGif})`,
                }
              }
            >
              <div className="safemeet-container">
                <div
                  className="safemeet-home-page-row"
                  style={{
                    padding: "0 100px",
                  }}
                >
                  <div className="safemeet-home-page-row-col-1">
                    <div className="safemeet-sale-fast-sale-live">
                      <h2
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        Sell <span>Fast</span>, Sell
                        <span> Live</span>
                      </h2>
                    </div>
                    <h1
                      style={{
                        fontSize: "70px",
                      }}
                    >
                      Live Video Shopping.
                    </h1>
                    <p
                      style={{
                        textAlign: "justify",
                        fontSize: "18px",
                        fontWeight: "400",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <Link to="/demo">
                      <button
                        style={{
                          background: "#000000",
                          color: "#FFFFFF",
                          marginTop: "15px",
                          padding: "10px 18px",
                          fontSize: "18px",
                          fontWeight: "500",
                          border: "1px solid #000000",
                          borderRadius: "0px",
                        }}
                      >
                        Book a Demo
                      </button>
                    </Link>
                    {/* <FormBody /> */}
                  </div>
                  <div className="safemeet-home-page-row-col-2">
                    <div className="HomeimageSection">
                      <img
                        src="/features/commerce/liveCommer.gif"
                        className="imgResponsive"
                      />
                    </div>
                    {/* <video src={Video} autoPlay muted loop playsInline/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </Slider> */}
        </div>
      </React.Fragment>
    );
  }
}
