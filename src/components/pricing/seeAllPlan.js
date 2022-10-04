import React from 'react'
import Checkmark from "../../assests/pricing/Checkmark.svg";
import AICON from "../../assests/pricing/AICON.svg";
import AddRed from "../../assests/pricing/AddRed.svg";
import PriceCard from "./../../components/pricing/pricingCardAll"
const seeAllPlan = ({minusWhite,hideTable,activeClass,shortEE}) => {
    const allFet = [
        "Number of Agents","Welcome Video","Video QR code/Link","AI Chat","Live Chat","Video Message","Audio Message","Number of Conversations","Time Limit on Conversations","Number of Widgets/Button","Nudges","Queue Management","Receive Payments","Agent Analytics","Mobile App","Custom Lead capture form","Role Based Permissions","Agent Escalation/Handover","Menu/IP based routing","API & Webhooks","Video Sales Training","Leads Export","Custom Feature","Dedicated Support","Video Call/ Meet","Audio Call/Meet","Live Streaming","SMS / OTP","Whatsapp","AI Video","Outbound Call inc recording","Video Recording"
    ]
    
    const film = allFet.filter((item, idx) => idx < shortEE).map(item => {
        return (<li key={item.id}>{item }</li>)
     });
  return (
      <>
        <section className={`priceSection showAll ${activeClass?'active':null}`} id="allPlan">
            <div className="container">
                <div className="priceBox">
                    <div className="trialBox">
                        <div className="symbleList">
                            <ul className="featuresSymble">
                                <span>Features Symbol</span>
                                  <li><img src={Checkmark} alt={ Checkmark}/> included</li>
                                  <li><img src={AddRed} alt={ AddRed}/> Add-on</li>
                                  <li><img src={ AICON} alt={ AICON}/> N/A</li>
                            </ul>	
                        </div>
                        <ul className="itemAddlist">
                            {film}
                        </ul>
                    </div>
                    <div className="priceTable">
                    <PriceCard
                      priceTitle="Standard"
                      priceDisc="Ideal for small businesses who are getting started or for the self-employed"
                        Added={15}
                        Addon={8}
                              Na={8}
                              linkLi="Only 2 Agents"
                    />
                    
                   <PriceCard
                      priceTitle="Popular"
                      priceDisc="Perfect for businesses that are expanding,online and in person."
                      
                              classList="PopularPrice"
                              Added={21}
                        Addon={2}
                              Na={8}
                              linkLi="Unlimited Seats"
                    />
                     <PriceCard
                      priceTitle="Premium"
                      priceDisc="All the advanced business solutions a mature business needs."
                      linkLi="Unlimited Seats"
                              Added={23}
                        Addon={0}
                        Na={8}
                    />
                    </div>
                  </div>
                  <button className="btn seeAllPlan btnBlack" onClick={hideTable}><span className='addIcon'><img src={ minusWhite} alt="right arrow"/></span> HIDE ALL PLAN FEATURES</button>
            </div>
        </section>
      </>
  )
}

export default seeAllPlan