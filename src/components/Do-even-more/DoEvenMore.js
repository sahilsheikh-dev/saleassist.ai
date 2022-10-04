import React, {Component} from 'react';
import DoEvMoCard from '../Do-even-more-Card/DoEvMoCard';
import Slider from "react-slick";
import Review from "../../assests/sub-banner-icons/icons/review.svg";
import ViChat from "../../assests/sub-banner-icons/icons/video-chat.svg";
import Campaign from "../../assests/sub-banner-icons/icons/campaign.svg";
import Nudges from "../../assests/sub-banner-icons/icons/nudges.svg";
import Inbox from "../../assests/sub-banner-icons/icons/inbox.svg";


export default class DoEvenMore extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3.6,
      slidesToScroll: 1,
      swipeToSlide: true
    };
    return (
      <React.Fragment>
        <div className="safemeet-do-even-more safemeet-container">
          <h1>Do even more with these tools.</h1>
          <div>
            <Slider {...settings}>
              <DoEvMoCard span="Reviews" image={Review} title="Proper reviews with feeling." btn="Learn more" path="/video-review">
                <div className="msg-box">Thank you for selecting us. Would you mind leaving a
                  review using the link below?</div>
                <div className="msg-box">Leave a review!
                  <p>
                    <a href="https://shri.co/634f7" className="msg-box-link">https://shri.co/634f7</a>
                  </p>
                </div>
              </DoEvMoCard>

              <DoEvMoCard span="Video chat" image={ViChat} title="Send a request and get timing. That’s it." btn="Learn more" path="/video-chat">
                <div className="meeting-schedule">
                  Meeting Schedule @1pm
                </div>
                <div className="btns">
                  <div className="accept">
                    accept
                  </div>
                  <div className="change-time">
                    change time
                  </div>
                </div>
              </DoEvMoCard>

              <DoEvMoCard span="Campaigns" image={Campaign} title="Manage promotions with ease." btn="Learn more" path="/campaign">
                <div className="msg-box">Hey Shri 👋 you are having a special offer of 10%
                  saving with this link: cdmp.co/6dfr7</div>
              </DoEvMoCard>

              <DoEvMoCard span="Nudges" image={Nudges} title="Gentle reminder,offers and Highlighted infomation" btn="Learn more" path="/nudges">
                <div className="msg-box-left">Only 5 stocks Available!</div>
              </DoEvMoCard>

              <DoEvMoCard span="Inbox" image={Inbox} title="Every conversation in one place." btn="Learn more" path="/inbox">
                <div className="msg-box">Hello Shri 👋 Have a questions? Ask me!</div>
              </DoEvMoCard>
            </Slider>
          </div>
        </div>
      </React.Fragment>
    )
  }
}