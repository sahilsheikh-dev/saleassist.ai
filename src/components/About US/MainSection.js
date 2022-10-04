import React, { Component } from 'react';
import AboutUsImage from "../../assests/about-us/aboutus.png";

export default class MainSection extends Component {
    render() {
        return (
            <div className="safemeet-container safemeet-about-us">
            <h2>Meet the all-in-one customer<br/>
              communications platform</h2>
              <h3>About Saleassist</h3>
            <div className="safemeet-about-us-container">
              <div className="safemeet-about-us-container-col-1">
                <p>Sale Assist is the leading live shopping SaaS company for engaging,
                  converting, and retaining customers. We utilise video as the foundation for
                  real-time virtual commerce, assisting companies in building live consumer
                  engagements by bridging the online-offline barrier.</p>
                <br/>
                <p>Our founders,{" "}
                  <b>Deep Malik</b>,{" "}
                  <b>Chetan Jangir</b>{" "}
                  and{" "}
                  <b>Ashish Nanotkar {" "}</b>
                  {" "} have vast expertise in retail innovation, Live Video engagement, Video sales &
                  support and Co-browsing. They launched Sale Assist after realizing the lack of
                  customer engagement as the key reason for poor sale conversions.</p>
                  <br/>
                <p>Using cloud-based interactive video commerce and live shopping software, we
                  increase the probability of sales conversions by accelerating the pre-purchase
                  experience of both new and existing customers. Many prominent companies in
                  retail, telemedicine, fashion, food and beverage, and other industries have
                  placed their faith in us.</p>
              </div>
              <div className="safemeet-about-us-container-col-2">
                <img src={AboutUsImage} alt=""/>
              </div>
            </div>
          </div>
        )
    }
}
