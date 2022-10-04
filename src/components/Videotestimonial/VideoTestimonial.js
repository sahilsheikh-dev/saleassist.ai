import React, { Component } from "react";
import VideoText from "./vieoTestiCard";
import Slider from "react-slick";
import vivek from "../../assests/testimonial-logo/Viveks_Logo_With-Mask_1.webp";
import Boxlog from "../../assests/testimonial-logo/boxLogo.webp";
export default class VideoTestimonial extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <>
        <div className="safemeet-container safemeet-text-center safemeet-mg-t-5 safemeet-testimonial-box">
          <h1 className="title-testimonial">We are the talk of the town</h1>
          <Slider {...settings}>
            <VideoText
              title={`SaleAssist a video chat app enabled on viveks.com.`}
              ByVideo={`Vishal`}
              logo={vivek}
              position={`VP - Viveks.com`}
              details={`It has a lot of features including live call, qr code , video feedbacks , payment options and live video shopping and this definitely give us better customer experience and better conversions. SaleAssist's support system is really very good. Compare to other brands saleassist is better of. I would recommend to give it a try.`}
              video={"https://static.saleassist.ai/testimonials/Viveks.mp4"}
            />
            <VideoText
              title={`I am Ashish Roy, i head the direct business intelligence from Blox. `}
              ByVideo={`Ashish Roy`}
              logo={Boxlog}
              position={`Head of Sales & BI -  Blox.xyz`}
              details={`I want to share feedback about the experience so far with SaleAssist platform, its really very very convenient for us and our customers as well. In today's time everyone look at convenience and how fast i can move to the next level and SaleAssist really helps our customers to come to that level.  Online briefing of products becomes very very easy with SaleAssist. One of the best feature is AI chat which is really easy. Kudos to the team ! There are lots of changes being done in very short period of time. We are looking forward for such platform to continue. All the best to the SaleAssist TEAM.`}
              video={"https://static.saleassist.ai/testimonials/Blox.xyz.mp4"}
            />
          </Slider>
        </div>
      </>
    );
  }
}
