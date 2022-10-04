import React, { Component } from "react";
import Outlook from "../../assests/featured/Outlook.jpg";
import TechCircle from "../../assests/featured/techcircle.png";
import YourStory from "../../assests/featured/outlook img.webp";
// new
import Entrepreneur from "../../assests/featured/entrepreneur.png";

export default class NewsPaper extends Component {
  render() {
    const featuredby = [
      // {
      //     image: Outlook,
      //     alt:"Outlook",
      //     sub_title:"INNOVATION",
      //     desc:"Online Shops can up their game with real-time shopping assistants.",
      //     link:"https://www.outlookbusiness.com/enterprise/big-idea/online-shops-can-up-their-game-with-real-time-shopping-assistants-6237"
      // },
      {
        image: TechCircle,
        alt: "TechCircle",
        sub_title: "FEATURE",
        desc: "Meet the startups in the third cohort of...read more.",
        link: "https://www.techcircle.in/2021/01/22/meet-the-startups-in-the-third-cohort-of-100x-vc",
      },
      {
        image: YourStory,
        alt: "YourStory",
        sub_title: "INNOVATION",
        desc: "Online shops can up their game with real-time... read more.",
        link: "https://yourstory.com/2021/01/100xvc-startup-portfolio-investment-2021/amp",
      },
      {
        image: Entrepreneur,
        alt: "Enterpreneur",
        sub_title: "FEATURE",
        desc: "Will India Join The Global Live Commerce Rage?...read more.",
        link: "https://www.entrepreneur.com/article/377846",
      },
    ];
    return (
      <div className="safemeet-container safemeet-text-center safemeet-mg-t-5">
        <h1 className="safemeet-mg-b-2 title-partnership">Newsroom</h1>
        <div className="safemeet-newspaper">
          {featuredby.map((item, index) => {
            return (
              <div key={index} className="safemeet-newsroom-card">
                <a
                  href={item.link}
                  target="_saleassist"
                  style={{
                    borderRadius: "15px",
                  }}
                >
                  <img src={item.image} alt={item.alt} />
                  <h6>{item.sub_title}</h6>
                  <p>{item.desc}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
