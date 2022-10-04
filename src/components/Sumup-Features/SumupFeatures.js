import React, {Component} from 'react';
import RocketIllution from "../../assests/sumup-features/rocket illustration.png";
import AiChat from "../../assests/sub-banner-icons/ai icon.png";
import CoBrowsingIcon from "../../assests/sub-banner-icons/co browsing icon.png";
import NudgesIcon from "../../assests/sub-banner-icons/nudges icon.png";
import VideoChatIcon from "../../assests/sub-banner-icons/video chat icon.png";
import LiveChatIcon from "../../assests/sub-banner-icons/live chat icon.png";
import VideoReviewIcon from "../../assests/sub-banner-icons/video review icon.png";
import QRCodeIcon from "../../assests/sub-banner-icons/qr icon.png";
import CamapignIcon from "../../assests/sub-banner-icons/campaign.png";

export default class SumupFeatures extends Component {
  render() {
    return (
      <div className="safemeet-container saleassist-sumup-features">
        <h2>Powerful on their own.</h2>
        <h2>Even better together.</h2>
        <div className="saleassist-sumup-features-flex">
          <div className="saleassist-sumup-features-flex-col-1">
            <div className="saleassist-sumup-features-flex-col-1-inner-flex">

              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={AiChat} alt="aichat"/>
                </div>
                <div className="text-container">
                  <h4>AI Conversation</h4>
                </div>
              </div>
              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={CoBrowsingIcon} alt="aichat"/>
                </div>
                <div className="text-container">
                  <h4>Co-browsing
                  </h4>

                </div>
              </div>
              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={NudgesIcon} alt="aichat"/>
                </div>
                <div className="text-container">
                  <h4>Nudge
                  </h4>
                </div>

              </div>
              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={VideoChatIcon} alt="aichat"/>
                </div>
                <div className="text-container">
                  <h4>Video Chat
                  </h4>
                </div>
              </div>

            </div>
            <div className="saleassist-sumup-features-flex-col-1-inner-flex">
              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={LiveChatIcon} alt="live chat icon"/>
                </div>
                <div className="text-container">
                  <h4>Live Chat
                  </h4>
                </div>
              </div>
              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={VideoReviewIcon} alt="video review icon"/>
                </div>
                <div className="text-container">
                  <h4>Video Review
                  </h4>
                </div>
              </div>
              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={QRCodeIcon} alt="qr code icon"/>
                </div>
                <div className="text-container">
                  <h4>QR Code
                  </h4>
                </div>
              </div>
              <div className="saleassist-sumup-features-flex-col-1-inner-flex-flex">
                <div className="image-container">
                  <img src={CamapignIcon} alt="camapaign icon"/>
                </div>
                <div className="text-container">
                  <h4>Campaign
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="saleassist-sumup-features-flex-col-2">
            <img src={RocketIllution} alt="rocket-illution"/>
          </div>
        </div>
        <hr className="safemeet-sumup-hr"></hr>
      </div>
    )
  }
}
