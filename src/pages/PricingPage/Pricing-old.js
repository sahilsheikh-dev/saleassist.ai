import React, {Component} from 'react'
import PricingCard from '../../components/Pricing-Card/PricingCard'
import Layout2 from '../../layout/Layout2'
import Right from "../../assests/right-wrong/right.svg";
import WhiteRight from '../../assests/right-wrong/right white.svg';
import Wrong from "../../assests/right-wrong/wrong.svg";
import WhiteWrong from "../../assests/right-wrong/wrong white.svg";

export default class Pricing extends Component {
  render() {

    const Free = [
      {
        image: Right,
        wimage: WhiteRight,
        details: `10 Free Conversation per Month`
      }, {
        image: Wrong,
        wimage: WhiteWrong,
        details: `No Overage`
      }, {
        image: Wrong,
        wimage: WhiteWrong,
        details: `No Call Recording`
      }, {
        image: Wrong,
        wimage: WhiteWrong,
        details: `No Live Streaming`
      }
    ];

    const Standard = [
      {
        image: Right,
        wimage: WhiteRight,
        details: `100 Free Conversation
          per Month`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Overage at 10¢ per Conversation`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Call Recording on all calls`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Live Streaming at 10¢ per
          Minutes per Channel`
      }
    ];

    const Popular = [
      {
        image: Right,
        wimage: WhiteRight,
        details: `1000 Free Conversation
          per Month`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Overage at 9¢ per Conversation`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Call Recording on all calls`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Live Streaming at 9¢ per
          Minutes per Channel`
      }
    ];

    const Premium = [
      {
        image: Right,
        wimage: WhiteRight,
        details: `10000 Free Conversation
          per Month`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Overage at 8¢ per Conversation`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Call Recording on all calls`
      }, {
        image: Right,
        wimage: WhiteRight,
        details: `Live Streaming at 8¢ per
          Minutes per Channel`
      }
    ];
    return (
      <React.Fragment>
        <Layout2>
          <div className="safemeet-container safemeet-pricing safemeet-text-center">
          <div>
              <h1 style={{marginBottom:"10px"}}>Simple, transparent pricing</h1>
              <p>Choose the package that suits you</p>
            </div>
            <div className="safemeet-pricing-row">
              <PricingCard pricingDetails={Free} Name="Free"/>
              <PricingCard pricingDetails={Standard} Name="Standard" Price="-"/>
              <PricingCard
                classNameCard="safemeet-pricing-card-blue"
                classNameTitle="safemeet-pricing-card-title-white"
                classNamePrice="safemeet-pricing-card-price-white"
                classNameDetails="safemeet-pricing-card-details-white"
                classNameButton="safemeet-pricing-card-button-white"
                pricingDetails={Popular}
                Name="Popular"
                Price="-"
                active={true}/>
              <PricingCard pricingDetails={Premium} Name="Premium" Price="-"/>
            </div>
            <div className="safemeet-pricing-custom-pricing safemeet-text-right">
              <h1 className="safemeet-text-center">Your business is unique and so are the
                challenges you face. That's why we'll help you identify the tools that fit your
                needs and build a package that's tailored to help your business succeed.
              </h1>
            </div>
          </div>
        </Layout2>
      </React.Fragment>
    )
  }
}
