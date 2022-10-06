import React, { Component } from "react";
import LifeCycleCard from "../Life-Cycle-Card/LifeCycleCard";
import LifeCycleCard2 from "../LifeCycleCard2/LifeCycleCard2";
//customer acquisition
import VideLink from "../../assests/life-cycle/customer-aq/video-link.svg";
import LiveStream from "../../assests/life-cycle/customer-aq/live-stream.svg";
import VideQrCode from "../../assests/life-cycle/customer-aq/video-qr-code.svg";
import DeepFakeVideo from "../../assests/life-cycle/customer-aq/deep-fake-video.svg";

//customer engagement
import VideScheduleBtn from "../../assests/life-cycle/customer-engag/video-schedule-btn.svg";
import VideoWidget from "../../assests/life-cycle/customer-engag/video-widget.svg";
import VideFrames from "../../assests/life-cycle/customer-engag/video-frames.svg";
import ExitIntents from "../../assests/life-cycle/customer-engag/exit-intents.svg";
import Nudges from "../../assests/life-cycle/customer-engag/nudges.svg";

//customer support
import AiChat from "../../assests/life-cycle/customer-support/ai-chat.svg";
import LiveAssistant from "../../assests/life-cycle/customer-support/live-assistance.svg";
import Call from "../../assests/life-cycle/customer-support/call.svg";

//customer insights
import VideoFeed from "../../assests/life-cycle/customer-insights/video-feed.svg";
import Senti from "../../assests/life-cycle/customer-insights/sentiment.svg";
import Facial from "../../assests/life-cycle/customer-insights/facial.svg";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LifeCycleIndex: 0,
      CurrentIndex: window.innerWidth < 1024 ? null : 0,
      sign: "+",
    };
  }

  handleClick = (index) => {
    if (this.state.CurrentIndex === index && window.innerWidth < 1024) {
      this.setState({ LifeCycleIndex: null, CurrentIndex: null });
      this.setState({ sign: "+" });
    } else {
      this.setState({ LifeCycleIndex: index, CurrentIndex: index });
      this.setState({ sign: "-" });
    }
  };

  toggleActiveStylesH4 = (index) => {
    if (this.state.CurrentIndex === index) {
      return "active-class-h4";
    } else {
      return "";
    }
  };

  toggleActiveStylesP = (index) => {
    if (this.state.CurrentIndex === index) {
      return "active-class-p";
    } else {
      return "";
    }
  };
  render() {
    const LifeCycle = [
      {
        title: "Customer Acquisition",
        details: "Attract new customers and retain the existing ones",
        signp: "+",
        signn: "-",
      },
      {
        title: "Customer Engagement & sales",
        details: "Engage Customer via SaleAssist & improve Sales of product.",
        signp: "+",
        signn: "-",
      },
      {
        title: "Customer Support",
        details:
          "Assist customers in making cost effective and correct use of a product.",
        signp: "+",
        signn: "-",
      },
      {
        title: "Customer Insights",
        details:
          "Increase the effectiveness of a product, sales and service for the consumer.",
        signp: "+",
        signn: "-",
      },
    ];

    const CustomerAq = [
      {
        image: VideLink,
        title: "Video Link",
        details: "Click & Connect",
      },
      {
        image: VideQrCode,
        title: "Video QR",
        details: "Scan & Connect ",
      },
      {
        image: LiveStream,
        title: "Live Streaming",
        details: "Live Broadcast & Sell.",
      },
      {
        image: DeepFakeVideo,
        title: "Deep Fake Video",
        details: "Create AI Videos on-demand",
      },
    ];

    const CustomerEngagement = [
      {
        image: VideScheduleBtn,
        title: "Video Schedule button",
        details: "Schedule Meeting on-Demand",
      },
      {
        image: VideoWidget,
        title: "Video widget",
        details: "Floating CTA on Websites.",
      },
      {
        image: VideFrames,
        title: "Video Frames",
        details: "Embedded Video Frames",
      },
      {
        image: ExitIntents,
        title: "Exit intents",
        details: "Engage customers on Exit",
      },
      {
        image: Nudges,
        title: "Nudges",
        details: "Gentle Reminders & Notifications",
      },
    ];

    const CustomerSupport = [
      {
        image: AiChat,
        title: "AI Chat",
        details: "Human like chat",
      },
      {
        image: LiveAssistant,
        title: "Live assistance button & QR Codes",
        details: "QR Code for post sales support",
      },
      {
        image: Call,
        title: "Click to call cloud telephony",
        details: "One click outbound calling",
      },
    ];

    const CustomerInsights = [
      {
        image: VideoFeed,
        title: "Video Feedback",
        details: "Record Video Feedback Live.",
      },
      {
        image: Senti,
        title: "Sentiment Analysis",
        details: "Get conversations insights .",
      },
      {
        image: Facial,
        title: "Facial emotional analytics",
        details: "Know your customer satisfaction.",
      },
    ];
    return (
      <div
        className="safemeet-container safemeet-mg-b-5"
        style={{
          // background: "#FFE6CC",
          marginTop: "50px",
          padding: "20px 0 70px 0",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0) 0%, rgb(240, 227, 255) 5%, rgb(240, 227, 255) 95%, rgba(0,0,0,0)",
        }}
      >
        <div
          className="safemeet-container safemeet-mg-t-5 safemeet-customer-lifecycle"
          style={{
            background: "#F0E3FF",
          }}
        >
          <h1 className="safemeet-text-center">
            Checkout our all offerings covering complete lifecycle of customer
          </h1>
          <div
            className="safemeet-customer-lifecycle-row lifecycle-row-ms"
          >
            <div className="safemeet-customer-lifecycle-row-col-1">
              {LifeCycle.map((item, index) => {
                return (
                  <LifeCycleCard
                    key={index}
                    index={index}
                    CurrentIndex={this.state.CurrentIndex}
                    handleClick={() => this.handleClick(index)}
                    className1={this.toggleActiveStylesH4(index)}
                    className2={this.toggleActiveStylesP(index)}
                    title={item.title}
                    signn={item.signn}
                    signp={item.signp}
                    CustomerAq={CustomerAq}
                    LifeCycleIndex={this.state.LifeCycleIndex}
                    CustomerEngagement={CustomerEngagement}
                    CustomerInsights={CustomerInsights}
                    CustomerSupport={CustomerSupport}
                    details={item.details}
                  />
                );
              })}
            </div>
            <div className="safemeet-customer-lifecycle-row-col-2">
              {this.state.LifeCycleIndex === 0 &&
                CustomerAq.map((item, index) => {
                  return (
                    <LifeCycleCard2
                      key={index}
                      image={item.image}
                      title={item.title}
                      details={item.details}
                      alt={item.title}
                    />
                  );
                })}

              {this.state.LifeCycleIndex === 1 &&
                CustomerEngagement.map((item, index) => {
                  return (
                    <LifeCycleCard2
                      key={index}
                      image={item.image}
                      title={item.title}
                      details={item.details}
                      alt={item.title}
                    />
                  );
                })}

              {this.state.LifeCycleIndex === 2 &&
                CustomerSupport.map((item, index) => {
                  return (
                    <LifeCycleCard2
                      key={index}
                      image={item.image}
                      title={item.title}
                      details={item.details}
                      alt={item.title}
                    />
                  );
                })}

              {this.state.LifeCycleIndex === 3 &&
                CustomerInsights.map((item, index) => {
                  return (
                    <LifeCycleCard2
                      key={index}
                      image={item.image}
                      title={item.title}
                      details={item.details}
                      alt={item.title}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
