import React from 'react'

const pricingCard = ({ priceTitle, priceDisc, priceFeature,classList,linkLi,showTabs,filterfucnt,fetureListhow }) => {
  const planFeatures = priceFeature.map((item, index) => {
    return (
      index==5?<li key={index}><b>{item }</b></li>:<li key={index}>{item }</li>
      // <li key={index}>{item }</li>
    )
  });
  return (
    <>
          <div className={`priceBoxmain ${classList?classList:null}`}>
                <h4>{priceTitle}</h4>
                <p>{priceDisc}</p>
                <a className="btn connectBtn" href='/demo'>
                  Get Started
                </a>
                <ul>
                  {linkLi?<li>{linkLi}</li>:null}
                    {planFeatures?planFeatures:null}
                </ul>
                <button className='btn showPlanMob btnBlack' onClick={() => { showTabs(); filterfucnt(fetureListhow) }}>Read More</button>
            </div>
    </>
  )
}

export default pricingCard