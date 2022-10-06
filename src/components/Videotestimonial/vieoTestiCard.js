import React, { Component } from "react";
export default class VideoTestimonial extends Component {
  render() {
    const { title, details, video, ByVideo, position, logo } = this.props;
    return (
      <div className="sliderBox">
        <div className="TestVideo disable-mobile"></div>
        <div className="TestVideo disable-mobile"></div>
        <div className="TestVideo disable-mobile"></div>
        <div className="TestVideo disable-mobile"></div>
        <div className="sliderText">
          <img src={logo} height="20" alt={logo} />
          <h3>
            {ByVideo} ({position})
          </h3>
          <p>{details}</p>
          <p className="fontBold textRight">{}</p>
          <p className="fontBold textRight"></p>
        </div>

        <div className="TestiVideo">
          <video preload="auto" poster="" controls playsInline autoPlay muted>
            <source src={video} type="video/mp4" />
            Your Browser doesnot support the video tag
          </video>
        </div>
        <div className="TestiVideo disable-mobile"></div>
      </div>
    );
  }
}
