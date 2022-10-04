import React from 'react'
import Checkmark from "../../assests/pricing/Checkmark.svg";
import AICON from "../../assests/pricing/AICON.svg";
import AddRed from "../../assests/pricing/AddRed.svg";
const pricingCardAll = ({ priceTitle, priceDisc,classList,Added,Addon,Na,linkLi }) => {
  const StandFeatureAdd = [...Array(Added)].map((e, i) => <li className="busterCards" key={i}><span className="featureCheck"><img src={Checkmark} alt="check"/></span></li>);
    const StandFeatureAddon = [...Array(Addon)].map((e, i) => <li className="busterCards" key={i}><span className="featureCheck"><img src={AICON } alt="check"/></span></li>);
    const StandFeatureNa = [...Array(Na)].map((e, i) => <li className="busterCards" key={i}><span className="featureCheck"><img src={AddRed} alt="check" /></span></li>);
  return (
    <>
          <div className={`priceBoxmain ${classList?classList:null}`}>
                <h4>{priceTitle}</h4>
                <p>{priceDisc}</p>
                <a className="btn connectBtn" href='https://my.saleassist.ai'>
                  Get Started
                </a>
                <ul className='seeAllList'>
                  <li>{linkLi}</li>
                  {StandFeatureAdd}
                  {StandFeatureAddon}
                  {StandFeatureNa}
              </ul>
              
            </div>
    </>
  )
}

export default pricingCardAll