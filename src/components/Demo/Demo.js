import React, { Component } from "react";
import Barcode from "../../assests/barcode/barcode.webp";
import { Link } from "react-router-dom";

export default class Demo extends Component {
  render() {
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
          className="safemeet-demo safemeet-mg-t-5"
          style={{
            background: "#F0E3FF",
          }}
        >
          <div className="safemeet-demo-row">
            <div className="safemeet-demo-row-col-1 demo-margin">
              <h1>
                Get started with
                <br />
                Live Shopping, Today
              </h1>
              <p>Your customers deserve it !</p>
              <h2 className="safemeet-sm-mg-b-2">
                SELL <span>FAST</span>, SELL <span>LIVE</span>
              </h2>
              <div>
                <button
                  onClick={() =>
                    (window.location.href = "https://my.saleassist.ai")
                  }
                  className="safemeet-btn-demo safemeet-btn-black safemeet-mg-r-2"
                >
                  GET STARTED
                </button>
                <Link to="/demo">
                  <button className="safemeet-btn-demo safemeet-btn-blue">
                    WATCH DEMO
                  </button>
                </Link>
              </div>
            </div>
            <div className="safemeet-demo-row-col-2 safemeet-text-center">
              <img src={Barcode} alt="bar code" />
              <h1
                style={{
                  marginTop: "15px",
                  fontSize: "clamp(1rem,2vw,1.4rem)",
                  fontStyle: "italic",
                  opacity: "0.6",
                }}
              >
                Scan QR code, start using saleassist
              </h1>
            </div>
            <div className="safemeet-demo-row-col-3">
              <Link to="//my.saleassist.ai">
                <button className="safemeet-btn-demo safemeet-btn-black safemeet-mg-r-2">
                  GET STARTED
                </button>
              </Link>
              <Link to="/demo">
                <button className="safemeet-btn-demo safemeet-btn-blue no-margin-btn">
                  WATCH DEMO
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
