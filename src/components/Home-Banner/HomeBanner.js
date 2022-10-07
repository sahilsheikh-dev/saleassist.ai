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
  constructor(props) {
    super(props);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalOpen() {
    var modal = document.getElementById("myModalHero");
    var btn = document.getElementById("myBtn");

    // btn.onclick = function () {
    modal.style.display = "block";
    // };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  modalClose() {
    var modal = document.getElementById("myModalHero");
    var span = document.getElementsByClassName("close")[0];

    // span.onclick = function () {
    modal.style.display = "none";
    // };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

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
            // height: "810px",
          }}
        >
          {/* <Slider {...settings}> */}
          <div>
            <div className=" safemeet-home-page ">
              <div className="safemeet-container">
                <div className="safemeet-home-page-row home-paddingx-100">
                  <div className="safemeet-home-page-row-col-1 mx-auto">
                    <div className="safemeet-sale-fast-sale-live">
                      <h2 className="hero-head">
                        Sell <span>Fast</span>, Sell
                        <span> Live</span>
                      </h2>
                    </div>
                    <h1>Live Video Shopping.</h1>
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
                    <button onClick={this.modalOpen} className="hero-btn">
                      Book a Demo
                    </button>
                    <div id="myModalHero" class="modal">
                      <div class="modal-content">
                        <span onClick={this.modalClose} class="close">
                          &times;
                        </span>
                        {/* <p>Some text in the Modal..</p> */}
                        <FormBody />
                      </div>
                    </div>
                  </div>
                  <div className="safemeet-home-page-row-col-2 mx-auto">
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
