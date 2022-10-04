import React, { useState } from 'react'
import pulse from "../../assests/pricing/Add.svg";
import minus from "../../assests/pricing/minus.svg";
const Faq = ({faqData}) => {
  const [tabActive, settabActive] = useState(0);
  const accoding = (value) => {
    if (value === tabActive) {
      settabActive(0);
    } else {
      settabActive(value);
    }
  }
  
  return (
      <>
        <section className="faq">
            <div className="container">
              <div className="faqBack">
                <h3>FAQ</h3>
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
            </div>
          </section>
      </>
  )
}

export default Faq