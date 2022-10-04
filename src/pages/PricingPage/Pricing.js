import React, { Component } from 'react'
import Slider from "react-slick";
import Layout2 from '../../layout/Layout2'
import ourclient6 from "../../assests/pricing/logo1.png";
import ourclient1 from "../../assests/pricing/logo2.png";
import ourclient2 from "../../assests/pricing/logo3.png";
import ourclient3 from "../../assests/pricing/logo4.png";
import ourclient4 from "../../assests/pricing/logo5.png";
import ourclient5 from "../../assests/pricing/logo6.png";
import ourclient7 from "../../assests/pricing/logo7.jpg";
import ourclient8 from "../../assests/pricing/logo8.jpg";
import ourclient9 from "../../assests/pricing/logo9.jpg";
import ourclient10 from "../../assests/pricing/logo10.jpg";
import arrowWhiteright from "../../assests/pricing/arrowWhite-right.png";
import globe from "../../assests/pricing/globe.gif";
import arrow from "../../assests/pricing/arrow.png";
import Rectangle from "../../assests/pricing/Rectangle219.png";
import arrowRight from "../../assests/pricing/Arrow.svg";
import pulseWhite from "../../assests/pricing/AddWhite.svg";
import minusWhite from "../../assests/pricing/minusWhite.svg";
import Faq from "./../../components/pricing/faq"
import PriceCard from "./../../components/pricing/pricingCard"
import EarlyStages from "./../../components/pricing/earlyStage"
import NewLetter from "./../../components/pricing/newLetter"
import OurClient from "./../../components/pricing/ourClient"
import AllPlan from "./../../components/pricing/seeAllPlan"
import faqData from '../../faqData/Pricing.json'


export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlan: false,
      showFetu:32,
    }
  }
  
  showAllPlan = (value) => {
 
      this.setState({ showPlan: !this.state.showPlan})  
 
    
  }
  shortfeture = (value) => {
    // this.setState({ showPlan: !this.state.showPlan})
    this.setState({showFetu:value})
    // console.log(value);
  }
  


  render() {
    const clientLogo = [ ourclient7,ourclient8,ourclient9,ourclient10,ourclient6, ourclient1, ourclient2, ourclient3, ourclient4, ourclient5 ];
    const standardFeatures = [
      "Upto 5 Users","Upto 500 unique Leads Capture per month","Fortnightly Live Sell Show - Bid/Buy/Book","5 AI Videos","5 Shoppable Video Links","All Awesome Features","Unlimited Widget/Button","Unlimited Video / Audio Call","Custom Lead Capture Form","Group Video Shopping","Live Chat","Nudges","Mobile App"
    ];
    const popularFeatures = [
      "Upto 15 Users","Upto 2000 unique Lead Capture per month", "Weekly Live Sell Show - Bid/Buy/Book","15 AI Videos","15 Shoppable Video Links","Everything in Standard +", "Queue Management","Auto Video Testimonials Messages","Agent Analytics","Role Based Permissions","Auto Cart Abandonment Messages"
    ];
    const premiumFeatures = [
      "Upto 30 Users","Upto 10000 unique Lead Capture per month", "Daily Live Sell Show - Bid/Buy/Book","30 AI Videos","30 Shoppable Video Links","Everything in Popular +","Receive Payment","Agent Escalation/Handover","Menu/IP based routing","API & Webhooks","Dedicated support"
    ]
    
    const settings = {
      dots: true,
      arrows: false,
      variableWidth: true,
      className: "center",
      centerPadding: "10px",
      centerMode: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    }
    return (
      <React.Fragment>
        <Layout2>
          <div className="priceMainBox">
            <section className="priceSection topSection">
            <div className="container">
              <h2>Plans & Pricing</h2>
                <p className="subHeading">Build stronger customer relationships & increase sales with Saleassist</p>
              </div>
            </section>
          <section className="priceSection">
          <div className="container">
              <div className="priceBox">
                <div className="trialBox">
                  <div className="service">
                    <h3>Pay as you use</h3>
                    <ul>
                      <li>Video Meetings</li>
                      <li>Cloud Telephony</li>
                      <li>Recording</li>
                      <li>OTP</li>
                      {/* <li>Live Streaming</li>
                      <li>AI Video</li>
                      <li>Outbound Call</li>
                      <li>Video Recording</li> */}
                    </ul>
                    <p>Designed to scale with your business demand, Pay as you use</p>
                    <a className="trialBtn" href='/demo'>START FREE TRIAL !</a>
                      <span><figure><img src={ arrow} alt="14 Days Free Trail"/></figure>14 Days Free Trail,<br/>No Credit Card Required!</span>
                  </div>
                </div>
                  <div className="priceTable">
                    
                    <PriceCard
                      priceTitle="Standard"
                      priceDisc="Ideal for small businesses who are getting started or for the self-employed"
                      priceFeature={standardFeatures}
                      linkLi=""
                      classList=""
                    />
                    <PriceCard
                      priceTitle="Popular"
                      priceDisc="Perfect for businesses that are expanding,online and in person."
                      priceFeature={popularFeatures}
                      linkLi=""
                      classList="PopularPrice"
                    />
                    <PriceCard
                      priceTitle="Premium"
                      priceDisc="All the advanced business solutions a mature business needs."
                      linkLi=""
                      priceFeature={premiumFeatures}/>
                  </div>
                </div>
                {/* {this.state.showPlan?<button className="btn seeAllPlan mobile btnBlack" onClick={this.showAllPlan}><span className='addIcon'><img src={minusWhite} alt="right arrow" /></span> Hide ALL PLAN </button>:<button className="btn seeAllPlan btnBlack" onClick={this.showAllPlan}><span className='addIcon'><img src={pulseWhite} alt="right arrow" /></span> SEE ALL PLAN FEATURES</button>} */}
            </div>
            </section>
            <div className='container mobiletalbe'>
              <div className='sliderTable'>
              <Slider {...settings}>
                    <PriceCard
                      priceTitle="Standard"
                      priceDisc="Ideal for small businesses who are getting started or for the self-employed"
                      priceFeature={standardFeatures}
                      linkLi="2 Seats"
                      fetureListhow='16'
                    showTabs={this.showAllPlan}
                    filterfucnt={this.shortfeture}
                    />
                    <PriceCard
                      priceTitle="Popular"
                      priceDisc="Perfect for businesses that are expanding,online and in person."
                      priceFeature={popularFeatures}
                    linkLi="Everything in Standard +"
                    fetureListhow='22'
                    classList="PopularPrice"
                    showTabs={this.showAllPlan}
                    filterfucnt={this.shortfeture}
                    />
                    <PriceCard
                      priceTitle="Premium"
                      priceDisc="All the advanced business solutions a mature business needs."
                    linkLi="Everything in Popular +"
                    showTabs={this.showAllPlan}
                    fetureListhow='24'
                    filterfucnt={this.shortfeture}
                    priceFeature={premiumFeatures}/>

                </Slider>
                {/* <button className="btn seeAllPlan mobile btnBlack" onClick={this.showAllPlan}><span className='addIcon'><img src={pulseWhite} alt="right arrow" /></span> {this.showAllPlan?'SEE ALL PLAN FEATURES':'Hide ALL PLAN'} </button> */}
              </div>
            </div>
            <AllPlan activeClass={this.state.showPlan} shortEE={this.state.showFetu} hideTable={this.showAllPlan} minusWhite={minusWhite }/>
            <EarlyStages
              Rectangle={Rectangle}
              arrowRight={arrowRight}
            />
            <Faq faqData={faqData}
            />
          <NewLetter />
            <OurClient title='Trusted by many People in the' btn={true} margin={true} clientLogo={ clientLogo} arrowWhiteright={arrowWhiteright} globe={globe }/>
          </div>
        </Layout2>
      </React.Fragment>
    )
  }
}
