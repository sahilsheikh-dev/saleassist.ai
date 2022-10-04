import React, { Component } from "react";
import OnlineCommerceImage from "../../assests/Card-Icons/OnlineCommerse.svg";
import SocialCommerceImage from "../../assests/Card-Icons/SocialCommerse.svg";
import OfflineCommerceImage from "../../assests/Card-Icons/OfflineCommerse.svg";
import Card from "../../components/Card/Card";

export default class CardHomePresent extends Component {
  render() {
    const CardContent = [
      {
        image: OnlineCommerceImage,
        title: "Digital Commerce",
        details: `Engage your site visitors over Video and convert traffic to revenue.`,
        bullet_points: [
          "Video Schedule Button",
          "Live Video Call Widgets",
          "Video Frames",
          "Nudges & Exit Intents",
          "Video Feedbacks",
          "AI Chat",
        ],
      },
      {
        image: SocialCommerceImage,
        title: "Social Commerce",
        details: `Live Stream on social channels use Video Links to initiate live conversations.`,
        bullet_points: [
          "Live Streaming",
          "Central Response Management",
          "Video QR",
          "Video Links",
        ],
      },
      {
        image: OfflineCommerceImage,
        title: "Physical Commerce",
        details: `Showcase & sell remotely without need to maintain an E-Commerce website.`,
        bullet_points: [
          "Video QR Code",
          "Video SMS Links",
          "Video Email Links",
          "Live Streaming",
          "Video Feedbacks",
          "Cloud Telephony",
        ],
      },
    ];
    return (
      <div className="safemeet-container safemeet-card-home-present-container safemeet-mg-t-5 safemeet-text-center">
        <h1>We are Omni-channel video commerce</h1>
        <div
          className="safemeet-card-wrapper"
          style={{
            margin: "0",
          }}
        >
          {CardContent.map((item, index) => {
            return (
              <div
                key={index}
                className=""
                style={{
                  margin: "0 auto",
                  boxShadow:
                    "0 10px 15px 0 rgba(140, 146, 172, 0.3), 0 10px 30px 0 rgba(140, 146, 172, 0.3)",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
              >
                <Card
                  className={`safemeet-card-${index + 1}`}
                  image={item.image}
                  title={item.title}
                  description={item.details}
                  bullet_points={item.bullet_points}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
