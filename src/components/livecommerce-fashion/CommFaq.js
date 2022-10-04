import React, { useState } from 'react'
import pulse from "../../assests/pricing/Add.svg";
import minus from "../../assests/pricing/minus.svg";
import faqData from '../../faqData/liveCommerce.json'
const CommFaq = () => {
    const [tabActive, settabActive] = useState(0);
    const accoding = (value) => {
        if (value === tabActive) {
          settabActive(0);
        } else {
          settabActive(value);
        }
      }
  return (
    <div className='safemeet-container commFaq'>
          <h2 className='CommerceHeading'>Frequently Ask Questions?</h2>    
          <div className="faqAccordian">
            {faqData.map((faqList, index) => (
                <div className={`accordingBox ${tabActive ===index+1?'active':''}`} onClick={()=>accoding(index+1)}>
                <h2>{ faqList.question}<span className='addIcon'><img src={tabActive === index+1?minus:pulse} alt="expend"/> </span></h2>
                <div className="accdingSpan">
                    {faqList.ans}
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CommFaq