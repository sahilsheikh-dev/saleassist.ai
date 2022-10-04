import React, {Component} from 'react';
import NavbarCard from '../Navbar-Card/NavbarCard';
import AiChat from "../../assests/navbar-card-icons/AIchat.svg";
import LiveChat from "../../assests/navbar-card-icons/LiveChat.svg";
import Nudges from "../../assests/navbar-card-icons/Nudges.svg";
import One2Many from "../../assests/navbar-card-icons/One2Many.svg";
import One2One from "../../assests/navbar-card-icons/One2One.svg";
import QRcode from "../../assests/navbar-card-icons/QRcode.svg";
import VideoChat from "../../assests/navbar-card-icons/VideoChat.svg";
import VideoReview from "../../assests/navbar-card-icons/VideoReview.svg";
import Campaign from "../../assests/navbar-card-icons/Campaign.svg";
import CoBrowsing from "../../assests/navbar-card-icons/co-browsing.svg";
import {Link} from "react-router-dom";

export default class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="safemeet-navitem-item">
          <div className="safemeet-container safemeet-navitem-item-row">
            <div className="safemeet-navitem-item-row-col-1">
              <div className="safemeet-navitem-item-row-col-1-1">
                <Link to="/ai-chat?1" className="flex-1">
                  <NavbarCard
                    image={AiChat}
                    title="AI Conversations"
                    details={`Automating customer service is a breeze.`}/>
                </Link>
                <Link to="/live-chat?1" className="flex-1">
                  <NavbarCard
                    image={LiveChat}
                    title={`LIVE CHAT`}
                    details={`The future of support is conversational.`}/>
                </Link>
                <Link to="/qr-code?1" className="flex-1">
                  <NavbarCard
                    image={QRcode}
                    title={`QR CODE`}
                    details={`Scan and watch the Video.`}/>
                </Link>
              </div>
              <div className="safemeet-navitem-item-row-col-1-2">
                <Link to="/video-chat?1" className="flex-1">
                  <NavbarCard
                    image={VideoChat}
                    title={`VIDEO CHAT`}
                    details={`In-person visits, from a distance.`}/>
                </Link>
                <Link to="/nudges?1" className="flex-1">
                  <NavbarCard
                    image={Nudges}
                    title={`NUDGES`}
                    details={`Gentle reminder and offers.`}/>
                </Link>
                <Link to="/campaign" className="flex-1">
                  <NavbarCard
                    image={Campaign}
                    title={`CAMPAIGN PAGES`}
                    details={`Manage promotions with ease.`}/>
                </Link>
              </div>
              <div className="safemeet-navitem-item-row-col-1-3">
                <Link to="/co-browsing?1" className="flex-1">
                  <NavbarCard
                    image={CoBrowsing}
                    title={`CO-BROWSING`}
                    details={`Browse together buy forever.`}/>
                </Link>
                <Link to="/video-review?1" className="flex-1">
                  <NavbarCard
                    image={VideoReview}
                    title={`VIDEO REVIEW`}
                    details={`Proper reviews with feeling.`}/>
                </Link>
                <Link className="btn-try-free-version-link" to={{ pathname: "https://my.saleassist.ai/" }} target='_parent' rel="noopener noreferrer"><button className="safemeet-btn">TRY FREE VERSION</button></Link>
              </div>
            </div>
            <div className="safemeet-navitem-item-row-col-2">
              
                <Link to="/one-to-one?1" className="safemeet-navitem-item-row-col-2-1 ">
                  <NavbarCard
                    image={One2One}
                    title={`ONE-TO-ONE`}
                    details={`Interactive video shopping between one customer and your sales agent.`}/>
                </Link>
              
              
                <Link to="/one-to-many?1" className="safemeet-navitem-item-row-col-2-2">
                  <NavbarCard
                    image={One2Many}
                    title={`ONE-TO-MANY`}
                    details={`A powerful add-on that converts. easy-to-use on any platform.`}/>
                </Link>
             
                <div className="safemeet-navitem-item-row-col-2-3">
                <Link to="/demo"><button className="safemeet-btn">
                BOOK A LIVE DEMO
                </button></Link>
                </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}
