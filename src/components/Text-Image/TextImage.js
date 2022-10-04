import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TextImage extends Component {
  render() {
    const { title, sub_title, details, btn, video, path, poster } = this.props;
    return (
      <div className="safemeet-container safemeet-text-row safemeet-mg-t-5">
        <div className="safemeet-text-row-col-2"></div>
        <div className="safemeet-text-row-col-1">
          <div className="title-head safemeet-sm-mg-b-2">
            <h1 className="title">{title}</h1>
            <h1>{sub_title}</h1>
          </div>
          <p className="safemeet-sm-mg-b-2">{details}</p>
          <Link to={path}>
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
              {btn}
            </button>
          </Link>
        </div>
        <div
          className="safemeet-text-row-col-2"
          style={{
            marginRight: "auto",
          }}
        >
          <div>
            <video
              preload="auto"
              poster={poster}
              playsInline
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your Browser doesnot support the video tag
            </video>
          </div>
        </div>
        <div className="safemeet-text-row-col-1"></div>
      </div>
    );
  }
}
