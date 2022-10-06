import React, { Component } from "react";
import OnetoOnePoster from "../../assests/one-to-one/One to One.webp";
import { Link } from "react-router-dom";

export default class ImageText extends Component {
  render() {
    const { path } = this.props;
    return (
      <div
        className="safemeet-container safemeet-text-row safemeet-mg-t-5"
        style={{
          // background: "#FFE6CC",
          padding: "70px 0",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0) 0%, rgb(240, 227, 255) 5%, rgb(240, 227, 255) 95%, rgba(0,0,0,0)",
        }}
      >
        <div className="safemeet-text-row-col-1 img-txt-col-1"></div>
        <div className="safemeet-text-row-col-2 img-txt-col-1">
          <video
            preload="auto"
            poster={OnetoOnePoster}
            playsInline
            autoPlay
            loop
            muted
          >
            <source
              src="https://sawidget.azureedge.net/one-to-one.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          className="safemeet-text-row-col-1 img-txt-col-2"
          style={{
            margin: "30px 0",
          }}
        >
          <div className="title-head safemeet-sm-mg-b-2">
            <h1>ONE-TO-ONE</h1>
            <h1 className="title">VIRTUAL SHOPPING</h1>
          </div>
          <p
            className="safemeet-sm-mg-b-2 margin-auto padding-img-text"
          >
            Give retail store like personalized and assisted shopping experience
            with live One-On-One Video chat
          </p>
          {path ? (
            <Link className="margin-auto" to={path}>
              <button
                className=""
                style={{
                  padding: "10px 18px",
                  fontSize: "18px",
                  background: "#000000",
                  color: "#FFFFFF",
                  border: "1px solid black ",
                }}
              >
                Explore the Feature
              </button>
            </Link>
          ) : (
            <button className="safemeet-btn-3">Explore the Feature</button>
          )}
        </div>
        <div className="safemeet-text-row-col-1 img-txt-col-2"></div>
      </div>
    );
  }
}
