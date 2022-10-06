import React, { Component } from "react";
import Bazaar from "../../assests/safemeet-clients/bazaar.png";
import Bhas from "../../assests/safemeet-clients/bhas.png";
import Inroys from "../../assests/safemeet-clients/inroys.webp";
import Megastores from "../../assests/safemeet-clients/megastores.png";
import Mintifi from "../../assests/safemeet-clients/mintifi.png";
import AutoHangar from "../../assests/safemeet-clients/autohangar.png";
import Advantage from "../../assests/safemeet-clients/advantage.jpg";
import Ahujasons from "../../assests/safemeet-clients/ahujasons.jpg";
import Blox from "../../assests/safemeet-clients/blox.jpg";
import Em from "../../assests/safemeet-clients/em.jpg";
import Grt from "../../assests/safemeet-clients/grt.jpg";
import Huse from "../../assests/safemeet-clients/huse.jpg";
import Omaxe from "../../assests/safemeet-clients/omaxe.jpg";
import Orra from "../../assests/safemeet-clients/orra.jpg";
import Ottomate from "../../assests/safemeet-clients/ottomate.jpg";
import Rophocure from "../../assests/safemeet-clients/rophocure.jpg";
import Sotc from "../../assests/safemeet-clients/sotc.jpg";
import Venturex from "../../assests/safemeet-clients/venturex.jpg";
import Viveks from "../../assests/safemeet-clients/viveks.jpg";
import Slider from "react-slick";
import { fontStyle } from "@mui/system";
export default class Showcase extends Component {
  render() {
    const safemeet_client = [Megastores, Viveks, Mintifi, Bhas, Bazaar, Inroys];
    const clients = [
      {
        image: Megastores,
        link: "https://www.megastores.com/",
      },
      {
        image: Viveks,
        link: "https://viveks.com/",
      },
      {
        image: Mintifi,
        link: "https://www.mintifi.com/",
      },
      {
        image: Bhas,
        link: "http://bhashabharat.com/",
      },
      {
        image: Bazaar,
        link: "http://hashtagbazaar.com/",
      },
      {
        image: Inroys,
        link: "http://inroys.com/",
      },
      {
        image: AutoHangar,
        link: "https://autohangar.com/",
      },
      {
        image: Advantage,
        link: "https://www.autohangaradvantage.com/",
      },
      {
        image: Ahujasons,
        link: "https://ahujasons.com/",
      },
      {
        image: Blox,
        link: "https://blox.xyz/",
      },
      {
        image: Em,
        link: "https://emotorad.com/",
      },
      {
        image: Grt,
        link: "https://www.grtjewels.com/",
      },
      {
        image: Huse,
        link: "https://huse.co.in/",
      },
      {
        image: Omaxe,
        link: "https://www.omaxe.com/",
      },
      {
        image: Orra,
        link: "https://www.orra.co.in/",
      },
      {
        image: Ottomate,
        link: "https://www.ottomate.com/",
      },
      {
        image: Rophocure,
        link: "https://www.raphacure.com/",
      },
      {
        image: Sotc,
        link: "https://www.sotc.in/",
      },
      {
        image: Venturex,
        link: "https://venturex.com/",
      },
    ];
    const settings = {
      dots: true,
      arrows: false,
      variableWidth: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const ClientLogo = clients.map((item, index) => {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <img src={item.image} alt="safemeet clients" />
        </a>
      );
    });
    return (
      <>
        {/* <div className="safemeet-container">
          <div className="homeLogo">{ClientLogo}</div>
        </div> */}
        <div className="safemeet-showcase">
          <div className="safemeet-container">
            <h1 className="safemeet-text-center showcase-head">Our Clients</h1>
            <h2 className="safemeet-text-center heading-margin showcase-subhead">
              Many brands are already using Saleassist to improve their customer
              experience
            </h2>
          </div>
          <div className="safemeet-container safemeet-showcase-row">
            <div className="slick-slider">
              <Slider {...settings}>
                {clients.map((item, index) => {
                  return (
                    <a href={item.link} target="_blank" key={index}>
                      <img src={item.image} alt="safemeet clients" />
                    </a>
                  );
                })}
              </Slider>
            </div>
          </div>

          {/* <div className="safemeet-container safemeet-showcase-row safemeet-showcase-video-section">
            <div className="safemeet-showcase-row-col-1 videoBox">
              <iframe
                style={{
                  border: "0",
                }}
                width="100%"
                height="420px"
                src="https://www.youtube.com/embed/uW4n25Pj9wc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="safemeet-showcase-row-col-2">
              <div
                style={{
                  margin: "auto 0",
                }}
              >
                <h2>The #1 Virtual Shopping Solution For Your Business!</h2>
                <h1>You need Saleassist</h1>
                <p
                  className="safemeet-mg-b-1"
                  style={{
                    lineHeight: "24px",
                  }}
                >
                  Video is the next big thing to doing sales in person!Live
                  Shopping & Live Streaming based sales is becoming mainstream
                  for any business.Live Shopping & Live Streaming based sales is
                  becoming mainstream for any business.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}
